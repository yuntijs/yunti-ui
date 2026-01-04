"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6457],{41453:function(s,e,n){n.r(e),n.d(e,{StoryBook:function(){return u.ZP},useControls:function(){return t.useControls},useCreateStore:function(){return t.useCreateStore}});var u=n(16896),t=n(95165)},98351:function(s,e,n){n.r(e),n.d(e,{demos:function(){return c}});var u=n(90228),t=n.n(u),v=n(87999),y=n.n(v),l=n(52136),p=n(41453),f=n(77371),c={"logo-demo-demos":{component:l.memo(l.lazy(function(){return n.e(5934).then(n.bind(n,75608))})),asset:{type:"BLOCK",id:"logo-demo-demos",refAtomIds:["Logo"],dependencies:{"index.tsx":{type:"FILE",value:n(35941).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":p,"@yuntijs/ui":f},renderOpts:{compile:function(){var i=y()(t()().mark(function a(){var r,d=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(6768).then(n.bind(n,6768));case 2:return o.abrupt("return",(r=o.sent).default.apply(r,d));case 3:case"end":return o.stop()}},a)}));function m(){return i.apply(this,arguments)}return m}()}},"logo-demo-extratext":{component:l.memo(l.lazy(function(){return n.e(5934).then(n.bind(n,86582))})),asset:{type:"BLOCK",id:"logo-demo-extratext",refAtomIds:["Logo"],dependencies:{"index.tsx":{type:"FILE",value:n(72943).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":p,"@yuntijs/ui":f},renderOpts:{compile:function(){var i=y()(t()().mark(function a(){var r,d=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(6768).then(n.bind(n,6768));case 2:return o.abrupt("return",(r=o.sent).default.apply(r,d));case 3:case"end":return o.stop()}},a)}));function m(){return i.apply(this,arguments)}return m}()}}}},44857:function(s,e,n){n.r(e),n.d(e,{texts:function(){return u}});const u=[]},72943:function(s,e){e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Logo, LogoProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: LogoProps | any = useControls(
    {
      extra: 'UI',
      size: {
        max: 240,
        min: 16,
        step: 4,
        value: 64,
      },
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Logo type="combine" {...control} />
    </StoryBook>
  );
};
`},35941:function(s,e){e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Logo, LogoProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const control: LogoProps | any = useControls(
    {
      size: {
        max: 240,
        min: 16,
        step: 4,
        value: 64,
      },
      type: {
        options: ['img', 'text', 'combine'],
        value: 'img',
      },
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Logo {...control} />
    </StoryBook>
  );
};
`}}]);
