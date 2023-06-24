import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between; /* add space between elements */
  align-items: center; /* vertically center elements */
  flex-direction: column;

  position: relative; /* add relative position to the container */
  width: 250px;
  margin-bottom: 15px;
  border-radius: 5px;

  background: #ffffff;
  box-shadow: 0px 1px 4px #bbb;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  padding: 15px 10px 10px 15px;
`;

export const Label = styled.header`
  width: 100%;
  height: 20px;

  border-bottom: 1px #dbdbdb solid;
  border-radius: 5px 5px 0 0;
  /* background: ${(props) => props.color}; */
  background: "hsl(0, 0%, 90%";
  display: flex;
  justify-content: flex-end;
`;

export const ActionsContainer = styled.div`
  position: absolute; /* add absolute position to the actions container */
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Icon = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.color};
  padding-right: 0.4rem;
  cursor: pointer;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  font-size: 1rem;
  color: #6d5d6e;
  width: 100%;
  border-radius: 0 0 5px 5px;
  background: #ffffff;
`;

export const Date = styled.div`
  font-weight: bold;
  padding: 0 0.5rem;
`;

export const Assignees = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  padding: 0.4rem;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-top: 1px #dbdbdb solid;
`;
