import React, { memo } from 'react';
import Label from '../Label';

interface Props {
  intitialValue?: string;
  label: string;
}
export default memo(function TextareaField(props: Props) {
  const { intitialValue, label } = props;

  return (
    <>
      <Label label={label} />
      <textarea></textarea>
    </>
  );
});
