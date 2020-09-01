import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ErrorMessage.css';

interface Props {
  message?: string;
  show: boolean;
}

export default React.memo(function ErrorMessage(props: Props) {
  const { message, show } = props;
  const [isShow, setIsShow] = useState(show);
  const [lastMessage, setLastMessage] = useState(message);

  useEffect(() => {
    setIsShow(show);
    if (show) {
      if (message !== lastMessage) {
        setIsShow(true);
      }
      setLastMessage(message);
    }
  }, [message, show, lastMessage]);

  const handleDismiss = useCallback(() => {
    setIsShow(false);
  }, []);

  const renderMessage = useMemo(() => {
    return (
      <>
        <span>{lastMessage}</span>
        <button className="ErrorMessage-close" onClick={handleDismiss}>
          <span className="ErrorMessage-close--text">&times;</span>
        </button>
      </>
    );
  }, [lastMessage, handleDismiss]);

  return (
    <CSSTransition
      in={isShow}
      timeout={200}
      classNames="ErrorMessage-animation"
      unmountOnExit
    >
      <div className="ErrorMessage">{renderMessage}</div>
    </CSSTransition>
  );
});
