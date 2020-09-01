import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from './Textarea';

it('renders correctly', () => {
  const tree = renderer
    .create(<Textarea label="A" onChange={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
