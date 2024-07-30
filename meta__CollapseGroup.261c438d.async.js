(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6272],{37442:function(s,o,n){var u={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function t(l){if(!n.o(u,l))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+l+"'");throw d.code="MODULE_NOT_FOUND",d});var a=u[l],r=a[0];return n.e(a[1]).then(function(){return n.t(r,19)})}t.keys=function(){return Object.keys(u)},t.id=37442,s.exports=t},32649:function(s,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return f}});var u=n(90228),t=n.n(u),l=n(87999),a=n.n(l),r=n(50959),d=n(61651),f={"collapsegroup-demo-demos":{component:r.memo(r.lazy(function(){return n.e(524).then(n.bind(n,63939))})),asset:{type:"BLOCK",id:"collapsegroup-demo-demos",refAtomIds:["CollapseGroup"],dependencies:{"index.tsx":{type:"FILE",value:n(67562).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.55"},"lucide-react":{type:"NPM",value:"0.400.0"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(63408),"lucide-react":n(68242)},renderOpts:{compile:function(){var p=a()(t()().mark(function c(){var i,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8896).then(n.bind(n,68896));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,y));case 3:case"end":return e.stop()}},c)}));function m(){return p.apply(this,arguments)}return m}()}},"collapsegroup-demo-playground":{component:r.memo(r.lazy(function(){return n.e(524).then(n.bind(n,56750))})),asset:{type:"BLOCK",id:"collapsegroup-demo-playground",refAtomIds:["CollapseGroup"],dependencies:{"index.tsx":{type:"FILE",value:n(32592).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.55"},"lucide-react":{type:"NPM",value:"0.400.0"}},entry:"index.tsx"},context:{"@lobehub/ui":n(12658),"@yuntijs/ui":n(63408),"lucide-react":n(68242)},renderOpts:{compile:function(){var p=a()(t()().mark(function c(){var i,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8896).then(n.bind(n,68896));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,y));case 3:case"end":return e.stop()}},c)}));function m(){return p.apply(this,arguments)}return m}()}}}},18626:function(s,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return t}});var u=n(61651);const t=[{value:"Based on ",paraId:0,tocIndex:0},{value:"lobehub ui FormGroup",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { CollapseGroup } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  return (
    <CollapseGroup icon={VariableIcon} title="\u8F93\u51FA\u53D8\u91CF">
      \u6211\u662F\u6536\u8D77\u6765\u7684\u5185\u5BB9
    </CollapseGroup>
  );
};
`,paraId:1,tocIndex:0}]},32592:function(s,o){"use strict";o.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { CollapseGroup, CollapseGroupProps } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  const store = useCreateStore();
  const control: CollapseGroupProps | any = useControls(
    {
      title: '\u8F93\u51FA\u53D8\u91CF',
      defaultActive: true,
      variant: {
        options: ['default', 'block', 'ghost', 'pure'],
        value: 'default',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store} style={{ width: '100%' }}>
      <CollapseGroup icon={VariableIcon} style={{ width: '100%' }} {...control}>
        \u6211\u662F\u6536\u8D77\u6765\u7684\u5185\u5BB9
      </CollapseGroup>
    </StoryBook>
  );
};
`},67562:function(s,o){"use strict";o.Z=`import { CollapseGroup } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  return (
    <CollapseGroup icon={VariableIcon} style={{ width: '100%' }} title="\u8F93\u51FA\u53D8\u91CF">
      \u6211\u662F\u6536\u8D77\u6765\u7684\u5185\u5BB9
    </CollapseGroup>
  );
};
`}}]);
