import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button label="A" onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders disabled button', () => {
  const tree = renderer
    .create(<Button disabled={true} label="A" onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders button with disabled=false', () => {
  const tree = renderer
    .create(<Button disabled={false} label="A" onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders button with additional class names', () => {
  const tree = renderer
    .create(<Button className="some-css-class" label="A" onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
