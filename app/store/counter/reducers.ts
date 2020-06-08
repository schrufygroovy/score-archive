import { Action } from 'redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './types';

export default function counterReducer(state = 0, action: Action<string>) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
