"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[3038],{41453:function(a,t,e){e.r(t),e.d(t,{StoryBook:function(){return r.ZP},useControls:function(){return o.useControls},useCreateStore:function(){return o.useCreateStore}});var r=e(16896),o=e(95165)},93160:function(a,t,e){e.r(t),e.d(t,{demos:function(){return g}});var r=e(90228),o=e.n(r),h=e(87999),c=e.n(h),i=e(52136),y=e(77371),f=e(41453),g={"logviewer-demo-demos":{component:i.memo(i.lazy(function(){return e.e(3565).then(e.bind(e,21233))})),asset:{type:"BLOCK",id:"logviewer-demo-demos",refAtomIds:["LogViewer"],dependencies:{"index.tsx":{type:"FILE",value:e(62361).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@yuntijs/ui":y},renderOpts:{compile:function(){var s=c()(o()().mark(function d(){var u,m=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6768).then(e.bind(e,6768));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,m));case 3:case"end":return n.stop()}},d)}));function l(){return s.apply(this,arguments)}return l}()}},"logviewer-demo-playground":{component:i.memo(i.lazy(function(){return e.e(3565).then(e.bind(e,25218))})),asset:{type:"BLOCK",id:"logviewer-demo-playground",refAtomIds:["LogViewer"],dependencies:{"index.tsx":{type:"FILE",value:e(84506).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@lobehub/ui/storybook":f,"@yuntijs/ui":y},renderOpts:{compile:function(){var s=c()(o()().mark(function d(){var u,m=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6768).then(e.bind(e,6768));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,m));case 3:case"end":return n.stop()}},d)}));function l(){return s.apply(this,arguments)}return l}()}}}},53783:function(a,t,e){e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"React component that loads and views remote text in the browser lazily and efficiently. Logs can be loaded from static text, a URL, or a WebSocket and including ANSI highlighting. Based on ",paraId:0},{value:`@melloware/react-logviewer
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
`,paraId:1,tocIndex:0}]},84506:function(a,t){t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
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
`},62361:function(a,t){t.Z=`import { LogViewer } from '@yuntijs/ui';

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
