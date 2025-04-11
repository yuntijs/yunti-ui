(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[79661],{72239:function(i,t,n){var o={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function s(r){if(!n.o(o,r))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a});var p=o[r],l=p[0];return n.e(p[1]).then(function(){return n.t(l,19)})}s.keys=function(){return Object.keys(o)},s.id=72239,i.exports=s},76798:function(i,t,n){"use strict";var o;n.r(t),n.d(t,{demos:function(){return T}});var s=n(90228),r=n.n(s),p=n(87999),l=n.n(p),a=n(75271),h=n(594),f=n(16911),T={"typography-demo-demos":{component:a.memo(a.lazy(function(){return n.e(15113).then(n.bind(n,32070))})),asset:{type:"BLOCK",id:"typography-demo-demos",refAtomIds:["Typography"],dependencies:{"index.tsx":{type:"FILE",value:n(34629).Z},"@yuntijs/ui":{type:"NPM",value:"1.2.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":h,react:o||(o=n.t(a,2))},renderOpts:{compile:function(){var d=l()(r()().mark(function y(){var u,c=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(92074).then(n.bind(n,92074));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,c));case 3:case"end":return e.stop()}},y)}));function m(){return d.apply(this,arguments)}return m}()}},"typography-demo-playground":{component:a.memo(a.lazy(function(){return n.e(15113).then(n.bind(n,88136))})),asset:{type:"BLOCK",id:"typography-demo-playground",refAtomIds:["Typography"],dependencies:{"index.tsx":{type:"FILE",value:n(18377).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.2.0"}},entry:"index.tsx"},context:{"@lobehub/ui":f,"@yuntijs/ui":h},renderOpts:{compile:function(){var d=l()(r()().mark(function y(){var u,c=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(92074).then(n.bind(n,92074));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,c));case 3:case"end":return e.stop()}},y)}));function m(){return d.apply(this,arguments)}return m}()}}}},90675:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});const o=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Typography",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Space, Typography } from '@yuntijs/ui';

export default () => {
  return (
    <Space direction="vertical">
      <Typography.Link>Link</Typography.Link>
      <Typography.Text>Text</Typography.Text>
      <Typography.Title level={3}>Title</Typography.Title>
      <Typography.Paragraph>
        Paragraph:The YuntiUI components are inspired by LobeUI and developed based on Antd
        components, fully compatible with Antd components, and it is recommended to use antd-style
        as the default css-in-js styling solution.
      </Typography.Paragraph>
      <Typography.Time time="2024-04-15" format="YYYY-MM-DD hh:mm:ss" relativeTime={true} />
      <Typography.Time time="2024-04-15" format="YYYY-MM-DD hh:mm:ss" relativeTime={false} />
      <Typography.Time format="YYYY-MM-DD" relativeTime={false} time="2024-04-15" />
    </Space>
  );
};
`,paraId:1,tocIndex:1}]},18377:function(i,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import type { TypographyProps } from '@yuntijs/ui';
import { Typography } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: TypographyProps | any = useControls(
    {
      time: '2024-04-15',
      format: 'YYYY-MM-DD hh:mm:ss',
      relativeTime: true,
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Typography.Time {...control} />
    </StoryBook>
  );
};
`},34629:function(i,t){"use strict";t.Z=`import { Divider, Typography } from '@yuntijs/ui';
import React from 'react';

const { Title, Paragraph, Text, Link, Time } = Typography;

const blockContent = \`AntV \u662F\u8682\u8681\u96C6\u56E2\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u4E00\u5957\u7B80\u5355\u65B9\u4FBF\u3001\u4E13\u4E1A\u53EF\u9760\u3001\u4E0D\u9650\u53EF\u80FD\u7684\u6570\u636E\u53EF\u89C6\u5316\u6700\u4F73\u5B9E\u8DF5\u3002\u5F97\u76CA\u4E8E\u4E30\u5BCC\u7684\u4E1A\u52A1\u573A\u666F\u548C\u7528\u6237\u9700\u6C42\u6311\u6218\uFF0CAntV \u7ECF\u5386\u591A\u5E74\u79EF\u7D2F\u4E0E\u4E0D\u65AD\u6253\u78E8\uFF0C\u5DF2\u652F\u6491\u6574\u4E2A\u963F\u91CC\u96C6\u56E2\u5185\u5916 20000+ \u4E1A\u52A1\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u4E86\u65E5\u5747\u5343\u4E07\u7EA7 UV \u4EA7\u54C1\u7684\u4E25\u82DB\u8003\u9A8C\u3002
\u6211\u4EEC\u6B63\u5728\u57FA\u7840\u56FE\u8868\uFF0C\u56FE\u5206\u6790\uFF0C\u56FE\u7F16\u8F91\uFF0C\u5730\u7406\u7A7A\u95F4\u53EF\u89C6\u5316\uFF0C\u667A\u80FD\u53EF\u89C6\u5316\u7B49\u5404\u4E2A\u53EF\u89C6\u5316\u7684\u9886\u57DF\u8015\u8018\uFF0C\u6B22\u8FCE\u540C\u8DEF\u4EBA\u4E00\u8D77\u524D\u884C\u3002\`;

export default () => {
  return (
    <Typography>
      <Title>Introduction</Title>

      <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties
        and duplication and reduce the efficiency of development.
      </Paragraph>

      <Paragraph>
        After massive project practice and summaries, Ant Design, a design language for background
        applications, is refined by Ant UED Team, which aims to{' '}
        <Text strong>
          uniform the user interface specs for internal background projects, lower the unnecessary
          cost of design differences and implementation and liberate the resources of design and
          front-end development
        </Text>
        .
      </Paragraph>

      <Title level={2}>Guidelines and Resources</Title>

      <Paragraph>
        We supply a series of design principles, practical patterns and high quality design
        resources (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create
        their product prototypes beautifully and efficiently.
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Link href="/docs/spec/proximity">Principles</Link>
          </li>
          <li>
            <Link href="/docs/spec/overview">Patterns</Link>
          </li>
          <li>
            <Link href="/docs/resources">Resource Download</Link>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        Press <Text keyboard>Esc</Text> to exit...
      </Paragraph>

      <Divider />

      <Paragraph>
        <Text code>Time</Text> component:
        <ul>
          <li>
            <Time time="2024-06-30 11:11:11" />
          </li>
          <li>
            <Time relativeTime={false} time="2024-06-30 11:11:11" />
          </li>
          <li>
            <Time format="YYYY/MM/DD HH:mm" relativeTime={false} time="2024-06-30 11:11:11" />
          </li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
`}}]);
