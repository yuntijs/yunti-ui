"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[8808],{44201:function(d,t,n){n.r(t),n.d(t,{demos:function(){return y}});var e=n(90228),r=n.n(e),a=n(87999),u=n.n(a),s=n(75271),i=n(63216),y={"src-pro-card-demo-demos":{component:s.memo(s.lazy(function(){return Promise.all([n.e(6505),n.e(5131),n.e(8930),n.e(8621),n.e(8328),n.e(2426),n.e(2433)]).then(n.bind(n,37002))})),asset:{type:"BLOCK",id:"src-pro-card-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(94363).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.61"},"./style.ts":{type:"FILE",value:n(17981).Z},"antd-style":{type:"NPM",value:"3.6.2"}},entry:"index.tsx"},context:{"@ant-design/icons":n(98421),"@yuntijs/ui":n(82426),"./style.ts":n(62951),"antd-style":n(82517)},renderOpts:{compile:function(){var l=u()(r()().mark(function f(){var m,p=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(7358).then(n.bind(n,97358));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,p));case 3:case"end":return o.stop()}},f)}));function c(){return l.apply(this,arguments)}return c}()}},"src-pro-card-demo-bordered":{component:s.memo(s.lazy(function(){return Promise.all([n.e(6505),n.e(5131),n.e(8930),n.e(8621),n.e(8328),n.e(2426),n.e(2433)]).then(n.bind(n,7519))})),asset:{type:"BLOCK",id:"src-pro-card-demo-bordered",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(58150).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.61"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(82426)},renderOpts:{compile:function(){var l=u()(r()().mark(function f(){var m,p=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(7358).then(n.bind(n,97358));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,p));case 3:case"end":return o.stop()}},f)}));function c(){return l.apply(this,arguments)}return c}()}}}},62951:function(d,t,n){n.r(t),n.d(t,{useStyles:function(){return s}});var e=n(53649),r=n.n(e),a=n(69049),u,s=(0,a.kc)(function(i){var y=i.css,l=i.token,c=i.prefixCls;return{root:y(u||(u=r()([`
      padding: 40px 24px;
      background: `,`;
    `])),l.colorBgLayout)}})},82517:function(d,t,n){n.r(t),n.d(t,{StyleProvider:function(){return e.V9},ThemeProvider:function(){return e.f6},createGlobalStyle:function(){return e.vJ},createInstance:function(){return e.Fs},createStyles:function(){return e.kc},createStylish:function(){return e.Yz},css:function(){return e.iv},cx:function(){return e.cx},extractStaticStyle:function(){return e.Y2},injectGlobal:function(){return e.hi},keyframes:function(){return e.F4},setupStyled:function(){return e.Us},styleManager:function(){return e.Rr},useAntdStylish:function(){return r.n},useAntdTheme:function(){return a.A},useAntdToken:function(){return u.S},useResponsive:function(){return s.F},useTheme:function(){return e.Fg},useThemeMode:function(){return i.r}});var e=n(69049),r=n(1040),a=n(87500),u=n(90556),s=n(70190),i=n(54106)},78515:function(d,t,n){n.r(t),n.d(t,{texts:function(){return r}});var e=n(63216);const r=[{value:"Pro Card, include Header, Content and Descriptions.",paraId:0},{value:`import { ReadOutlined } from '@ant-design/icons';
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
`,paraId:1,tocIndex:0},{value:"\u5F85\u8865\u5145",paraId:2,tocIndex:3}]},58150:function(d,t){t.Z=`import { Flex, ProCard, Tag, Typography } from '@yuntijs/ui';

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
`},94363:function(d,t){t.Z=`/* eslint-disable no-console */
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
`},17981:function(d,t){t.Z=`import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css\`
      padding: 40px 24px;
      background: \${token.colorBgLayout};
    \`,
  };
});
`}}]);
