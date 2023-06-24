import styled from "styled-components";
import { TbMessageChatbot } from "react-icons/tb";

export const ChatBotIcon = styled(TbMessageChatbot)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  font-size: 4rem;
  z-index: 100;
  cursor: pointer;

  &:hover {
    color: hsl(0, 0%, 60%);
  }
`;

export const ChatBar = styled.div`
  position: absolute;
  bottom: 0;
  right: 4rem;
  margin: 1rem;
  font-size: 4rem;
  width: 40rem;
  height: 80vh;
  z-index: 100;

  &:hover {
    color: #00b4d8;
  }

  &.animate {
    animation: bounce 0.5s;
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
