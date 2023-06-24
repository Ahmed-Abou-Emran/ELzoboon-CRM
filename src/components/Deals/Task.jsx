import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CiCalendar } from "react-icons/ci";
import { formatDate } from "../../utils/helpers";
import { deleteCard } from "../../services/apiCards";
import { BsThreeDots, BsPersonCircle } from "react-icons/bs";
import ThreeDotsMenu from "./ThreeDotsMenu";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import {
  Container,
  Title,
  Label,
  DateContainer,
  Date,
  Assignees,
  Footer,
} from "./Task.styles.js";
import { toast } from "react-hot-toast";

export function Task({ card, index }) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteCard,
    onSuccess: () => queryClient.invalidateQueries("cards"),
  });

  const handleDelete = () => {
    console.log(card.id);
    toast.success("Card deleted successfully");
    mutate(card.id);
  };

  return (
    <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Label color="hsl(0, 0%, 90%">
            <ThreeDotsMenu handleDelete={handleDelete} />
            {/* <ThreeDotsMenu handleDelete={handleDelete} /> */}
          </Label>
          <Title>{card.deal}</Title>
          <Footer>
            <DateContainer>
              <CiCalendar size={25} color={"CCCCCC"} />
              <Date>{formatDate(card.date)}</Date>
            </DateContainer>
            <Assignees>
              <BsPersonCircle
                size={25}
                color={"#808080"}
                assignedTo={card.assignedTo}
              />
            </Assignees>
          </Footer>
        </Container>
      )}
    </Draggable>
  );
}
