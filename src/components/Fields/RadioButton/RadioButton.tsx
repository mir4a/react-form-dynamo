import React, { memo } from 'react';
import Label from '../Label';

export type RadioButtonType = {
  label: string;
  value: string;
};

interface Props {
  intitialValue?: string;
  values: RadioButtonType[];
  label: string;
}

/**
 * whether values: [{label: string, value: string}]
 */

export default memo(function RadioButton(props: Props) {
  const { intitialValue, label } = props;

  return (
    <>
      <Label label={label} />
      <input type="radio" />
    </>
  );
});
