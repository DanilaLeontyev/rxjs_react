export type Message = {
  person: string;
  text: string;
}

export type ChatInitialState = {
  data: Message[];
  newDataCount: number;
  status: string;
  error: string;
}