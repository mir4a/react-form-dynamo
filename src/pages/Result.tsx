import React, { useContext, ReactElement, useMemo, useCallback } from 'react';
import Field from '../components/Fields';
import { AppContext } from '../App';
import Button from '../components/Button';
import './Result.css';

export default function ResultPage(): ReactElement | null {
  const appState = useContext(AppContext);

  if (appState && appState.config) {
    return (
      <>
        <form>
          <h2>{appState.config.title}</h2>
          {appState.config.items.map((field: any) => (
            <div>
              <Field {...field} />
            </div>
          ))}
          {appState.config.buttons?.map((button: any, index: number) => (
            <div key={index} className="Result-btn-wrapper">
              <Button
                label={button.label}
                onClick={(event) => {
                  event.preventDefault();
                  alert(button.action);
                }}
              />
            </div>
          ))}
        </form>
      </>
    );
  }

  return null;
}
