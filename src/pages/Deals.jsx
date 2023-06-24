import React from "react";
import styled from "styled-components";
import Column from "../components/Deals/Column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DealsProvider } from "../components/Deals/DealsProvider";
import AddDealForm from "../components/Deals/AddDealForm";
import { Toaster, toast } from "react-hot-toast";
import { getColumns } from "../services/apiColumns";
import { getCards, updateCard } from "../services/apiCards";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Spinner from "../UI/Spinner";

export const Container = styled.div`
  display: flex;
  padding: 30px 0 0 10px;
  justify-content: center;
`;

export default function Deals() {
  return (
    <DealsProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <DealsContent />
    </DealsProvider>
  );
}

// TODO: fix flickering when dragging a card
function DealsContent() {
  const queryClient = useQueryClient();
  const [columnOrder, setColumnOrder] = React.useState(["0", "1", "2", "3"]);
  const [cards, setCards] = React.useState([]);
  const { mutate: mutateUpdate } = useMutation({
    mutationFn: updateCard,
    onSuccess: () => {
      queryClient.invalidateQueries("cards");
      toast.success("Card updated successfully");
    },
    onError: (error) => {
      toast.error("Error updating card: " + error.message);
    },
  });

  // const { data: columns, isLoading: isColumnsLoading } = useQuery({
  //   queryKey: ["columns"],
  //   queryFn: getColumns,
  // });

  const { data, isLoading: isCardsLoading } = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  React.useEffect(() => {
    if (data) {
      setCards(data);
    }
  }, [data]);

  console.log({ cards });
  // console.log({ columns });

  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = [...columnOrder];
      const [removed] = newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, removed);
      setColumnOrder(newColumnOrder);

      return;
    }

    const startColumnId = parseInt(source.droppableId);
    const finishColumnId = parseInt(destination.droppableId);
    const updatedCards = [...cards];

    const startCards = updatedCards.filter(
      (card) => card.column_id === startColumnId
    );
    const finishCards = updatedCards.filter(
      (card) => card.column_id === finishColumnId
    );

    const [removed] = startCards.splice(source.index, 1);
    finishCards.splice(destination.index, 0, removed);

    const startIndex = updatedCards.findIndex(
      (card) => card.column_id === startColumnId
    );
    const finishIndex = updatedCards.findIndex(
      (card) => card.column_id === finishColumnId
    );

    updatedCards[startIndex] = {
      ...updatedCards[startIndex],
      cards: startCards,
    };
    updatedCards[finishIndex] = {
      ...updatedCards[finishIndex],
      cards: finishCards,
    };
    setCards(updatedCards);

    const movedCard = removed;
    movedCard.column_id = finishColumnId;
    const updatedCard = { ...movedCard, date: new Date() };
    // movedCard.position = destination.index + 1;
    console.log({ updatedCard });
    mutateUpdate(updatedCard);
  };

  return (
    <>
      <AddDealForm />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {/* {isCardsLoading && <Spinner />} */}
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {columnOrder.map((columnId, index) => {
                return (
                  <Column
                    key={columnId}
                    id={columnId}
                    data={cards?.filter(
                      (card) => card.column_id === parseInt(columnId)
                    )}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
