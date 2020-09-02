import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from './ErrorMessage';

it('renders correctly', () => {
  const tree = renderer
    .create(<ErrorMessage show={true} message="error" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without message', () => {
  const tree = renderer.create(<ErrorMessage show={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('does not render with show=false', () => {
  const tree = renderer.create(<ErrorMessage show={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
