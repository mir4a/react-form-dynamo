import React, { memo } from 'react';
import BaseField from '../BaseField';
import './DateField.css';

interface Props {
  initialValue?: string;
  label: string;
  name?: string;
  onChange?: Function;
  className?: string;
}

export default memo(function DateField(props: Props) {
  return <BaseField {...props} type="date" />;
});
