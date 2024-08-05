(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6457],{59168:function(r,t,n){var s={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function e(i){if(!n.o(s,i))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a});var l=s[i],u=l[0];return n.e(l[1]).then(function(){return n.t(u,19)})}e.keys=function(){return Object.keys(s)},e.id=59168,r.exports=e},85995:function(r,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return f}});var s=n(90228),e=n.n(s),i=n(87999),l=n.n(i),u=n(75271),a=n(17499),f={"logo-demo-demos":{component:u.memo(u.lazy(function(){return n.e(5934).then(n.bind(n,22610))})),asset:{type:"BLOCK",id:"logo-demo-demos",refAtomIds:["Logo"],dependencies:{"index.tsx":{type:"FILE",value:n(68555).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.61"}},entry:"index.tsx"},context:{"@lobehub/ui":n(59806),"@yuntijs/ui":n(82426)},renderOpts:{compile:function(){var d=l()(e()().mark(function p(){var m,c=arguments;return e()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(7358).then(n.bind(n,97358));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,c));case 3:case"end":return o.stop()}},p)}));function y(){return d.apply(this,arguments)}return y}()}},"logo-demo-extratext":{component:u.memo(u.lazy(function(){return n.e(5934).then(n.bind(n,29974))})),asset:{type:"BLOCK",id:"logo-demo-extratext",refAtomIds:["Logo"],dependencies:{"index.tsx":{type:"FILE",value:n(75869).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.61"}},entry:"index.tsx"},context:{"@lobehub/ui":n(59806),"@yuntijs/ui":n(82426)},renderOpts:{compile:function(){var d=l()(e()().mark(function p(){var m,c=arguments;return e()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(7358).then(n.bind(n,97358));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,c));case 3:case"end":return o.stop()}},p)}));function y(){return d.apply(this,arguments)}return y}()}}}},91233:function(r,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return e}});var s=n(17499);const e=[]},75869:function(r,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},68555:function(r,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
