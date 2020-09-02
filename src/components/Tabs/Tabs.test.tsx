import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './Tabs';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Tabs
        tabs={[
          { isActive: true, name: 'Tab 1', content: <div>Content 1</div> },
          { name: 'Tab 2', content: <span>Content 2</span> },
        ]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with empty tabs', () => {
  const tree = renderer.create(<Tabs tabs={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
