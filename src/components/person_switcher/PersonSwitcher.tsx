import React, { useState, useEffect } from 'react';
import './PersonSwitcher.css';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import chatStore from '../../store/chat';

export const PersonSwitcher = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);
  const location = useLocation();
  console.log(location);
  console.log(chatState);

  const messageNotification = chatState.newDataCount > 0
    && (<span className="notify">{chatState.newDataCount}</span>);

  useEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, [])

  return (
    <div className="switcher-div">
      <Link to="/first-person"><button className="switcher">
        Person1
        {location.pathname !== '/first-person' && messageNotification}
      </button></Link>
      <Link to="/second-person"><button className="switcher">
        Person2
        {location.pathname !== '/second-person' && messageNotification}
      </button></Link>
    </div>
  );
}