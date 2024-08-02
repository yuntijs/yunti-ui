"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9895],{63592:function(r,e,n){n.r(e),n.d(e,{demos:function(){return s}});var u=n(90228),t=n.n(u),i=n(87999),_=n.n(i),a=n(75271),I=n(40792),s={"configprovider-demo-demos":{component:a.memo(a.lazy(function(){return n.e(6527).then(n.bind(n,54665))})),asset:{type:"BLOCK",id:"configprovider-demo-demos",refAtomIds:["ConfigProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(51392).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.59"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(82426)},renderOpts:{compile:function(){var l=_()(t()().mark(function p(){var d,v=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(9321).then(n.bind(n,19321));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,v));case 3:case"end":return o.stop()}},p)}));function m(){return l.apply(this,arguments)}return m}()}}}},81648:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});var u=n(40792);const t=[{value:"The ",paraId:0,tocIndex:0},{value:"proxy",paraId:0,tocIndex:0},{value:" provides two CDN resolution addresses, ",paraId:0,tocIndex:0},{value:"aliyun",paraId:0,tocIndex:0},{value:" and ",paraId:0,tocIndex:0},{value:"unpkg",paraId:0,tocIndex:0},{value:", with ",paraId:0,tocIndex:0},{value:"aliyun",paraId:0,tocIndex:0},{value:" as the default. This can be configured through the ",paraId:0,tocIndex:0},{value:"cdn",paraId:0,tocIndex:0},{value:" attribute of ",paraId:0,tocIndex:0},{value:"ConfigProvider",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"At the same time, it provides custom CDN configuration, set ",paraId:1,tocIndex:1},{value:"proxy",paraId:1,tocIndex:1},{value:" to ",paraId:1,tocIndex:1},{value:"custom",paraId:1,tocIndex:1},{value:" and configure through the ",paraId:1,tocIndex:1},{value:"customCdnFn",paraId:1,tocIndex:1},{value:" attribute.",paraId:1,tocIndex:1},{value:`import { ConfigProvider, Logo } from '@yuntijs/ui';

export default () => {
  return (
    <ConfigProvider config={{
        proxy: 'custom',
        customCdnFn: (e: {pkg:string, version:string, path:string}) => \`https://yourcdn/\${pkg}/\${version}/\${path}\`
    }}>
      <Logo />
    </ConfigProvider>
  );
};
`,paraId:2,tocIndex:1}]},51392:function(r,e){e.Z=`import { ConfigProvider, Logo } from '@yuntijs/ui';

export default () => {
  return (
    <ConfigProvider config={{ proxy: 'unpkg' }}>
      <Logo />
    </ConfigProvider>
  );
};
`}}]);
