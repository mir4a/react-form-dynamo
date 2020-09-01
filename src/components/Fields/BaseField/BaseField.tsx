import React, { memo, useState, useCallback, ChangeEvent } from 'react';
import Label from '../Label';
import classNames from 'classnames';
import '../Input.css';

interface Props {
  initialValue?: string;
  label: string;
  name?: string;
  onChange?: Function;
  className?: string;
  type: 'text' | 'number' | 'date';
}

function capitalizeString(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default memo(function BaseField(props: Props) {
  const { initialValue, label, className, onChange, type, name } = props;
  const [value, setValue] = useState(initialValue || '');
  const classNameFromType = `${capitalizeString(type)}Field`;
  const textFieldClassNames = classNames('Input', classNameFromType, className);
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      onChange && onChange(event.target.value);
    },
    [setValue, onChange],
  );

  return (
    <>
      <Label label={label} forId={name} className="Label__block" />
      <input
        type={type}
        id={name}
        name={name}
        className={textFieldClassNames}
        value={value}
        onChange={handleOnChange}
      />
    </>
  );
});
