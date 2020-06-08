import { Store as ReduxStore, AnyAction } from 'redux';
import { ImageParsingState } from './image-parsing/types';

export interface AppState {
  counter: number;
  imageParsing: ImageParsingState;
}

export type GetState = () => AppState;

export type Store = ReduxStore<AppState, AnyAction>;
