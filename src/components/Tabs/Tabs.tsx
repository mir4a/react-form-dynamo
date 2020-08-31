import React, { useState, useCallback, ReactNode, useMemo } from 'react';
import TabContent from './Tab';

type Tab = {
  isActive?: boolean;
  name: string;
  content: ReactNode;
};

interface Props {
  tabs: Tab[];
}

export function TabButton(props: {
  name: string;
  isActive?: boolean;
  onClick: (e: React.MouseEvent) => void;
}) {
  const { name, isActive, onClick } = props;
  return (
    <>
      <button onClick={onClick}>
        isActive?: {JSON.stringify(isActive)},{name}
      </button>
    </>
  );
}

export default function Tabs(props: Props) {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState<number | undefined>();

  const [tabButtons, tabItems] = useMemo(() => {
    let tabButtons: any[] = [];
    let tabItems: any[] = [];
    tabs.forEach((tab, index) => {
      tabButtons.push(
        <TabButton
          key={`TabButton_${index}`}
          name={tab.name}
          isActive={activeTab ? index === activeTab : tab.isActive}
          onClick={() => {
            setActiveTab(index);
          }}
        />,
      );

      tabItems.push(
        <TabContent key={`TabContent_${index}`} isActive={tab.isActive}>
          {tab.content}
        </TabContent>,
      );
    });

    return [tabButtons, tabItems];
  }, [tabs, activeTab]);

  const handleTabChange = useCallback(
    function changeTab(tabId: number): void {
      setActiveTab(tabId);
    },
    [setActiveTab],
  );

  return (
    <>
      <h1>This is tabs:</h1>
      <div>{tabButtons}</div>
      <hr />
      <div>{activeTab ? tabItems![activeTab] : tabItems[0]}</div>
    </>
  );
}
