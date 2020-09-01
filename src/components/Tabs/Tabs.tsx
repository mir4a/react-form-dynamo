import React, { useState, ReactNode, useMemo, useEffect } from 'react';
import TabContent from './Tab';
import classNames from 'classnames';
import './Tabs.css';

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
  const btnClassNames = classNames('Tabs-button', {
    'Tabs-button__active': isActive,
  });
  return (
    <button onClick={onClick} className={btnClassNames}>
      {name}
    </button>
  );
}

export default function Tabs(props: Props) {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState<number | undefined>();

  useEffect(() => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].isActive) {
        setActiveTab(i);
        break;
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [tabButtons, tabItems] = useMemo(() => {
    let tabButtons: any[] = [];
    let tabItems: any[] = [];
    tabs.forEach((tab, index) => {
      tabButtons.push(
        <TabButton
          key={`TabButton_${index}`}
          name={tab.name}
          isActive={
            activeTab !== undefined ? index === activeTab : tab.isActive
          }
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

  return (
    <div className="Tabs">
      <div className="Tabs-navigation">{tabButtons}</div>
      <div className="Tabs-wrapper">
        {activeTab !== undefined && tabItems[activeTab]}
      </div>
    </div>
  );
}
