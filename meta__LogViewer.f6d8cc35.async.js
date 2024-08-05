(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3038],{59168:function(i,t,n){var r={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(u){if(!n.o(r,u))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d});var a=r[u],s=a[0];return n.e(a[1]).then(function(){return n.t(s,19)})}o.keys=function(){return Object.keys(r)},o.id=59168,i.exports=o},10158:function(i,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return p}});var r=n(90228),o=n.n(r),u=n(87999),a=n.n(u),s=n(75271),d=n(23822),p={"logviewer-demo-demos":{component:s.memo(s.lazy(function(){return n.e(3565).then(n.bind(n,5311))})),asset:{type:"BLOCK",id:"logviewer-demo-demos",refAtomIds:["LogViewer"],dependencies:{"index.tsx":{type:"FILE",value:n(14673).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.61"}},entry:"index.tsx"},context:{"@yuntijs/ui":n(82426)},renderOpts:{compile:function(){var c=a()(o()().mark(function h(){var l,f=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7358).then(n.bind(n,97358));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,f));case 3:case"end":return e.stop()}},h)}));function m(){return c.apply(this,arguments)}return m}()}},"logviewer-demo-playground":{component:s.memo(s.lazy(function(){return n.e(3565).then(n.bind(n,45209))})),asset:{type:"BLOCK",id:"logviewer-demo-playground",refAtomIds:["LogViewer"],dependencies:{"index.tsx":{type:"FILE",value:n(80112).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.61"}},entry:"index.tsx"},context:{"@lobehub/ui":n(59806),"@yuntijs/ui":n(82426)},renderOpts:{compile:function(){var c=a()(o()().mark(function h(){var l,f=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7358).then(n.bind(n,97358));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,f));case 3:case"end":return e.stop()}},h)}));function m(){return c.apply(this,arguments)}return m}()}}}},94666:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});var r=n(23822);const o=[{value:"React component that loads and views remote text in the browser lazily and efficiently. Logs can be loaded from static text, a URL, or a WebSocket and including ANSI highlighting. Based on ",paraId:0},{value:`@melloware/react-logviewer
`,paraId:0},{value:`import { LogViewer } from '@yuntijs/ui';

const LogViewerDemo = () => {
  return (
    <LogViewer
      enableSearch
      extraLines={1}
      height={520}
      selectableLines
      url="https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log"
    />
  );
};

export default ProCardDemo;
`,paraId:1,tocIndex:0}]},80112:function(i,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { LogViewer, LogViewerProps } from '@yuntijs/ui';

export default () => {
  const store = useCreateStore();
  const options: LogViewerProps | any = useControls(
    {
      caseInsensitive: true,
      enableHotKeys: true,
      enableSearch: true,
      enableSearchNavigation: true,
      enableGutters: false,
      enableLineNumbers: true,
      enableLinks: false,
      enableMultilineHighlight: true,
      extraLines: 1,
      height: 520,
      selectableLines: true,
      text: {
        rows: true,
        value: '',
      },
      url: 'https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log',
      refreshInterval: 0,
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <LogViewer {...options} />
    </StoryBook>
  );
};
`},14673:function(i,t){"use strict";t.Z=`import { LogViewer } from '@yuntijs/ui';

export default () => {
  return (
    <LogViewer
      caseInsensitive
      enableHotKeys
      enableSearch
      extraLines={1}
      height={520}
      onLineContentClick={function noRefCheck() {}}
      selectableLines
      url="https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log"
    />
  );
};
`}}]);
