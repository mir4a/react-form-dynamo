import React, { memo, ReactNode } from 'react';
import './Label.css';

interface Props {
  label: string;
  forId?: string;
  children?: ReactNode;
}
export default memo(function Label(props: Props) {
  const { label, forId, children } = props;

  return (
    <label htmlFor={forId} className="Label">
      <span className="Label-text">{label}</span>
      {children}
    </label>
  );
});
