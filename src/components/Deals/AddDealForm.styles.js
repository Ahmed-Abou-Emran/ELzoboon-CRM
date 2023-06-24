import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 40rem;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 1px 4px #bbb;
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 30rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 40rem;
  padding: 1.5rem 1rem 1rem 1.5rem;
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const Button = styled.button`
  width: 10rem;
  height: 30px;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 4px #bbb;
  cursor: pointer;
  color: #ffffff;
  background: ${(props) => props.color || "#1565c0"};

  transition: all 0.3s ease;

  padding: 0.5rem;
  margin: 1rem;
  &:hover {
    pointer: cursor;
    background: ${(props) => props.hoverColor || "#2196f3"};
    transition: all 0.3s;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  text-align: center;
  border-bottom: 1px #dbdbdb solid;
  border-radius: 5px 5px 0 0;
  font-size: 1.6rem;
  background: ${(props) => props.color};
  color: #ffffff;
  padding: 1rem;
  position: absolute;
  top: 0;
`;

export const ModalActionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SelectMenu = styled.select`
  width: 90%;
  height: 40%;
  border: 1px solid #dbdbdb;
  border-radius: 0.5rem;
  padding: 1rem;
`;
