import React, { ReactNode } from 'react';
import './Tab.css';

interface Props {
  children: ReactNode;
}

export default function Tab(props: Props) {
  return <div className="Tab">{props.children}</div>;
}
