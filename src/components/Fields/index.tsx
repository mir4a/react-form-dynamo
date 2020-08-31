import React, { ReactElement } from 'react';
import Checkbox from './Checkbox';
import DateField from './DateField';
import Label from './Label';
import RadioButton from './RadioButton';
import TextField from './TextField';
import Textarea from './Textarea';
import NumberField from './NumberField';
import { RadioButtonType } from './RadioButton/RadioButton';

export {
  Checkbox,
  DateField,
  Label,
  NumberField,
  RadioButton,
  TextField,
  Textarea,
};

interface FieldProps {
  type: string;
  label: string;
  values?: RadioButtonType[];
}

export default function Field(props: FieldProps): ReactElement | null {
  let radioList: RadioButtonType[] = [];

  if (props.type === 'radio' && props.values) {
    radioList = props.values;
  }

  switch (props.type) {
    case 'checkbox':
      return <Checkbox {...props} />;
    case 'date':
      return <DateField {...props} />;
    case 'number':
      return <NumberField {...props} />;
    case 'radio':
      return <RadioButton {...props} values={radioList} />;
    case 'text':
      return <TextField {...props} />;
    case 'textarea':
      return <Textarea {...props} />;

    default:
      return null;
  }
}
