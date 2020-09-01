import React from 'react';
import renderer from 'react-test-renderer';
import NumberField from './NumberField';

it('renders correctly', () => {
  const tree = renderer
    .create(<NumberField label="A" onChange={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
