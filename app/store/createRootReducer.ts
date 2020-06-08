import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import counterReducer from './counter/reducers';
import imageParsingReducer from './image-parsing/reducers';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    imageParsing: imageParsingReducer
  });
}
