import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Checkbox initialValue="1" label="Radio Buttons" onChange={() => {}} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
