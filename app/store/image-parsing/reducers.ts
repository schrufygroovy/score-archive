import {
  ImageParsingState,
  ImageParsingAction,
  IMAGE_PARSING_FAILED,
  IMAGE_PARSING_STARTED,
  IMAGE_PARSING_FINISHED
} from './types';

const defaultState = {
  loading: false
} as ImageParsingState;

export default function imageParsingReducer(
  state = defaultState,
  action: ImageParsingAction
): ImageParsingState {
  switch (action.type) {
    case IMAGE_PARSING_STARTED:
      return {
        loading: true
      };
    case IMAGE_PARSING_FAILED:
      return {
        loading: false,
        error: action.error
      };
    case IMAGE_PARSING_FINISHED:
      return {
        loading: false,
        result: action.payload
      };
    default:
      return state;
  }
}
