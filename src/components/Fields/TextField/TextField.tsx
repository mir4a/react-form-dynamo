import React, { memo } from 'react';
import Label from '../Label';

interface Props {
  intitialValue?: string;
  label: string;
}
export default memo(function TextField(props: Props) {
  const { intitialValue, label } = props;

  return (
    <>
      <Label label={label} />
      <input type="text" />
    </>
  );
});
