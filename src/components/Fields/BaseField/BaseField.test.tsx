import React from 'react';
import renderer from 'react-test-renderer';
import BaseField from './BaseField';

it('renders correctly', () => {
  const tree = renderer
    .create(<BaseField type="text" label="A" onChange={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
