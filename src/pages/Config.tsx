import React, { useState, useCallback, useContext } from 'react';
import { parser } from '../helpers/parser';
import { AppContext } from '../App';
import { Textarea } from '../components/Fields';
import Button from '../components/Button';
import './Config.css';

export default function ConfigPage() {
  const { config, updateConfig, toggleError } = useContext(AppContext);
  const [input, setInput] = useState();

  const handleChange = useCallback(
    (value) => {
      setInput(value);
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
      <Textarea
        label="Type a config in JSON format"
        onChange={handleChange}
        name="config"
        intitialValue={JSON.stringify(config)}
        className="Config-input"
      />
      <Button
        onClick={handleApply}
        disabled={false}
        label="Apply"
        className="Config-apply"
      />
    </>
  );
}
