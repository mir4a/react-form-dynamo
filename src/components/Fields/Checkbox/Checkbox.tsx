import React, { memo, useCallback, ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import Label from '../Label';
import './Checkbox.css';

interface Props {
  initialValue?: string;
  label: string;
  name?: string;
  onChange?: Function;
  className?: string;
}

export default memo(function Checkbox(props: Props) {
  const { initialValue, label, onChange, name, className } = props;
  const [checked, setChecked] = useState(!!initialValue);
  const checkboxClassNames = classNames('Checkbox', className);
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      onChange && onChange(event.target.checked);
    },
    [setChecked, onChange],
  );

  return (
    <>
      <Label label={label}>
        <input
          type="checkbox"
          name={name}
          onChange={handleOnChange}
          checked={checked}
          className={checkboxClassNames}
        />
      </Label>
    </>
  );
});
