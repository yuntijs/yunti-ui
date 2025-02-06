"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[78808],{61946:function(d,t,n){n.r(t),n.d(t,{demos:function(){return C}});var e=n(90228),r=n.n(e),l=n(87999),u=n.n(l),s=n(75271),i=n(86215),m=n(71983),y=n(62951),h=n(17012),C={"src-pro-card-demo-demos":{component:s.memo(s.lazy(function(){return Promise.all([n.e(79233),n.e(63626),n.e(50778),n.e(35787),n.e(59850),n.e(91867),n.e(26577),n.e(52433)]).then(n.bind(n,68742))})),asset:{type:"BLOCK",id:"src-pro-card-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(99090).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.93"},"./style.ts":{type:"FILE",value:n(56197).Z},"antd-style":{type:"NPM",value:"3.7.1"}},entry:"index.tsx"},context:{"@ant-design/icons":i,"@yuntijs/ui":m,"/home/runner/work/yunti-ui/yunti-ui/src/ProCard/demos/style.ts":y,"antd-style":h},renderOpts:{compile:function(){var c=u()(r()().mark(function p(){var a,P=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(74807).then(n.bind(n,74807));case 2:return o.abrupt("return",(a=o.sent).default.apply(a,P));case 3:case"end":return o.stop()}},p)}));function f(){return c.apply(this,arguments)}return f}()}},"src-pro-card-demo-bordered":{component:s.memo(s.lazy(function(){return Promise.all([n.e(79233),n.e(63626),n.e(50778),n.e(35787),n.e(59850),n.e(91867),n.e(26577),n.e(52433)]).then(n.bind(n,67082))})),asset:{type:"BLOCK",id:"src-pro-card-demo-bordered",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(65676).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.93"}},entry:"index.tsx"},context:{"@yuntijs/ui":m},renderOpts:{compile:function(){var c=u()(r()().mark(function p(){var a,P=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(74807).then(n.bind(n,74807));case 2:return o.abrupt("return",(a=o.sent).default.apply(a,P));case 3:case"end":return o.stop()}},p)}));function f(){return c.apply(this,arguments)}return f}()}}}},62951:function(d,t,n){n.r(t),n.d(t,{useStyles:function(){return s}});var e=n(53649),r=n.n(e),l=n(47512),u,s=(0,l.kc)(function(i){var m=i.css,y=i.token,h=i.prefixCls;return{root:m(u||(u=r()([`
      padding: 40px 24px;
      background: `,`;
    `])),y.colorBgLayout)}})},17012:function(d,t,n){n.r(t),n.d(t,{StyleProvider:function(){return e.V9},ThemeProvider:function(){return e.f6},createGlobalStyle:function(){return e.vJ},createInstance:function(){return e.Fs},createStyles:function(){return e.kc},createStylish:function(){return e.Yz},css:function(){return e.iv},cx:function(){return e.cx},extractStaticStyle:function(){return e.Y2},injectGlobal:function(){return e.hi},keyframes:function(){return e.F4},setupStyled:function(){return e.Us},styleManager:function(){return e.Rr},useAntdStylish:function(){return r.n},useAntdTheme:function(){return l.A},useAntdToken:function(){return u.S},useResponsive:function(){return s.F},useTheme:function(){return e.Fg},useThemeMode:function(){return i.r}});var e=n(47512),r=n(38609),l=n(27152),u=n(10985),s=n(81134),i=n(33592)},64336:function(d,t,n){n.r(t),n.d(t,{texts:function(){return e}});const e=[{value:"Pro Card, include Header, Content and Descriptions.",paraId:0},{value:`import { ReadOutlined } from '@ant-design/icons';
import { Badge, ProCard, Typography } from '@yuntijs/ui';

const { Time } = Typography;

const ProCardDemo = () => {
  return (
    <ProCard style={{ width: 520 }}>
      <ProCard.Header
        title="\u6211\u662F\u6807\u9898"
        description="\u6211\u662F\u63CF\u8FF0"
        extra={{ menu: { items: [{ key: 'edit', label: '\u7F16\u8F91' }] } }}
        icon={{
          icon: <ReadOutlined />,
        }}
      />
      <ProCard.Content>
        <ProCard.Descriptions
          items={[
            {
              key: 'status',
              label: '\u72B6\u6001',
              children: <Badge status="success" text="\u5DF2\u53D1\u5E03" />,
            },
            {
              key: 'publishTime',
              label: '\u53D1\u5E03\u65F6\u95F4',
              children: <Time relativeTime={false} time={new Date().toISOString()} />,
            },
          ]}
        />
      </ProCard.Content>
    </ProCard>
  );
};

export default ProCardDemo;
`,paraId:1,tocIndex:0},{value:"\u5F85\u8865\u5145",paraId:2,tocIndex:3}]},65676:function(d,t){t.Z=`import { Flex, ProCard, Tag, Typography } from '@yuntijs/ui';

const { Time } = Typography;

const ProCardBorderedDemo = () => {
  return (
    <ProCard bordered hoverable={false} style={{ width: 420 }}>
      <ProCard.Header
        description="\u6211\u662F\u63CF\u8FF0"
        icon={{
          src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }}
        title="\u6211\u662F\u6807\u9898"
      />
      <ProCard.Content>
        <ProCard.Descriptions
          column={2}
          items={[
            {
              key: 'creator',
              label: '\u521B\u5EFA\u8005',
              children: 'Luobo Zhang',
            },
            {
              key: 'tags',
              contentStyle: {
                width: '100%',
              },
              children: (
                <Flex gap={4} justify="flex-end">
                  <Tag color="geekblue">LLM</Tag>
                  <Tag color="green">Embedding</Tag>
                </Flex>
              ),
            },
            {
              key: 'updateTime',
              label: '\u66F4\u65B0\u65F6\u95F4',
              children: <Time relativeTime={false} time={new Date().toISOString()} />,
            },
          ]}
        />
      </ProCard.Content>
    </ProCard>
  );
};

export default ProCardBorderedDemo;
`},99090:function(d,t){t.Z=`/* eslint-disable no-console */
import { ReadOutlined } from '@ant-design/icons';
import { Badge, ProCard, Typography } from '@yuntijs/ui';

import { useStyles } from './style';

const { Time } = Typography;

const ProCardDemo = () => {
  const { styles } = useStyles();
  return (
    <div className={styles.root}>
      <ProCard onClick={e => console.log('card clicked =>', e)} style={{ width: 520 }}>
        <ProCard.Header
          description="\u6211\u662F\u7279\u522B\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u7684\u63CF\u8FF0"
          extra={{
            menu: {
              items: [
                { key: 'edit', label: '\u7F16\u8F91' },
                { key: 'delete', label: '\u5220\u9664', danger: true },
              ],
              onClick: ({ key }) => {
                console.log('key =>', key);
              },
            },
          }}
          icon={{
            icon: <ReadOutlined />,
          }}
          title="\u6211\u662F\u7279\u522B\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u7684\u6807\u9898"
        />
        <ProCard.Content>
          <ProCard.Descriptions
            items={[
              {
                key: 'status',
                label: '\u72B6\u6001',
                children: <Badge status="success" text="\u5DF2\u53D1\u5E03" />,
              },
              {
                key: 'publishTime',
                label: '\u53D1\u5E03\u65F6\u95F4',
                children: <Time relativeTime={false} time={new Date().toISOString()} />,
              },
              {
                key: 'creator',
                label: '\u521B\u5EFA\u8005',
                children: 'Luobo Zhang',
              },
              {
                key: 'updateTime',
                label: '\u66F4\u65B0\u65F6\u95F4',
                children: <Time relativeTime={false} time={new Date().toISOString()} />,
              },
            ]}
          />
        </ProCard.Content>
      </ProCard>
    </div>
  );
};

export default ProCardDemo;
`},56197:function(d,t){t.Z=`import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css\`
      padding: 40px 24px;
      background: \${token.colorBgLayout};
    \`,
  };
});
`}}]);
