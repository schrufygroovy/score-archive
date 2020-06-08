export const IMAGE_PARSING_STARTED = 'image parsing/started';
export const IMAGE_PARSING_FAILED = 'image parsing/failed';
export const IMAGE_PARSING_FINISHED = 'image parsing/finished';

export interface ImageParsingResult {
  resultText: string;
}

export interface ImageParsingState {
  loading: boolean;
  result?: ImageParsingResult;
  error?: unknown;
}

interface ImageParsingStartedAction {
  type: typeof IMAGE_PARSING_STARTED;
}

interface ImageParsingFailedAction {
  type: typeof IMAGE_PARSING_FAILED;
  error: unknown;
}

interface ImageParsingFinishedAction {
  type: typeof IMAGE_PARSING_FINISHED;
  payload: ImageParsingResult;
}

export type ImageParsingAction =
  | ImageParsingStartedAction
  | ImageParsingFailedAction
  | ImageParsingFinishedAction;
