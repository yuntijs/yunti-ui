(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[87940],{1234:function(r,e,n){var s={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(a){if(!n.o(s,a))return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l});var i=s[a],u=i[0];return n.e(i[1]).then(function(){return n.t(u,19)})}o.keys=function(){return Object.keys(s)},o.id=1234,r.exports=o},54252:function(r,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return j}});var s=n(90228),o=n.n(s),a=n(87999),i=n.n(a),u=n(75271),l=n(71983),f=n(19016),j={"status-demo-demos":{component:u.memo(u.lazy(function(){return n.e(92002).then(n.bind(n,85949))})),asset:{type:"BLOCK",id:"status-demo-demos",refAtomIds:["Status"],dependencies:{"index.tsx":{type:"FILE",value:n(90611).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.99"}},entry:"index.tsx"},context:{"@yuntijs/ui":l},renderOpts:{compile:function(){var m=i()(o()().mark(function y(){var d,c=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(74807).then(n.bind(n,74807));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,c));case 3:case"end":return t.stop()}},y)}));function p(){return m.apply(this,arguments)}return p}()}},"status-demo-playground":{component:u.memo(u.lazy(function(){return n.e(92002).then(n.bind(n,64019))})),asset:{type:"BLOCK",id:"status-demo-playground",refAtomIds:["Status"],dependencies:{"index.tsx":{type:"FILE",value:n(20880).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.99"}},entry:"index.tsx"},context:{"@lobehub/ui":f,"@yuntijs/ui":l},renderOpts:{compile:function(){var m=i()(o()().mark(function y(){var d,c=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(74807).then(n.bind(n,74807));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,c));case 3:case"end":return t.stop()}},y)}));function p(){return m.apply(this,arguments)}return p}()}}}},66342:function(r,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return s}});const s=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Badge",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Status } from '@yuntijs/ui';

export default () => {
  //
  return <Status status="processing" text="\u6784\u5EFA\u4E2D" tooltip="\u9636\u6BB5\uFF1A1/4" />;
};
`,paraId:1,tocIndex:1}]},20880:function(r,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},90611:function(r,e){"use strict";e.Z=`import { Status } from '@yuntijs/ui';

export default () => {
  return <Status status="processing" text="\u6784\u5EFA\u4E2D" title="\u6A21\u578B\u6784\u5EFA\u4E2D" tooltip="\u9636\u6BB5\uFF1A1/4" />;
};
`}}]);
