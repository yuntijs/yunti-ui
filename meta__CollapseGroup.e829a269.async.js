(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[26272],{1234:function(s,o,n){var u={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function t(l){if(!n.o(u,l))return Promise.resolve().then(function(){var i=new Error("Cannot find module '"+l+"'");throw i.code="MODULE_NOT_FOUND",i});var a=u[l],r=a[0];return n.e(a[1]).then(function(){return n.t(r,19)})}t.keys=function(){return Object.keys(u)},t.id=1234,s.exports=t},91398:function(s,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return v}});var u=n(90228),t=n.n(u),l=n(87999),a=n.n(l),r=n(75271),i=n(71983),f=n(84119),j=n(42847),v={"collapsegroup-demo-demos":{component:r.memo(r.lazy(function(){return n.e(40524).then(n.bind(n,72986))})),asset:{type:"BLOCK",id:"collapsegroup-demo-demos",refAtomIds:["CollapseGroup"],dependencies:{"index.tsx":{type:"FILE",value:n(18334).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.81"},"lucide-react":{type:"NPM",value:"0.417.0"}},entry:"index.tsx"},context:{"@yuntijs/ui":i,"lucide-react":f},renderOpts:{compile:function(){var p=a()(t()().mark(function c(){var d,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,y));case 3:case"end":return e.stop()}},c)}));function m(){return p.apply(this,arguments)}return m}()}},"collapsegroup-demo-playground":{component:r.memo(r.lazy(function(){return n.e(40524).then(n.bind(n,88420))})),asset:{type:"BLOCK",id:"collapsegroup-demo-playground",refAtomIds:["CollapseGroup"],dependencies:{"index.tsx":{type:"FILE",value:n(58880).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.81"},"lucide-react":{type:"NPM",value:"0.417.0"}},entry:"index.tsx"},context:{"@lobehub/ui":j,"@yuntijs/ui":i,"lucide-react":f},renderOpts:{compile:function(){var p=a()(t()().mark(function c(){var d,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,y));case 3:case"end":return e.stop()}},c)}));function m(){return p.apply(this,arguments)}return m}()}}}},5082:function(s,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return u}});const u=[{value:"Based on ",paraId:0,tocIndex:0},{value:"lobehub ui FormGroup",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { CollapseGroup } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  return (
    <CollapseGroup icon={VariableIcon} title="\u8F93\u51FA\u53D8\u91CF">
      \u6211\u662F\u6536\u8D77\u6765\u7684\u5185\u5BB9
    </CollapseGroup>
  );
};
`,paraId:1,tocIndex:0}]},58880:function(s,o){"use strict";o.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},18334:function(s,o){"use strict";o.Z=`import { CollapseGroup } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  return (
    <CollapseGroup icon={VariableIcon} style={{ width: '100%' }} title="\u8F93\u51FA\u53D8\u91CF">
      \u6211\u662F\u6536\u8D77\u6765\u7684\u5185\u5BB9
    </CollapseGroup>
  );
};
`}}]);
