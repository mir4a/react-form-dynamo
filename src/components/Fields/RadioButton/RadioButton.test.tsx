import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from './RadioButton';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <RadioButton
        items={[
          { label: 'a', value: '1' },
          { label: 'b', value: '2' },
        ]}
        initialValue="1"
        label="Radio Buttons"
        onChange={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
