(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[56457],{1234:function(r,e,n){var s={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function t(i){if(!n.o(s,i))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a});var l=s[i],u=l[0];return n.e(l[1]).then(function(){return n.t(u,19)})}t.keys=function(){return Object.keys(s)},t.id=1234,r.exports=t},72326:function(r,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return j}});var s=n(90228),t=n.n(s),i=n(87999),l=n.n(i),u=n(75271),a=n(42847),f=n(71983),j={"logo-demo-demos":{component:u.memo(u.lazy(function(){return n.e(25934).then(n.bind(n,53275))})),asset:{type:"BLOCK",id:"logo-demo-demos",refAtomIds:["Logo"],dependencies:{"index.tsx":{type:"FILE",value:n(7642).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.80"}},entry:"index.tsx"},context:{"@lobehub/ui":a,"@yuntijs/ui":f},renderOpts:{compile:function(){var d=l()(t()().mark(function y(){var m,c=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(74807).then(n.bind(n,74807));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,c));case 3:case"end":return o.stop()}},y)}));function p(){return d.apply(this,arguments)}return p}()}},"logo-demo-extratext":{component:u.memo(u.lazy(function(){return n.e(25934).then(n.bind(n,70196))})),asset:{type:"BLOCK",id:"logo-demo-extratext",refAtomIds:["Logo"],dependencies:{"index.tsx":{type:"FILE",value:n(31700).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.80"}},entry:"index.tsx"},context:{"@lobehub/ui":a,"@yuntijs/ui":f},renderOpts:{compile:function(){var d=l()(t()().mark(function y(){var m,c=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(74807).then(n.bind(n,74807));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,c));case 3:case"end":return o.stop()}},y)}));function p(){return d.apply(this,arguments)}return p}()}}}},18830:function(r,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return s}});const s=[]},31700:function(r,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},7642:function(r,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
