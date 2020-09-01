import React, { memo, useState, useCallback } from 'react';
import Label from '../Label';
import './RadioButton.css';

export type RadioButtonType = {
  label: string;
  value: string;
};

interface Props {
  initialValue?: string;
  label: string;
  name?: string;
  onChange?: Function;
  items: RadioButtonType[];
}

/**
 * whether values: [{label: string, value: string}]
 */

export default memo(function RadioButton(props: Props) {
  const { initialValue, label, items, name, onChange } = props;
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const handleOnChange = useCallback(
    (event) => {
      const value = event.target.value;

      setSelectedValue(value);
      onChange && onChange(value);
    },
    [onChange, setSelectedValue],
  );

  return (
    <div className="RadioButton">
      <Label label={label} className="Label__block" />
      {items.map((item) => {
        const checked = String(selectedValue) === String(item.value);

        return (
          <Label label={item.label} key={item.value} className="Label__block">
            <input
              type="radio"
              name={name}
              value={item.value}
              checked={checked}
              onChange={handleOnChange}
            />
          </Label>
        );
      })}
    </div>
  );
});
