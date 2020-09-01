import React, { useContext, ReactElement, useMemo, useCallback } from 'react';
import Field from '../components/Fields';
import { AppContext } from '../App';

export default function ResultPage(): ReactElement | null {
  const appState = useContext(AppContext);

  if (appState && !appState.config) {
    return null;
  }

  return (
    <>
      <form>
        {appState &&
          appState.config &&
          appState.config.items.map((field: any) => (
            <div>
              <Field {...field} />
            </div>
          ))}
      </form>
    </>
  );
}
