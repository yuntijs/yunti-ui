(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[64942],{1234:function(u,t,n){var s={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(l){if(!n.o(s,l))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a});var i=s[l],r=i[0];return n.e(i[1]).then(function(){return n.t(r,19)})}o.keys=function(){return Object.keys(s)},o.id=1234,u.exports=o},11666:function(u,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return f}});var s=n(90228),o=n.n(s),l=n(87999),i=n.n(l),r=n(75271),a=n(42847),y=n(71983),f={"highlighter-demo-demos":{component:r.memo(r.lazy(function(){return n.e(58780).then(n.bind(n,79552))})),asset:{type:"BLOCK",id:"highlighter-demo-demos",refAtomIds:["Highlighter"],dependencies:{"index.tsx":{type:"FILE",value:n(40635).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.86"}},entry:"index.tsx"},context:{"@lobehub/ui":a,"@yuntijs/ui":y},renderOpts:{compile:function(){var m=i()(o()().mark(function c(){var d,p=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,p));case 3:case"end":return e.stop()}},c)}));function h(){return m.apply(this,arguments)}return h}()}},"highlighter-demo-fullfeatured":{component:r.memo(r.lazy(function(){return n.e(58780).then(n.bind(n,14843))})),asset:{type:"BLOCK",id:"highlighter-demo-fullfeatured",refAtomIds:["Highlighter"],dependencies:{"index.tsx":{type:"FILE",value:n(20774).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.86"}},entry:"index.tsx"},context:{"@lobehub/ui":a,"@yuntijs/ui":y},renderOpts:{compile:function(){var m=i()(o()().mark(function c(){var d,p=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,p));case 3:case"end":return e.stop()}},c)}));function h(){return m.apply(this,arguments)}return h}()}}}},5440:function(u,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return s}});const s=[]},20774:function(u,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},40635:function(u,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
      wrap: false,
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
