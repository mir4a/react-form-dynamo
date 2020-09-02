import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './Tab';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Tab>
        <div>Content 1</div>
      </Tab>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
