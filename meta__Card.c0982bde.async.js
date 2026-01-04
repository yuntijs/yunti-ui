"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9477],{41453:function(l,t,n){n.r(t),n.d(t,{StoryBook:function(){return m.ZP},useControls:function(){return y.useControls},useCreateStore:function(){return y.useCreateStore}});var m=n(16896),y=n(95165)},30929:function(l,t,n){var m;n.r(t),n.d(t,{demos:function(){return g}});var y=n(90228),r=n.n(y),h=n(87999),p=n.n(h),a=n(52136),v=n(37408),c=n(77371),C=n(41453),g={"card-demo-demos":{component:a.memo(a.lazy(function(){return n.e(1058).then(n.bind(n,45982))})),asset:{type:"BLOCK",id:"card-demo-demos",refAtomIds:["Card"],dependencies:{"index.tsx":{type:"FILE",value:n(59054).Z},"@ant-design/icons":{type:"NPM",value:"5.6.1"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@ant-design/icons":v,"@yuntijs/ui":c},renderOpts:{compile:function(){var s=p()(r()().mark(function d(){var o,u=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},d)}));function i(){return s.apply(this,arguments)}return i}()}},"card-demo-meta":{component:a.memo(a.lazy(function(){return n.e(1058).then(n.bind(n,63555))})),asset:{type:"BLOCK",id:"card-demo-meta",refAtomIds:["Card"],dependencies:{"index.tsx":{type:"FILE",value:n(86001).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@yuntijs/ui":c},renderOpts:{compile:function(){var s=p()(r()().mark(function d(){var o,u=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},d)}));function i(){return s.apply(this,arguments)}return i}()}},"card-demo-grid":{component:a.memo(a.lazy(function(){return n.e(1058).then(n.bind(n,89372))})),asset:{type:"BLOCK",id:"card-demo-grid",refAtomIds:["Card"],dependencies:{"index.tsx":{type:"FILE",value:n(21465).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@yuntijs/ui":c},renderOpts:{compile:function(){var s=p()(r()().mark(function d(){var o,u=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},d)}));function i(){return s.apply(this,arguments)}return i}()}},"card-demo-tab":{component:a.memo(a.lazy(function(){return n.e(1058).then(n.bind(n,69395))})),asset:{type:"BLOCK",id:"card-demo-tab",refAtomIds:["Card"],dependencies:{"index.tsx":{type:"FILE",value:n(22930).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"},react:{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":c,react:m||(m=n.t(a,2))},renderOpts:{compile:function(){var s=p()(r()().mark(function d(){var o,u=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},d)}));function i(){return s.apply(this,arguments)}return i}()}},"card-demo-playground":{component:a.memo(a.lazy(function(){return n.e(1058).then(n.bind(n,17640))})),asset:{type:"BLOCK",id:"card-demo-playground",refAtomIds:["Card"],dependencies:{"index.tsx":{type:"FILE",value:n(85115).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":C,"@yuntijs/ui":c},renderOpts:{compile:function(){var s=p()(r()().mark(function d(){var o,u=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},d)}));function i(){return s.apply(this,arguments)}return i}()}}}},78155:function(l,t,n){n.r(t),n.d(t,{texts:function(){return m}});const m=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Card",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Card } from '@yuntijs/ui';

export default () => {
  return (
    <Card
      title= 'YuntiUI Card'
      bordered={true}
      loading={false}
      hoverable={true}
    >
    The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.
    </Children>
  );
};
`,paraId:1,tocIndex:1}]},21465:function(l,t){t.Z=`import { Card } from '@yuntijs/ui';

export default () => {
  const content =
    'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution. ';
  const gridStyle: React.CSSProperties = {
    width: '50%',
    textAlign: 'center',
  };
  return (
    <Card title="YuntiUI Card.Grid">
      <Card.Grid hoverable={false} style={gridStyle}>
        {content}
      </Card.Grid>
      <Card.Grid style={gridStyle}>{content}</Card.Grid>
      <Card.Grid style={gridStyle}>{content}</Card.Grid>
    </Card>
  );
};
`},86001:function(l,t){t.Z=`import { Card, Logo } from '@yuntijs/ui';

export default () => {
  const description =
    'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution. ';

  return (
    <Card>
      <Card.Meta avatar={<Logo />} description={description} title="YuntiUI Card.Meta" />
    </Card>
  );
};
`},85115:function(l,t){t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import type { CardProps } from '@yuntijs/ui';
import { Card } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: CardProps | any = useControls(
    {
      title: 'YuntiUI Card',
      extra: 'extra',
      bordered: true,
      loading: false,
      hoverable: true,
      children:
        'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution.',
      type: {
        options: ['inner'],
        value: 'default',
      },
      size: {
        options: ['default', 'small'],
        value: 'default',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Card {...control} />
    </StoryBook>
  );
};
`},22930:function(l,t){t.Z=`import { Card } from '@yuntijs/ui';
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
`},59054:function(l,t){t.Z=`import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from '@yuntijs/ui';

export default () => {
  return (
    <Card
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      bordered={true}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      extra="extra"
      hoverable={true}
      loading={false}
      title="YuntiUI Card"
    >
      The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully
      compatible with Antd components, and it is recommended to use antd-style as the default
      css-in-js styling solution.
    </Card>
  );
};
`}}]);
