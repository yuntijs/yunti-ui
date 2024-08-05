(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[7940],{59168:function(r,e,n){var s={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(a){if(!n.o(s,a))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d});var i=s[a],u=i[0];return n.e(i[1]).then(function(){return n.t(u,19)})}o.keys=function(){return Object.keys(s)},o.id=59168,r.exports=o},12450:function(r,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return f}});var s=n(90228),o=n.n(s),a=n(87999),i=n.n(a),u=n(75271),d=n(32965),f={"status-demo-demos":{component:u.memo(u.lazy(function(){return n.e(2002).then(n.bind(n,786))})),asset:{type:"BLOCK",id:"status-demo-demos",refAtomIds:["Status"],dependencies:{"index.tsx":{type:"FILE",value:n(47784).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.63"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(82426)},renderOpts:{compile:function(){var m=i()(o()().mark(function y(){var l,c=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7358).then(n.bind(n,97358));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},y)}));function p(){return m.apply(this,arguments)}return p}()}},"status-demo-playground":{component:u.memo(u.lazy(function(){return n.e(2002).then(n.bind(n,4500))})),asset:{type:"BLOCK",id:"status-demo-playground",refAtomIds:["Status"],dependencies:{"index.tsx":{type:"FILE",value:n(12615).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.63"}},entry:"index.tsx"},context:{"@lobehub/ui":n(59806),"@yuntijs/ui":n(82426)},renderOpts:{compile:function(){var m=i()(o()().mark(function y(){var l,c=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7358).then(n.bind(n,97358));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},y)}));function p(){return m.apply(this,arguments)}return p}()}}}},2614:function(r,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return o}});var s=n(32965);const o=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Badge",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Status } from '@yuntijs/ui';

export default () => {
  //
  return <Status status="processing" text="\u6784\u5EFA\u4E2D" tooltip="\u9636\u6BB5\uFF1A1/4" />;
};
`,paraId:1,tocIndex:1}]},12615:function(r,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { Status, StatusProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const options: StatusProps | any = useControls(
    {
      status: {
        options: ['success', 'processing', 'error', 'default', 'warning'],
        value: 'processing',
      },
      text: '\u6784\u5EFA\u4E2D',
      tooltip: '\u9636\u6BB5\uFF1A1/4',
      color: {
        options: [
          'blue',
          'purple',
          'cyan',
          'green',
          'magenta',
          'pink',
          'red',
          'orange',
          'yellow',
          'volcano',
          'geekblue',
          'lime',
          'gold',
        ],
        value: '',
      },
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Status {...options} />
    </StoryBook>
  );
};
`},47784:function(r,e){"use strict";e.Z=`import { Status } from '@yuntijs/ui';

export default () => {
  return <Status status="processing" text="\u6784\u5EFA\u4E2D" title="\u6A21\u578B\u6784\u5EFA\u4E2D" tooltip="\u9636\u6BB5\uFF1A1/4" />;
};
`}}]);
