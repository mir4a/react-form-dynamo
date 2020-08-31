import React, { ReactNode } from 'react';

interface Props {
  isActive?: boolean;
  children: ReactNode;
}

export default function Tab(props: Props) {
  return (
    <>
      is Active?: {JSON.stringify(props.isActive)}
      <>{props.children}</>
    </>
  );
}
