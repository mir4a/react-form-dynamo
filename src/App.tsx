import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import ConfigPage from './pages/Config';
import ResultPage from './pages/Result';
import ErrorMessage from './components/ErrorMessage';
import { Form } from './helpers/parser';
import { getErrorMessage } from './helpers/error-messages';

export type AppContextType = {
  config?: Form;
  error?: string;
  updateConfig: (newConfig: Form) => void;
  toggleError: (error: string | undefined) => void;
};

export const AppContext = React.createContext<AppContextType | undefined>(
  undefined,
);

function App() {
  const [config, setConfig] = useState();
  const [error, setError] = useState();
  const updateConfig = (newConfig: any): void => {
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
        <ErrorMessage
          message={error ? getErrorMessage(error!) : ''}
          show={!!error}
        />
        <Tabs
          tabs={[
            { isActive: true, name: 'Config', content: <ConfigPage /> },
            { name: 'Result', content: <ResultPage /> },
          ]}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
