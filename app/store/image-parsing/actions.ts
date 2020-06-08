import { Dispatch as ReduxDispatch } from 'redux';

import {
  IMAGE_PARSING_STARTED,
  IMAGE_PARSING_FAILED,
  IMAGE_PARSING_FINISHED,
  ImageParsingAction
} from './types';
import parseImage from '../../utils/parse-image';

type Dispatch = ReduxDispatch<ImageParsingAction>;

function imageParsingStarted(): ImageParsingAction {
  return {
    type: IMAGE_PARSING_STARTED
  };
}

function imageParsingFailed(error: unknown): ImageParsingAction {
  return {
    type: IMAGE_PARSING_FAILED,
    error
  };
}

function imageParsingFinished(parsedText: string): ImageParsingAction {
  return {
    type: IMAGE_PARSING_FINISHED,
    payload: {
      resultText: parsedText
    }
  };
}

export default function parseImageAsync() {
  return (dispatch: Dispatch) => {
    dispatch(imageParsingStarted());
    parseImage()
      .then(parsedText => {
        dispatch(imageParsingFinished(parsedText));
        return null;
      })
      .catch(error => {
        dispatch(imageParsingFailed(error));
      });
  };
}
