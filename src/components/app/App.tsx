import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatPage from '../chat_page/ChatPage';
import { PersonSwitcher } from '../person_switcher/PersonSwitcher';

const acc1 = {
  name: 'first-person'
}

const acc2 = {
  name: 'second-person'
}

const App: React.FC = () => {
  return (
    <Router>
      <>
        <PersonSwitcher />
        <Switch>
          <Route exact path="/" component={() => <ChatPage person={acc1} />} />
          <Route exact path="/first-person" component={() => <ChatPage person={acc1} />} />
          <Route exact path="/second-person" component={() => <ChatPage person={acc2} />} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
