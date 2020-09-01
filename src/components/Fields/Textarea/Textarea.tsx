import React, { memo, useState, useCallback, ChangeEvent } from 'react';
import Label from '../Label';
import classNames from 'classnames';
import './Textarea.css';

interface Props {
  intitialValue?: string;
  label: string;
  name?: string;
  onChange?: Function;
  className?: string;
}

export default memo(function TextareaField(props: Props) {
  const { intitialValue, label, name, onChange, className } = props;
  const [value, setValue] = useState(intitialValue);
  const textareaClassNames = classNames('Textarea', className);
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      setValue(value);
      onChange && onChange(value);
    },
    [setValue, onChange],
  );

  return (
    <>
      <Label label={label} forId={name} />
      <textarea
        className={textareaClassNames}
        id={name}
        name={name}
        onChange={handleOnChange}
        value={value}
      />
    </>
  );
});
