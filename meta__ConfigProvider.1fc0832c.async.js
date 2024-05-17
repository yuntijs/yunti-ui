"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9895],{91123:function(u,e,n){n.r(e),n.d(e,{demos:function(){return l}});var t=n(90228),r=n.n(t),i=n(87999),s=n.n(i),a=n(75271),l={"configprovider-demo-demos":{component:a.memo(a.lazy(function(){return n.e(6527).then(n.bind(n,54576))})),asset:{type:"BLOCK",id:"configprovider-demo-demos",refAtomIds:["ConfigProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(10746).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.19"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(75843)},renderOpts:{compile:function(){var m=s()(r()().mark(function _(){var d,I=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(8648).then(n.bind(n,78648));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,I));case 3:case"end":return o.stop()}},_)}));function p(){return m.apply(this,arguments)}return p}()}}}},28341:function(u,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"The ",paraId:0,tocIndex:0},{value:"proxy",paraId:0,tocIndex:0},{value:" provides two CDN resolution addresses, ",paraId:0,tocIndex:0},{value:"aliyun",paraId:0,tocIndex:0},{value:" and ",paraId:0,tocIndex:0},{value:"unpkg",paraId:0,tocIndex:0},{value:", with ",paraId:0,tocIndex:0},{value:"aliyun",paraId:0,tocIndex:0},{value:" as the default. This can be configured through the ",paraId:0,tocIndex:0},{value:"cdn",paraId:0,tocIndex:0},{value:" attribute of ",paraId:0,tocIndex:0},{value:"ConfigProvider",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"At the same time, it provides custom CDN configuration, set ",paraId:1,tocIndex:1},{value:"proxy",paraId:1,tocIndex:1},{value:" to ",paraId:1,tocIndex:1},{value:"custom",paraId:1,tocIndex:1},{value:" and configure through the ",paraId:1,tocIndex:1},{value:"customCdnFn",paraId:1,tocIndex:1},{value:" attribute.",paraId:1,tocIndex:1},{value:`import { ConfigProvider, Logo } from '@yuntijs/ui';

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
`,paraId:2,tocIndex:1}]},10746:function(u,e){e.Z=`import { ConfigProvider, Logo } from '@yuntijs/ui';

export default () => {
  return (
    <ConfigProvider config={{ proxy: 'unpkg' }}>
      <Logo />
    </ConfigProvider>
  );
};
`}}]);
