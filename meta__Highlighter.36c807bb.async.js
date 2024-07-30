(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[4942],{37442:function(u,t,n){var s={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(l){if(!n.o(s,l))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+l+"'");throw d.code="MODULE_NOT_FOUND",d});var i=s[l],r=i[0];return n.e(i[1]).then(function(){return n.t(r,19)})}o.keys=function(){return Object.keys(s)},o.id=37442,u.exports=o},49921:function(u,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return y}});var s=n(90228),o=n.n(s),l=n(87999),i=n.n(l),r=n(50959),d=n(36141),y={"highlighter-demo-demos":{component:r.memo(r.lazy(function(){return n.e(8780).then(n.bind(n,75270))})),asset:{type:"BLOCK",id:"highlighter-demo-demos",refAtomIds:["Highlighter"],dependencies:{"index.tsx":{type:"FILE",value:n(73955).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.55"}},entry:"index.tsx"},context:{"@lobehub/ui":n(12658),"@yuntijs/ui":n(63408)},renderOpts:{compile:function(){var m=i()(o()().mark(function c(){var a,p=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8896).then(n.bind(n,68896));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,p));case 3:case"end":return e.stop()}},c)}));function h(){return m.apply(this,arguments)}return h}()}},"highlighter-demo-fullfeatured":{component:r.memo(r.lazy(function(){return n.e(8780).then(n.bind(n,25461))})),asset:{type:"BLOCK",id:"highlighter-demo-fullfeatured",refAtomIds:["Highlighter"],dependencies:{"index.tsx":{type:"FILE",value:n(1990).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.55"}},entry:"index.tsx"},context:{"@lobehub/ui":n(12658),"@yuntijs/ui":n(63408)},renderOpts:{compile:function(){var m=i()(o()().mark(function c(){var a,p=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8896).then(n.bind(n,68896));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,p));case 3:case"end":return e.stop()}},c)}));function h(){return m.apply(this,arguments)}return h}()}}}},1650:function(u,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});var s=n(36141);const o=[]},1990:function(u,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { FullFeaturedHighlighterProps, Highlighter } from '@yuntijs/ui';

const code = \`export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}\`;

export default () => {
  const store = useCreateStore();
  const options: FullFeaturedHighlighterProps | any = useControls(
    {
      fileName: '',
      children: {
        rows: true,
        value: code,
      },
      language: 'tsx',
      allowChangeLanguage: false,
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Highlighter fullFeatured {...options} style={{ ...options.style, width: '100%' }} />
    </StoryBook>
  );
};
`},73955:function(u,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { Highlighter, HighlighterProps } from '@yuntijs/ui';

const code = \`export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}\`;

export default () => {
  const store = useCreateStore();
  const options: HighlighterProps | any = useControls(
    {
      children: {
        rows: true,
        value: code,
      },
      copyable: true,
      copyButtonSize: {
        options: ['site', 'large', 'normal', 'small'],
        value: 'site',
      },
      language: 'tsx',
      showLanguage: true,
      spotlight: false,
      type: {
        options: ['ghost', 'block', 'pure'],
        value: 'block',
      },
      fullFeatured: false,
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <Highlighter {...options} style={{ ...options.style, width: '100%' }} />
    </StoryBook>
  );
};
`}}]);
