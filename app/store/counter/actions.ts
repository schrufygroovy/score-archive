import { Dispatch as ReduxDispatch, Action } from 'redux';

import { GetState } from '../types';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './types';

type Dispatch = ReduxDispatch<Action<string>>;

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
