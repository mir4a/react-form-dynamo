import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import './helpers/parser';
import Tabs from './components/Tabs';
import ConfigPage from './pages/Config';
import ResultPage from './pages/Result';
// import type { Form } from './helpers/parser';

export const AppContext = React.createContext({
  config: { items: [] },
  error: undefined,
  updateConfig: (newConfig: any) => {},
  toggleError: (err: any) => {},
});

function App() {
  const [config, setConfig] = useState({ items: [] });
  const [error, setError] = useState();
  const updateConfig = (newConfig: { items: [] }): void => {
    setConfig(newConfig);
  };
  const toggleError = (err: any) => {
    setError(err);
  };
  return (
    <div className="App">
      <AppContext.Provider value={{ config, error, updateConfig, toggleError }}>
        <pre>
          //Config
          {JSON.stringify(config)}
        </pre>
        <pre>
          // Error
          {JSON.stringify(error)}
        </pre>
        <Tabs
          tabs={[
            { isActive: true, name: 'Edit', content: <ConfigPage /> },
            { name: 'Result', content: <ResultPage /> },
          ]}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
