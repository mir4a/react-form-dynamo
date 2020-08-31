import React, { useContext, ReactElement } from 'react';
import Field from '../components/Fields';
import { AppContext } from '../App';

export default function ResultPage(): ReactElement | null {
  const { config } = useContext(AppContext);

  if (!config) {
    return null;
  }

  return (
    <>
      <form>
        {config.items.map((field: any) => (
          <Field {...field} />
        ))}
      </form>
    </>
  );
}
