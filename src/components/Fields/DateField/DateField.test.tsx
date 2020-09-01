import React from 'react';
import renderer from 'react-test-renderer';
import DateField from './DateField';

it('renders correctly', () => {
  const tree = renderer
    .create(<DateField label="A" onChange={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
