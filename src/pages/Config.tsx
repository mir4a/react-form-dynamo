import React, { useState, useCallback, useContext } from 'react';
import { parser, Form, Errors } from '../helpers/parser';
import { AppContext } from '../App';

export default function ConfigPage() {
  const { config, updateConfig, toggleError } = useContext(AppContext);
  const [input, setInput] = useState();

  const handleChange = useCallback(
    (event) => {
      setInput(event.target.value);
    },
    [setInput],
  );

  const handleApply = useCallback(() => {
    let result;
    try {
      toggleError(undefined);
      result = parser(input!);
    } catch (parserError) {
      console.log('config: ', parserError);
      toggleError(parserError.message);
    }
    updateConfig(result);
  }, [input]);

  return (
    <>
      <hr />
      JSON: {JSON.stringify(config)}
      <br />
      <textarea onChange={handleChange}>{input}</textarea>
      <br />
      <button onClick={handleApply}>Apply</button>
      <hr />
    </>
  );
}
