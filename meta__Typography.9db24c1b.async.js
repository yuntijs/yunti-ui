(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9661],{34862:function(i,t,n){var r={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(s){if(!n.o(r,s))return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l});var p=r[s],a=p[0];return n.e(p[1]).then(function(){return n.t(a,19)})}o.keys=function(){return Object.keys(r)},o.id=34862,i.exports=o},6217:function(i,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return l}});var r=n(90228),o=n.n(r),s=n(87999),p=n.n(s),a=n(75271),l={"typography-demo-demos":{component:a.memo(a.lazy(function(){return n.e(5113).then(n.bind(n,17459))})),asset:{type:"BLOCK",id:"typography-demo-demos",refAtomIds:["Typography"],dependencies:{"index.tsx":{type:"FILE",value:n(69806).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.21"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(75843)},renderOpts:{compile:function(){var m=p()(o()().mark(function d(){var u,h=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8648).then(n.bind(n,78648));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,h));case 3:case"end":return e.stop()}},d)}));function y(){return m.apply(this,arguments)}return y}()}},"typography-demo-playground":{component:a.memo(a.lazy(function(){return n.e(5113).then(n.bind(n,98559))})),asset:{type:"BLOCK",id:"typography-demo-playground",refAtomIds:["Typography"],dependencies:{"index.tsx":{type:"FILE",value:n(40415).Z},"@lobehub/ui":{type:"NPM",value:"1.138.25"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.21"}},entry:"index.tsx"},context:{"@lobehub/ui":n(60174),"@yuntijs/ui":n(75843)},renderOpts:{compile:function(){var m=p()(o()().mark(function d(){var u,h=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8648).then(n.bind(n,78648));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,h));case 3:case"end":return e.stop()}},d)}));function y(){return m.apply(this,arguments)}return y}()}}}},32571:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return r}});const r=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Typography",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Space, Typography } from '@yuntijs/ui';

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
`,paraId:1,tocIndex:1}]},40415:function(i,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},69806:function(i,t){"use strict";t.Z=`import { Space, Typography } from '@yuntijs/ui';

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
      <Typography.Time format="YYYY-MM-DD hh:mm:ss" relativeTime={true} time="2024-04-15" />
      <Typography.Time format="YYYY-MM-DD hh:mm:ss" relativeTime={false} time="2024-04-15" />
      <Typography.Time format="YYYY-MM-DD" relativeTime={false} time="2024-04-15" />
      <Typography.Time
        format="YYYY-MM-DD"
        relativeTime={false}
        time="2024-04-15"
        tooltip={{ title: undefined }}
      />
      <Typography.Time
        format="YYYY-MM-DD"
        relativeTime={false}
        time="2024-04-15"
        tooltip={{ title: '2024-04-15 15:00' }}
      />
      <Typography.Time
        ellipsis={{
          tooltip: {
            title: '2024-04-15 15:00',
          },
        }}
        format="YYYY-MM-DD"
        relativeTime={false}
        style={{ width: 50 }}
        time="2024-04-15"
        tooltip={{ title: undefined }}
      />
    </Space>
  );
};
`}}]);
