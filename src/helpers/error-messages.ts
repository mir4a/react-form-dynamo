import { Errors, FIELD_TYPES } from './parser';

export function getErrorMessage(error: string) {
  switch (error) {
    case Errors.corrupt:
      return "Entered JSON is corrupt. Double check it's structure and enter it again";
    case Errors.empty:
      return 'Please enter a valid JSON to the textarea below';
    case Errors.missingItems:
      return 'The entered JSON should contain at least one item under "items"';
    case Errors.missingLabel:
      return 'Each item should contain a "label"';
    case Errors.missingType:
      return 'Each item should contain a "type"';
    case Errors.wrongType:
      return `Item type should be the one of the following: ${FIELD_TYPES.join(
        ', ',
      )}`;
    default:
      return 'Oops, something wrong is happened. Submit an issue to https://github.com/mir4a/react-form-dynamo/issues';
  }
}
