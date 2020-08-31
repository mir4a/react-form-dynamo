import React, { memo, ReactNode } from 'react';

interface Props {
  label: string;
  forId?: string;
  children?: ReactNode;
}
export default memo(function Label(props: Props) {
  const { label, forId, children } = props;

  return (
    <label htmlFor={forId}>
      <span>{label}</span>
      {children}
    </label>
  );
});
