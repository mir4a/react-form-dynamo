import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';

it('renders correctly', () => {
  const tree = renderer.create(<Label label="Radio Buttons" />).toJSON();
  expect(tree).toMatchSnapshot();
});
