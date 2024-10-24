"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[8808],{77584:function(i,t,n){n.r(t),n.d(t,{demos:function(){return g}});var e=n(90228),o=n.n(e),a=n(87999),u=n.n(a),s=n(75271),d=n(43393),y=n(85607),m=n(25144),h=n(62951),C=n(82517),g={"src-pro-card-demo-demos":{component:s.memo(s.lazy(function(){return Promise.all([n.e(6505),n.e(7068),n.e(7737),n.e(1212),n.e(8328),n.e(5144),n.e(2433)]).then(n.bind(n,52835))})),asset:{type:"BLOCK",id:"src-pro-card-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(41044).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.70"},"./style.ts":{type:"FILE",value:n(64144).Z},"antd-style":{type:"NPM",value:"3.6.2"}},entry:"index.tsx"},context:{"@ant-design/icons":y,"@yuntijs/ui":m,"/home/runner/work/yunti-ui/yunti-ui/src/ProCard/demos/style.ts":h,"antd-style":C},renderOpts:{compile:function(){var c=u()(o()().mark(function p(){var l,P=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7423).then(n.bind(n,7423));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,P));case 3:case"end":return r.stop()}},p)}));function f(){return c.apply(this,arguments)}return f}()}},"src-pro-card-demo-bordered":{component:s.memo(s.lazy(function(){return Promise.all([n.e(6505),n.e(7068),n.e(7737),n.e(1212),n.e(8328),n.e(5144),n.e(2433)]).then(n.bind(n,66486))})),asset:{type:"BLOCK",id:"src-pro-card-demo-bordered",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(5153).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.70"}},entry:"index.tsx"},context:{"@yuntijs/ui":m},renderOpts:{compile:function(){var c=u()(o()().mark(function p(){var l,P=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7423).then(n.bind(n,7423));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,P));case 3:case"end":return r.stop()}},p)}));function f(){return c.apply(this,arguments)}return f}()}}}},62951:function(i,t,n){n.r(t),n.d(t,{useStyles:function(){return s}});var e=n(53649),o=n.n(e),a=n(69049),u,s=(0,a.kc)(function(d){var y=d.css,m=d.token,h=d.prefixCls;return{root:y(u||(u=o()([`
      padding: 40px 24px;
      background: `,`;
    `])),m.colorBgLayout)}})},82517:function(i,t,n){n.r(t),n.d(t,{StyleProvider:function(){return e.V9},ThemeProvider:function(){return e.f6},createGlobalStyle:function(){return e.vJ},createInstance:function(){return e.Fs},createStyles:function(){return e.kc},createStylish:function(){return e.Yz},css:function(){return e.iv},cx:function(){return e.cx},extractStaticStyle:function(){return e.Y2},injectGlobal:function(){return e.hi},keyframes:function(){return e.F4},setupStyled:function(){return e.Us},styleManager:function(){return e.Rr},useAntdStylish:function(){return o.n},useAntdTheme:function(){return a.A},useAntdToken:function(){return u.S},useResponsive:function(){return s.F},useTheme:function(){return e.Fg},useThemeMode:function(){return d.r}});var e=n(69049),o=n(1040),a=n(87500),u=n(90556),s=n(70190),d=n(54106)},14170:function(i,t,n){n.r(t),n.d(t,{texts:function(){return o}});var e=n(43393);const o=[{value:"Pro Card, include Header, Content and Descriptions.",paraId:0},{value:`import { ReadOutlined } from '@ant-design/icons';
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
`,paraId:1,tocIndex:0},{value:"\u5F85\u8865\u5145",paraId:2,tocIndex:3}]},5153:function(i,t){t.Z=`import { Flex, ProCard, Tag, Typography } from '@yuntijs/ui';

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
`},41044:function(i,t){t.Z=`/* eslint-disable no-console */
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
`},64144:function(i,t){t.Z=`import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css\`
      padding: 40px 24px;
      background: \${token.colorBgLayout};
    \`,
  };
});
`}}]);
