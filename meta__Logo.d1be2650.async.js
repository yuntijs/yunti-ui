(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[56457],{69143:function(r,e,n){var u={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function t(i){if(!n.o(u,i))return Promise.resolve().then(function(){var m=new Error("Cannot find module '"+i+"'");throw m.code="MODULE_NOT_FOUND",m});var l=u[i],s=l[0];return n.e(l[1]).then(function(){return n.t(s,19)})}t.keys=function(){return Object.keys(u)},t.id=69143,r.exports=t},72326:function(r,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return h}});var u=n(90228),t=n.n(u),i=n(87999),l=n.n(i),s=n(75271),m=n(37407),c=n(17724),f=n(94572),h={"logo-demo-demos":{component:s.memo(s.lazy(function(){return n.e(25934).then(n.bind(n,53275))})),asset:{type:"BLOCK",id:"logo-demo-demos",refAtomIds:["Logo"],dependencies:{"index.tsx":{type:"FILE",value:n(7642).Z},"@lobehub/ui":{type:"NPM",value:"1.153.16"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.73"}},entry:"index.tsx"},context:{"@lobehub/ui":c,"@yuntijs/ui":f},renderOpts:{compile:function(){var d=l()(t()().mark(function y(){var a,p=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(74807).then(n.bind(n,74807));case 2:return o.abrupt("return",(a=o.sent).default.apply(a,p));case 3:case"end":return o.stop()}},y)}));function _(){return d.apply(this,arguments)}return _}()}},"logo-demo-extratext":{component:s.memo(s.lazy(function(){return n.e(25934).then(n.bind(n,70196))})),asset:{type:"BLOCK",id:"logo-demo-extratext",refAtomIds:["Logo"],dependencies:{"index.tsx":{type:"FILE",value:n(31700).Z},"@lobehub/ui":{type:"NPM",value:"1.153.16"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.73"}},entry:"index.tsx"},context:{"@lobehub/ui":c,"@yuntijs/ui":f},renderOpts:{compile:function(){var d=l()(t()().mark(function y(){var a,p=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(74807).then(n.bind(n,74807));case 2:return o.abrupt("return",(a=o.sent).default.apply(a,p));case 3:case"end":return o.stop()}},y)}));function _(){return d.apply(this,arguments)}return _}()}}}},18830:function(r,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return t}});var u=n(37407);const t=[]},31700:function(r,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
