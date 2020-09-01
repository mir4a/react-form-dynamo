import React, {
  useContext,
  ReactElement,
  useCallback,
  useState,
  useEffect,
} from 'react';
import ReactDOMServer from 'react-dom/server';
import Field, { Textarea } from '../components/Fields';
import { AppContext } from '../App';
import Button from '../components/Button';
import './Result.css';
import { getErrorMessage } from '../helpers/error-messages';

export default function ResultPage(): ReactElement | null {
  const appState = useContext(AppContext);
  const [source, setSource] = useState('');
  const [toggleSource, setToggleSource] = useState(false);

  const renderForm = useCallback(() => {
    if (appState && appState.config) {
      return (
        <form>
          <h2>{appState.config.title}</h2>
          {appState.config.items.map((field: any, index: number) => (
            <div key={index}>
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
      );
    }

    return null;
  }, [appState]);

  const renderSource = useCallback(() => {
    return (
      <Textarea
        label="Source code"
        initialValue={source}
        className="Result-source-textarea"
      />
    );
  }, [source]);

  useEffect(() => {
    setSource(ReactDOMServer.renderToStaticMarkup(renderForm() || <div />));
  }, [appState, renderForm]);

  const handleToggleSource = useCallback(() => {
    setToggleSource(!toggleSource);
  }, [setToggleSource, toggleSource]);

  if (appState && appState.error) {
    return (
      <div className="Result-blank Result-error">
        {getErrorMessage(appState.error)}
      </div>
    );
  }

  if (appState && appState.config) {
    return (
      <>
        <Button
          label={toggleSource ? 'Rendered Form' : 'Source Code'}
          onClick={handleToggleSource}
          className="Result-source-btn"
        />
        {toggleSource ? renderSource() : renderForm()}
      </>
    );
  }

  return <div className="Result-blank">Empty. Apply config first.</div>;
}
