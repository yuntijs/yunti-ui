(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6457],{59168:function(r,e,n){var u={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function t(i){if(!n.o(u,i))return Promise.resolve().then(function(){var m=new Error("Cannot find module '"+i+"'");throw m.code="MODULE_NOT_FOUND",m});var l=u[i],s=l[0];return n.e(l[1]).then(function(){return n.t(s,19)})}t.keys=function(){return Object.keys(u)},t.id=59168,r.exports=t},77496:function(r,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return h}});var u=n(90228),t=n.n(u),i=n(87999),l=n.n(i),s=n(75271),m=n(93291),c=n(59806),f=n(25144),h={"logo-demo-demos":{component:s.memo(s.lazy(function(){return n.e(5934).then(n.bind(n,51276))})),asset:{type:"BLOCK",id:"logo-demo-demos",refAtomIds:["Logo"],dependencies:{"index.tsx":{type:"FILE",value:n(24850).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.69"}},entry:"index.tsx"},context:{"@lobehub/ui":c,"@yuntijs/ui":f},renderOpts:{compile:function(){var d=l()(t()().mark(function y(){var a,p=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(7423).then(n.bind(n,7423));case 2:return o.abrupt("return",(a=o.sent).default.apply(a,p));case 3:case"end":return o.stop()}},y)}));function _(){return d.apply(this,arguments)}return _}()}},"logo-demo-extratext":{component:s.memo(s.lazy(function(){return n.e(5934).then(n.bind(n,41811))})),asset:{type:"BLOCK",id:"logo-demo-extratext",refAtomIds:["Logo"],dependencies:{"index.tsx":{type:"FILE",value:n(35814).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.69"}},entry:"index.tsx"},context:{"@lobehub/ui":c,"@yuntijs/ui":f},renderOpts:{compile:function(){var d=l()(t()().mark(function y(){var a,p=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(7423).then(n.bind(n,7423));case 2:return o.abrupt("return",(a=o.sent).default.apply(a,p));case 3:case"end":return o.stop()}},y)}));function _(){return d.apply(this,arguments)}return _}()}}}},39991:function(r,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return t}});var u=n(93291);const t=[]},35814:function(r,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},24850:function(r,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
