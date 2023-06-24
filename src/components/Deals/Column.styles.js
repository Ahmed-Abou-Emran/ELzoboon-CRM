import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  opacity: ${(props) => (props.done ? 0.5 : 1)};
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 23px;
  padding-inline: 25px;
  text-align:center;
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px;
  padding: 10px;

  border: 2px transparent solid;
  transition: 200ms;

  ${(props) =>
    props.isDraggingOver &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      background: #aadd;
      cursor: grabbing;
    `}
`;
