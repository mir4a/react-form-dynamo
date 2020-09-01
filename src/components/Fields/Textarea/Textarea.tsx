import React, { useState, useCallback, ChangeEvent } from 'react';
import Label from '../Label';
import classNames from 'classnames';
import './Textarea.css';

interface Props {
  initialValue?: string;
  label: string;
  name?: string;
  onChange?: Function;
  className?: string;
}

export default React.memo(function TextareaField(props: Props) {
  const { initialValue, label, name, onChange, className } = props;
  const [value, setValue] = useState(initialValue);
  const textareaClassNames = classNames('Textarea', className);
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
      onChange && onChange(event.target.value);
    },
    [setValue, onChange],
  );

  return (
    <>
      <Label label={label} forId={name} className="Label__block" />
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
