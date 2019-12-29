import { ChatInitialState, Message } from './types/chat';
import { Subject } from 'rxjs';
import React from 'react';

const subject = new Subject();

export const initialState: ChatInitialState = {
  status: '',
  error: '',
  data: [],
  newDataCount: 0,
}

let state = initialState;

const chatStore = {
  init: () => {
    state = { ...state, newDataCount: 0 }
    subject.next(state)
  },
  subscribe: (setState: React.Dispatch<React.SetStateAction<any>>) => subject.subscribe(setState),
  sendMessage: (message: Message) => {
    state = {
      ...state,
      data: [...state.data, message],
      newDataCount: state.newDataCount + 1
    }
    subject.next(state);
  },
  clearChat: () => {
    state = initialState;
    subject.next(state);
  },
  initialState
}

export default chatStore;