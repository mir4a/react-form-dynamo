import React, { memo } from 'react';

interface Props {
  label: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export default memo(function Button(props: Props) {
  const { label, onClick } = props;

  return <button onClick={onClick}>{label}</button>;
});
