"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6272],{41453:function(l,o,n){n.r(o),n.d(o,{StoryBook:function(){return u.ZP},useControls:function(){return t.useControls},useCreateStore:function(){return t.useCreateStore}});var u=n(16896),t=n(95165)},78379:function(l,o,n){n.r(o),n.d(o,{demos:function(){return C}});var u=n(90228),t=n.n(u),f=n(87999),m=n.n(f),s=n(52136),c=n(77371),y=n(44282),v=n(41453),C={"collapsegroup-demo-demos":{component:s.memo(s.lazy(function(){return n.e(524).then(n.bind(n,74468))})),asset:{type:"BLOCK",id:"collapsegroup-demo-demos",refAtomIds:["CollapseGroup"],dependencies:{"index.tsx":{type:"FILE",value:n(71361).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"},"lucide-react":{type:"NPM",value:"0.544.0"}},entry:"index.tsx"},context:{"@yuntijs/ui":c,"lucide-react":y},renderOpts:{compile:function(){var a=m()(t()().mark(function d(){var r,p=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,p));case 3:case"end":return e.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"collapsegroup-demo-playground":{component:s.memo(s.lazy(function(){return n.e(524).then(n.bind(n,42538))})),asset:{type:"BLOCK",id:"collapsegroup-demo-playground",refAtomIds:["CollapseGroup"],dependencies:{"index.tsx":{type:"FILE",value:n(4691).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"},"lucide-react":{type:"NPM",value:"0.544.0"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":v,"@yuntijs/ui":c,"lucide-react":y},renderOpts:{compile:function(){var a=m()(t()().mark(function d(){var r,p=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,p));case 3:case"end":return e.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},76626:function(l,o,n){n.r(o),n.d(o,{texts:function(){return u}});const u=[{value:"Based on ",paraId:0,tocIndex:0},{value:"lobehub ui FormGroup",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { CollapseGroup } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  return (
    <CollapseGroup icon={VariableIcon} title="\u8F93\u51FA\u53D8\u91CF">
      \u6211\u662F\u6536\u8D77\u6765\u7684\u5185\u5BB9
    </CollapseGroup>
  );
};
`,paraId:1,tocIndex:0}]},4691:function(l,o){o.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { CollapseGroup, CollapseGroupProps } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  const store = useCreateStore();
  const control: CollapseGroupProps | any = useControls(
    {
      title: '\u8F93\u51FA\u53D8\u91CF',
      defaultActive: true,
      collapsible: true,
      variant: {
        options: ['filled', 'outlined', 'borderless'],
        value: 'filled',
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
`},71361:function(l,o){o.Z=`import { CollapseGroup } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

export default () => {
  return (
    <CollapseGroup icon={VariableIcon} style={{ width: '100%' }} title="\u8F93\u51FA\u53D8\u91CF">
      \u6211\u662F\u6536\u8D77\u6765\u7684\u5185\u5BB9
    </CollapseGroup>
  );
};
`}}]);
