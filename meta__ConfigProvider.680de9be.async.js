"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[79895],{12757:function(r,e,n){n.r(e),n.d(e,{demos:function(){return l}});var u=n(90228),o=n.n(u),i=n(87999),_=n.n(i),a=n(75271),c=n(60694),s=n(94572),l={"configprovider-demo-demos":{component:a.memo(a.lazy(function(){return n.e(56527).then(n.bind(n,69996))})),asset:{type:"BLOCK",id:"configprovider-demo-demos",refAtomIds:["ConfigProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(36265).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.70"}},entry:"index.tsx"},context:{"@yuntijs/ui":s},renderOpts:{compile:function(){var m=_()(o()().mark(function v(){var d,I=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(74807).then(n.bind(n,74807));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,I));case 3:case"end":return t.stop()}},v)}));function p(){return m.apply(this,arguments)}return p}()}}}},35572:function(r,e,n){n.r(e),n.d(e,{texts:function(){return o}});var u=n(60694);const o=[{value:"The ",paraId:0,tocIndex:0},{value:"proxy",paraId:0,tocIndex:0},{value:" provides two CDN resolution addresses, ",paraId:0,tocIndex:0},{value:"aliyun",paraId:0,tocIndex:0},{value:" and ",paraId:0,tocIndex:0},{value:"unpkg",paraId:0,tocIndex:0},{value:", with ",paraId:0,tocIndex:0},{value:"aliyun",paraId:0,tocIndex:0},{value:" as the default. This can be configured through the ",paraId:0,tocIndex:0},{value:"cdn",paraId:0,tocIndex:0},{value:" attribute of ",paraId:0,tocIndex:0},{value:"ConfigProvider",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"At the same time, it provides custom CDN configuration, set ",paraId:1,tocIndex:1},{value:"proxy",paraId:1,tocIndex:1},{value:" to ",paraId:1,tocIndex:1},{value:"custom",paraId:1,tocIndex:1},{value:" and configure through the ",paraId:1,tocIndex:1},{value:"customCdnFn",paraId:1,tocIndex:1},{value:" attribute.",paraId:1,tocIndex:1},{value:`import { ConfigProvider, Logo } from '@yuntijs/ui';

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
`,paraId:2,tocIndex:1}]},36265:function(r,e){e.Z=`import { ConfigProvider, Logo } from '@yuntijs/ui';

export default () => {
  return (
    <ConfigProvider config={{ proxy: 'unpkg' }}>
      <Logo />
    </ConfigProvider>
  );
};
`}}]);
