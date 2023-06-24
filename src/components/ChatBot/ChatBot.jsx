import React from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { ChatBar, ChatBotIcon } from "./ChatBot.styles";

const API_KEY = "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";
const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

export default function ChatBot() {
  const [showChat, setShowChat] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      message: `Welcome to Elzoboon CRM ChatBot!

We're here to help you navigate and make the most of your CRM experience. Whether you're looking to manage deals, handle emails, organize contacts, track leads, generate reports, or schedule events, our chatbot is at your service.

Our CRM also incorporates machine learning capabilities, bringing advanced insights and automation to traditional CRM functionalities. It's designed to optimize your sales, marketing, and customer management processes.

Feel free to ask us any questions or seek guidance on any of the CRM pages and features, and we'll provide you with quick and accurate responses.

Thank you for choosing Elzoboon CRM. Let's maximize your CRM potential together!
`,
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(message);
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    // let apiMessages = chatMessages.map((messageObject) => {
    //   let role = "";
    //   if (messageObject.sender === "ChatGPT") {
    //     role = "assistant";
    //   } else {
    //     role = "user";
    //   }
    //   return { role: role, content: messageObject.message };
    // });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    // const apiRequestBody = {
    //   model: "gpt-3.5-turbo",
    //   messages: [
    //     systemMessage, // The system message DEFINES the logic of our chatGPT
    //     ...apiMessages, // The messages from our chat with ChatGPT
    //   ],
    // };

    await fetch("http://127.0.0.1:8000/bard", {
      method: "POST",

      body: JSON.stringify(chatMessages),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages((prev) => {
          return [
            ...prev,
            {
              message: data,
              sender: "ChatGPT",
            },
          ];
        });
        setIsTyping(false);
      });
  }

  const handleChatClick = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      <ChatBotIcon onClick={handleChatClick} />

      {showChat && (
        <ChatBar>
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="Elzoboon CRM is typing" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  console.log(message);
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </ChatBar>
      )}
    </>
  );
}
