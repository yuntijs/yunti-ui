import { Card } from '@yuntijs/ui';
import { useState } from 'react';

export default () => {
  const tabList = [
    {
      key: 'Themeable',
      label: 'Themeable',
    },
    {
      key: 'Fast',
      label: 'Fast',
    },
    {
      key: 'Light & Dark UI',
      label: 'Light & Dark UI',
    },
  ];
  const [activeTabKey, setActiveTabKey] = useState<string>(tabList[0].key);
  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };
  const contentList: Record<string, React.ReactNode> = {
    'Themeable': (
      <p>
        Provides a simple way to customize default themes, you can change the colors, fonts,
        breakpoints and everything you need.
      </p>
    ),
    'Fast': (
      <p>
        voids unnecessary styles props at runtime, making it more performant than other UI
        libraries.
      </p>
    ),
    'Light & Dark UI': (
      <p>
        Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML
        theme prop changes.
      </p>
    ),
  };
  return (
    <Card
      activeTabKey={activeTabKey}
      onTabChange={onTabChange}
      style={{ width: '100%' }}
      tabBarExtraContent={<a href="#">More</a>}
      tabList={tabList}
      tabProps={{
        size: 'middle',
      }}
    >
      {contentList[activeTabKey]}
    </Card>
  );
};
