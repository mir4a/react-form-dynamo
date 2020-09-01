import React, { memo } from 'react';
import BaseField from '../BaseField';
import './NumberField.css';

interface Props {
  initialValue?: string;
  label: string;
  name?: string;
  onChange?: Function;
  className?: string;
}

export default memo(function NumberField(props: Props) {
  return <BaseField {...props} type="number" />;
});
