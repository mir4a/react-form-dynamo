import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import ConfigPage from './pages/Config';
import ResultPage from './pages/Result';
import { getErrorMessage } from './helpers/error-messages';

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
      <header className="App-header">
        <h1 className="App-title">React Form Dynamo</h1>
      </header>
      <AppContext.Provider value={{ config, error, updateConfig, toggleError }}>
        {error && getErrorMessage(error!)}
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
