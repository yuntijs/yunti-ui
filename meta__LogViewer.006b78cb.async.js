(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3038],{72239:function(i,t,n){var r={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(u){if(!n.o(r,u))return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l});var a=r[u],s=a[0];return n.e(a[1]).then(function(){return n.t(s,19)})}o.keys=function(){return Object.keys(r)},o.id=72239,i.exports=o},56719:function(i,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return y}});var r=n(90228),o=n.n(r),u=n(87999),a=n.n(u),s=n(75271),l=n(71983),p=n(16911),y={"logviewer-demo-demos":{component:s.memo(s.lazy(function(){return n.e(53565).then(n.bind(n,61085))})),asset:{type:"BLOCK",id:"logviewer-demo-demos",refAtomIds:["LogViewer"],dependencies:{"index.tsx":{type:"FILE",value:n(93701).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.110"}},entry:"index.tsx"},context:{"@yuntijs/ui":l},renderOpts:{compile:function(){var c=a()(o()().mark(function f(){var d,h=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(92074).then(n.bind(n,92074));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,h));case 3:case"end":return e.stop()}},f)}));function m(){return c.apply(this,arguments)}return m}()}},"logviewer-demo-playground":{component:s.memo(s.lazy(function(){return n.e(53565).then(n.bind(n,84888))})),asset:{type:"BLOCK",id:"logviewer-demo-playground",refAtomIds:["LogViewer"],dependencies:{"index.tsx":{type:"FILE",value:n(3544).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.110"}},entry:"index.tsx"},context:{"@lobehub/ui":p,"@yuntijs/ui":l},renderOpts:{compile:function(){var c=a()(o()().mark(function f(){var d,h=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(92074).then(n.bind(n,92074));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,h));case 3:case"end":return e.stop()}},f)}));function m(){return c.apply(this,arguments)}return m}()}}}},71312:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return r}});const r=[{value:"React component that loads and views remote text in the browser lazily and efficiently. Logs can be loaded from static text, a URL, or a WebSocket and including ANSI highlighting. Based on ",paraId:0},{value:`@melloware/react-logviewer
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
`,paraId:1,tocIndex:0}]},3544:function(i,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},93701:function(i,t){"use strict";t.Z=`import { LogViewer } from '@yuntijs/ui';

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
