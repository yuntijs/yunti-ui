"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6678],{41453:function(l,t,n){n.r(t),n.d(t,{StoryBook:function(){return s.ZP},useControls:function(){return o.useControls},useCreateStore:function(){return o.useCreateStore}});var s=n(16896),o=n(95165)},22837:function(l,t,n){n.r(t),n.d(t,{demos:function(){return h}});var s=n(90228),o=n.n(s),p=n(87999),y=n.n(p),u=n(52136),g=n(77371),f=n(8396),v=n(41453),h={"jsonviewer-demo-demos":{component:u.memo(u.lazy(function(){return n.e(3809).then(n.bind(n,73008))})),asset:{type:"BLOCK",id:"jsonviewer-demo-demos",refAtomIds:["JsonViewer"],dependencies:{"index.tsx":{type:"FILE",value:n(18554).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"}},entry:"index.tsx"},context:{"@yuntijs/ui":g},renderOpts:{compile:function(){var a=y()(o()().mark(function d(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"jsonviewer-demo-largejson":{component:u.memo(u.lazy(function(){return n.e(3809).then(n.bind(n,40337))})),asset:{type:"BLOCK",id:"jsonviewer-demo-largejson",refAtomIds:["JsonViewer"],dependencies:{"index.tsx":{type:"FILE",value:n(87203).Z},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"},"./data/large-json.ts":{type:"FILE",value:n(53886).Z}},entry:"index.tsx"},context:{"./data/large-json.ts":f,"@yuntijs/ui":g,"/home/runner/work/yunti-ui/yunti-ui/src/JsonViewer/demos/data/large-json.ts":f},renderOpts:{compile:function(){var a=y()(o()().mark(function d(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"jsonviewer-demo-playground":{component:u.memo(u.lazy(function(){return n.e(3809).then(n.bind(n,66285))})),asset:{type:"BLOCK",id:"jsonviewer-demo-playground",refAtomIds:["JsonViewer"],dependencies:{"index.tsx":{type:"FILE",value:n(54236).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"},"./data/large-json.ts":{type:"FILE",value:n(53886).Z}},entry:"index.tsx"},context:{"./data/large-json.ts":f,"@lobehub/ui/storybook":v,"@yuntijs/ui":g,"/home/runner/work/yunti-ui/yunti-ui/src/JsonViewer/demos/data/large-json.ts":f},renderOpts:{compile:function(){var a=y()(o()().mark(function d(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6768).then(n.bind(n,6768));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},8396:function(l,t,n){n.r(t),n.d(t,{largeJson:function(){return o}});var s={nest:{}};s.nest=s;var o={string:"string",number:123456,boolean:!1,null:null,func:function(){console.log("function test")},Symbol:Symbol("JSON View"),url:"https://botnow.cn",obj:{k1:123,k2:"123",k3:!1},arr:["string",123456,!1,null],nest:s,largeArr:Array.from({length:699}).fill("123.456")}},91161:function(l,t,n){n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"A JSON viewer, based on ",paraId:0,tocIndex:0},{value:"react18-json-view",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { JsonViewer } from '@yuntijs/ui';

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
`,paraId:1,tocIndex:1}]},87203:function(l,t){t.Z=`import { JsonViewer } from '@yuntijs/ui';

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
`},54236:function(l,t){t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { JsonViewer, JsonViewerProps } from '@yuntijs/ui';

import { largeJson } from './data/large-json';

export default () => {
  const store = useCreateStore();
  const options: JsonViewerProps | any = useControls(
    {
      variant: {
        options: ['filled', 'outlined', 'borderless'],
        value: 'filled',
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
`},53886:function(l,t){t.Z=`/* eslint-disable no-console */

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
`},18554:function(l,t){t.Z=`import { JsonViewer } from '@yuntijs/ui';

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
