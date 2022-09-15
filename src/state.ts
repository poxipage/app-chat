import { state, type State } from "poxi";

type Schema = { messages: Array<string> };
export const getState = () => state<Schema>();
export const getMessages = () => getState().getArray("messages");

export function onCreate(state: State<Schema>) {
  state.set({ messages: [] });
}
