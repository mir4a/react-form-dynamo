import React, { useState, useCallback, useContext, useMemo } from 'react';
import { parser } from '../helpers/parser';
import { AppContext } from '../App';
import { Textarea } from '../components/Fields';
import Button from '../components/Button';
import './Config.css';

import demoConfig from '../helpers/demo-config.json';

export default function ConfigPage() {
  const appState = useContext(AppContext);
  const initialValue = appState!.config ? appState!.config : demoConfig;
  const initialValueJSON = useMemo(() => {
    return JSON.stringify(initialValue, null, 2);
  }, [initialValue]);
  const [input, setInput] = useState(initialValueJSON);

  const handleChange = useCallback((value) => {
    setInput(value);
  }, []);

  const handleApply = useCallback(() => {
    let result;
    try {
      appState!.toggleError(undefined);
      result = parser(input!);
      appState!.updateConfig(result);
    } catch (parserError) {
      console.log('config: ', parserError);
      appState!.toggleError(parserError.message);
    }
  }, [input]);

  return (
    <>
      <Textarea
        label="Type a config in JSON format"
        onChange={handleChange}
        name="config"
        initialValue={initialValueJSON}
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
