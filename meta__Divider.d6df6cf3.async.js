(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[29104],{69143:function(d,t,n){var i={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(u){if(!n.o(i,u))return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l});var s=i[u],r=s[0];return n.e(s[1]).then(function(){return n.t(r,19)})}o.keys=function(){return Object.keys(i)},o.id=69143,d.exports=o},22248:function(d,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return _}});var i=n(90228),o=n.n(i),u=n(87999),s=n.n(u),r=n(75271),l=n(55691),f=n(94572),y=n(17724),_={"divider-demo-demos":{component:r.memo(r.lazy(function(){return n.e(80137).then(n.bind(n,70942))})),asset:{type:"BLOCK",id:"divider-demo-demos",refAtomIds:["Divider"],dependencies:{"index.tsx":{type:"FILE",value:n(61998).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.70"}},entry:"index.tsx"},context:{"@yuntijs/ui":f},renderOpts:{compile:function(){var m=s()(o()().mark(function v(){var a,c=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,c));case 3:case"end":return e.stop()}},v)}));function p(){return m.apply(this,arguments)}return p}()}},"divider-demo-playground":{component:r.memo(r.lazy(function(){return n.e(80137).then(n.bind(n,22053))})),asset:{type:"BLOCK",id:"divider-demo-playground",refAtomIds:["Divider"],dependencies:{"index.tsx":{type:"FILE",value:n(96730).Z},"@lobehub/ui":{type:"NPM",value:"1.153.16"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.70"}},entry:"index.tsx"},context:{"@lobehub/ui":y,"@yuntijs/ui":f},renderOpts:{compile:function(){var m=s()(o()().mark(function v(){var a,c=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,c));case 3:case"end":return e.stop()}},v)}));function p(){return m.apply(this,arguments)}return p}()}}}},58187:function(d,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});var i=n(55691);const o=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Divider",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { Divider } from '@yuntijs/ui';

export default () => {
  return (
    <Divider
      mode="expanded"
      defaultOpen={true}
      content={
        <div>
          The YuntiUI components are inspired by LobeUI and developed based on Antd components,
          fully compatible with Antd components, and it is recommended to use antd-style as the
          default css-in-js styling solution.
        </div>
      }
      iconPlacement="left"
      orientation="left"
      orientationMargin={0}
      dashed={true}
    >
      YuntiUI
    </Divider>
  );
};
`,paraId:1,tocIndex:1}]},96730:function(d,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import type { DividerProps } from '@yuntijs/ui';
import { Divider } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: DividerProps | any = useControls(
    {
      mode: {
        options: ['expanded', 'line', 'default'],
        value: 'line',
      },
      defaultOpen: false,
      content: 'content',
      iconPlacement: {
        options: ['left', 'right'],
        value: 'left',
      },
      type: {
        options: ['horizontal', 'vertical'],
        value: 'horizontal',
      },
      orientation: {
        options: ['left', 'right', 'center'],
        value: 'left',
      },
      orientationMargin: 10,
      children: '',
      dashed: false,
      plain: false,
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Divider {...control} />
    </StoryBook>
  );
};
`},61998:function(d,t){"use strict";t.Z=`import { Divider } from '@yuntijs/ui';

export default () => {
  return (
    <div style={{ width: '100%' }}>
      <div>
        <Divider mode="line" type="horizontal" />
      </div>
      <div>
        \u5206\u5272\u7EBF\u5DE6\u4FA7
        <Divider mode="line" type="vertical" />
        \u5206\u5272\u7EBF\u53F3\u4FA7
      </div>

      <div>
        <Divider
          content="YuntiUI"
          dashed={true}
          defaultOpen={true}
          iconPlacement="left"
          mode="expanded"
          orientation="left"
          orientationMargin={0}
        >
          <div>
            The YuntiUI components are inspired by LobeUI and developed based on Antd components,
            fully compatible with Antd components, and it is recommended to use antd-style as the
            default css-in-js styling solution.
          </div>
        </Divider>
      </div>

      <div>
        <Divider
          dashed={true}
          defaultOpen={true}
          iconPlacement="left"
          mode="default"
          orientation="left"
          orientationMargin={0}
        >
          YuntiUI
        </Divider>
      </div>
    </div>
  );
};
`}}]);
