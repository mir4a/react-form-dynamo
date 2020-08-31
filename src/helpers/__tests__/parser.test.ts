import { Errors, parser } from '../parser';

describe('parser', () => {
  test('empty input', () => {
    expect(() => {
      parser();
    }).toThrow(Errors.empty);
  });

  test('missing item type', () => {
    const json = JSON.stringify({ items: [{ label: 'bla' }] });
    expect(() => {
      parser(json);
    }).toThrow(Errors.missingType);
  });

  test('missing item label', () => {
    const json = JSON.stringify({ items: [{ type: 'number' }] });
    expect(() => {
      parser(json);
    }).toThrow(Errors.missingLabel);
  });

  test('wrong item type', () => {
    const json = JSON.stringify({ items: [{ label: 'bla', type: 'range' }] });
    expect(() => {
      parser(json);
    }).toThrow(Errors.wrongType);
  });

  test('empty items list', () => {
    const json = JSON.stringify({ items: [] });
    expect(() => {
      parser(json);
    }).toThrow(Errors.missingItems);
  });

  test('corrupt input', () => {
    expect(() => {
      parser('{');
    }).toThrow(Errors.corrupt);
  });

  test('json as primitives', () => {
    expect(() => {
      parser('true');
    }).toThrow(Errors.missingItems);

    expect(() => {
      parser('false');
    }).toThrow(Errors.missingItems);

    expect(() => {
      parser('{}');
    }).toThrow(Errors.missingItems);

    expect(() => {
      parser('[]');
    }).toThrow(Errors.missingItems);

    expect(() => {
      parser('1');
    }).toThrow(Errors.missingItems);

    expect(() => {
      parser('2');
    }).toThrow(Errors.missingItems);
  });

  test('valid input', () => {
    const input = {
      title: 'form title',
      items: [{ label: 'a', type: 'number' }],
    };
    expect(parser(JSON.stringify(input))).toStrictEqual(input);
  });
});
