/**
 * 1. Parse and validate JSON
 * 2. Generate fields
 *  */

export const FIELD_TYPES = [
  'checkbox',
  'date',
  'number',
  'radio',
  'text',
  'textarea',
] as const;

export type Field = {
  label: string;
  type: typeof FIELD_TYPES[number];
  value?: string;
  placeholder?: string;
  name?: string;
};

export type ActionButton = {
  label: string;
  action: string;
};

export type Form = {
  title?: string;
  buttons?: ActionButton[];
  items: Field[];
};

export enum Errors {
  corrupt = 'CorruptJSON',
  empty = 'EmptyInput',
  missingItems = 'MissingItems',
  missingLabel = 'MissingLabel',
  missingType = 'MissingType',
  wrongType = 'WrongType',
}

export type ErrorType = {
  name: typeof Errors;
  message?: string;
};

export function inputReviver(key: string, value: any): any {
  if (key === 'type') {
    if (typeof value === 'string' && value.length === 0) {
      throw new Error(Errors.empty);
    }

    if (FIELD_TYPES.indexOf(value) === -1) {
      throw new Error(Errors.wrongType);
    }
  }

  if (key === 'date' && value) {
    return new Date(value);
  }

  return value;
}

export function validateItems(items: any[]): Errors | false {
  if (!items || items.length === 0) {
    throw new Error(Errors.missingItems);
  }

  return items.reduce((_acc, item) => {
    if (!item.label || item.label === '') {
      throw new Error(Errors.missingLabel);
    }

    if (!item.type || item.type === '') {
      throw new Error(Errors.missingType);
    }

    return false;
  }, false);
}

export function parser(json: string): Form {
  let result;

  if (json === undefined || json === null || json.length === 0) {
    throw new Error(Errors.empty);
  }

  try {
    result = JSON.parse(json, inputReviver);
  } catch (error) {
    console.log(error.name, error.message);
    if (error.name === 'SyntaxError') {
      throw new Error(Errors.corrupt);
    }

    throw error;
  }

  validateItems(result.items);

  return result;
}
