import React, { memo } from 'react';
import classNames from 'classnames';
import './Button.css';

interface Props {
  label: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  className?: string;
  disabled?: boolean;
}

export default memo(function Button(props: Props) {
  const { label, onClick, className, disabled } = props;
  const btnClassNames = classNames('Button', className);

  return (
    <button onClick={onClick} className={btnClassNames} disabled={disabled}>
      {label}
    </button>
  );
});
