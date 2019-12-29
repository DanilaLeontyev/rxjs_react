import React, { useState, useLayoutEffect } from "react";
import './ChatPage.css'
import { ChatInitialState, Message } from '../../store/types/chat';
import chatStore from '../../store/chat';

type ChatPageProps = {
  person: {
    name: string;
  }
}

const ChatPage = (props: ChatPageProps) => {
  const [chatState, setChatState] = useState<ChatInitialState>(chatStore.initialState);
  const [messageContent, setMessageContent] = useState<string>('');

  useLayoutEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, [])

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    const messageObject: Message = {
      person: props.person.name,
      text: messageContent,
    }
    setMessageContent('');
    chatStore.sendMessage(messageObject);
  }

  return (
    <div className="container">
      <h2>{props.person.name}</h2>
      <div className="chat-box">
        {chatState.data.map(message => (
          <div key={Math.random()}>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>
          </div>
        ))}
      </div>
      <form id="messageForm" onSubmit={onFormSubmit}>
        <input
          value={messageContent}
          onChange={(value) => setMessageContent(String(value.target.value))}
          type="text"
          id="messageInput"
          name="messageInput"
          placeholder="type here..."
          required
        />
        <button type="submit">Send</button> <br />
      </form>
      <button className="clear-button" onClick={() => chatStore.clearChat()}>
        Clear Chat
      </button>
    </div>
  );
}

export default ChatPage;