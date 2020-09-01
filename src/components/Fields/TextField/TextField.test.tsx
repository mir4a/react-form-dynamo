import React from 'react';
import renderer from 'react-test-renderer';
import TextField from './TextField';

it('renders correctly', () => {
  const tree = renderer
    .create(<TextField label="A" onChange={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
