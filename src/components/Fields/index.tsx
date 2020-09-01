import React, { ReactElement } from 'react';
import Checkbox from './Checkbox';
import DateField from './DateField';
import Label from './Label';
import RadioButton from './RadioButton';
import TextField from './TextField';
import Textarea from './Textarea';
import NumberField from './NumberField';
import { RadioButtonType } from './RadioButton/RadioButton';
import { FIELD_TYPES } from '../../helpers/parser';

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
  type: typeof FIELD_TYPES[number];
  label: string;
  items?: RadioButtonType[];
}

export default function Field(props: FieldProps): ReactElement | null {
  let radioList: RadioButtonType[] = [];

  if (props.type === 'radio' && props.items) {
    radioList = props.items;
  }

  switch (props.type) {
    case 'checkbox':
      return <Checkbox {...props} />;
    case 'date':
      return <DateField {...props} />;
    case 'number':
      return <NumberField {...props} />;
    case 'radio':
      return <RadioButton {...props} items={radioList} />;
    case 'text':
      return <TextField {...props} />;
    case 'textarea':
      return <Textarea {...props} />;

    default:
      return null;
  }
}
