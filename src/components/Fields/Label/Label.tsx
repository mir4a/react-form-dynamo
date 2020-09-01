import React, { memo, ReactNode } from 'react';
import classNames from 'classnames';
import './Label.css';

interface Props {
  label: string;
  forId?: string;
  children?: ReactNode;
  className?: string;
}
export default memo(function Label(props: Props) {
  const { label, forId, children, className } = props;
  const labelClassNames = classNames('Label', className);

  return (
    <label htmlFor={forId} className={labelClassNames}>
      {children}
      <span className="Label-text">{label}</span>
    </label>
  );
});
