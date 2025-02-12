(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[26678],{72239:function(r,t,n){var s={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(i){if(!n.o(s,i))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d});var a=s[i],u=a[0];return n.e(a[1]).then(function(){return n.t(u,19)})}o.keys=function(){return Object.keys(s)},o.id=72239,r.exports=o},12994:function(r,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return v}});var s=n(90228),o=n.n(s),i=n(87999),a=n.n(i),u=n(75271),d=n(71983),c=n(70216),j=n(16911),v={"jsonviewer-demo-demos":{component:u.memo(u.lazy(function(){return n.e(23809).then(n.bind(n,45817))})),asset:{type:"BLOCK",id:"jsonviewer-demo-demos",refAtomIds:["JsonViewer"],dependencies:{"index.tsx":{type:"FILE",value:n(87335).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.106"}},entry:"index.tsx"},context:{"@yuntijs/ui":d},renderOpts:{compile:function(){var m=a()(o()().mark(function p(){var l,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(92074).then(n.bind(n,92074));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,y));case 3:case"end":return e.stop()}},p)}));function f(){return m.apply(this,arguments)}return f}()}},"jsonviewer-demo-largejson":{component:u.memo(u.lazy(function(){return n.e(23809).then(n.bind(n,14970))})),asset:{type:"BLOCK",id:"jsonviewer-demo-largejson",refAtomIds:["JsonViewer"],dependencies:{"index.tsx":{type:"FILE",value:n(83767).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.106"},"./data/large-json.ts":{type:"FILE",value:n(56349).Z}},entry:"index.tsx"},context:{"./data/large-json.ts":c,"@yuntijs/ui":d,"/home/runner/work/yunti-ui/yunti-ui/src/JsonViewer/demos/data/large-json.ts":c},renderOpts:{compile:function(){var m=a()(o()().mark(function p(){var l,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(92074).then(n.bind(n,92074));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,y));case 3:case"end":return e.stop()}},p)}));function f(){return m.apply(this,arguments)}return f}()}},"jsonviewer-demo-playground":{component:u.memo(u.lazy(function(){return n.e(23809).then(n.bind(n,18041))})),asset:{type:"BLOCK",id:"jsonviewer-demo-playground",refAtomIds:["JsonViewer"],dependencies:{"index.tsx":{type:"FILE",value:n(74313).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.106"},"./data/large-json.ts":{type:"FILE",value:n(56349).Z}},entry:"index.tsx"},context:{"./data/large-json.ts":c,"@lobehub/ui":j,"@yuntijs/ui":d,"/home/runner/work/yunti-ui/yunti-ui/src/JsonViewer/demos/data/large-json.ts":c},renderOpts:{compile:function(){var m=a()(o()().mark(function p(){var l,y=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(92074).then(n.bind(n,92074));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,y));case 3:case"end":return e.stop()}},p)}));function f(){return m.apply(this,arguments)}return f}()}}}},70216:function(r,t,n){"use strict";n.r(t),n.d(t,{largeJson:function(){return o}});var s={nest:{}};s.nest=s;var o={string:"string",number:123456,boolean:!1,null:null,func:function(){console.log("function test")},Symbol:Symbol("JSON View"),url:"https://botnow.cn",obj:{k1:123,k2:"123",k3:!1},arr:["string",123456,!1,null],nest:s,largeArr:Array.from({length:699}).fill("123.456")}},28959:function(r,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"A JSON viewer, based on ",paraId:0,tocIndex:0},{value:"react18-json-view",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { JsonViewer } from '@yuntijs/ui';

export default () => {
  return (
    <JsonViewer
      src={{
        minRows: 3,
        string: 'string',
        number: 123456,
        boolean: false,
        obj: {
          k1: 123,
          k2: '123',
          k3: false,
          nested: {
            k4: 'nested',
          },
        },
        arr: ['string', 123456, false, null],
      }}
    />
  );
};
`,paraId:1,tocIndex:1}]},83767:function(r,t){"use strict";t.Z=`import { JsonViewer } from '@yuntijs/ui';

import { largeJson } from './data/large-json';

export default () => {
  return (
    <JsonViewer
      fullFeatured
      src={largeJson}
      style={{ height: 520 }}
      title="I'm a large json, has a long long long long long long long long long long long long long long long long long title"
    />
  );
};
`},74313:function(r,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { JsonViewer, JsonViewerProps } from '@yuntijs/ui';

import { largeJson } from './data/large-json';

export default () => {
  const store = useCreateStore();
  const options: JsonViewerProps | any = useControls(
    {
      type: {
        options: ['ghost', 'block', 'pure'],
        value: 'block',
      },
      theme: {
        options: ['default', 'a11y', 'github', 'vscode', 'atom', 'winter-is-coming'],
        value: 'default',
      },
      fullFeatured: false,
      title: 'json',
      collapseStringMode: {
        options: ['directly', 'word', 'address'],
        value: 'directly',
      },
      collapsed: {
        options: [0, 1, 2, 3, true, false],
        value: 2,
      },
      displaySize: {
        options: [true, false, 0, 1, 2, 3, 'collapsed', 'expanded'],
        value: 'collapsed',
      },
      matchesURL: true,
      displayArrayIndex: true,
      ignoreLargeArray: false,
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <JsonViewer {...options} src={largeJson} style={{ ...options.style, width: '100%' }} />
    </StoryBook>
  );
};
`},56349:function(r,t){"use strict";t.Z=`/* eslint-disable no-console */

const nest = {
  nest: {},
};
nest.nest = nest;

export const largeJson = {
  string: 'string',
  number: 123_456,
  boolean: false,
  null: null,
  func: function () {
    console.log('function test');
  },
  Symbol: Symbol('JSON View'),
  url: 'https://botnow.cn',
  obj: {
    k1: 123,
    k2: '123',
    k3: false,
  },
  arr: ['string', 123_456, false, null],
  nest,
  largeArr: Array.from({ length: 699 }).fill('123.456'),
};
`},87335:function(r,t){"use strict";t.Z=`import { JsonViewer } from '@yuntijs/ui';

export default () => {
  return (
    <JsonViewer
      src={{
        minRows: 3,
        string: 'string',
        number: 123_456,
        boolean: false,
        obj: {
          k1: 123,
          k2: '123',
          k3: false,
          nested: {
            k4: 'nested',
          },
        },
        arr: ['string', 123_456, false, null],
      }}
    />
  );
};
`}}]);
