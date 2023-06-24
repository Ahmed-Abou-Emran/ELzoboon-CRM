import React, { useContext } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Container, Title, TaskList } from "./Column.styles.js";
import { Task } from "./Task";

const getTitle = (columnId) => {
  switch (columnId) {
    case "0":
      return "Prospecting";
    case "1":
      return "Negotiation";
    case "2":
      return "Closed-Won";
    case "3":
      return "Closed-Lost";
    default:
      return "";
  }
};

function Column({ data, index, id }) {
  console.log(data);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          done={data?.done}
        >
          <Title {...provided.dragHandleProps}>{getTitle(id)}</Title>
          <Droppable droppableId={id}>
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {data?.map((card, index) => (
                  <Task key={card.id} card={card} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;
