import { Store as ReduxStore, AnyAction } from 'redux';

export interface AppState {
  counter: number;
}

export type GetState = () => AppState;

export type Store = ReduxStore<AppState, AnyAction>;
