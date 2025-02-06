"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[64715],{74691:function(d,u,_){_.r(u);var s=_(26068),r=_.n(s),o=_(84522),t=_(59850),i=_(88401),a=_(72945),n=_(52676),e=`<thinking>
this is a thinking
<thinking>
`;u.default=function(){var l=(0,o.useCreateStore)(),E=(0,o.useControls)({children:{rows:!0,value:e+`

`+a.content},variant:{options:["normal","chat"],value:"chat"}},{store:l});return(0,n.jsx)(t.ZP,{levaStore:l,children:(0,n.jsx)(i.L,r()({},E))})}},84764:function(d,u,_){_.r(u);var s=_(26068),r=_.n(s),o=_(84522),t=_(59850),i=_(88401),a=_(72945),n=_(52676);u.default=function(){var e=(0,o.useCreateStore)(),l=(0,o.useControls)({children:{rows:!0,value:a.content2},fullFeaturedCodeBlock:!1},{store:e});return(0,n.jsx)(t.ZP,{levaStore:e,children:(0,n.jsx)(i.L,r()(r()({},l),{},{componentProps:{a:{rel:"",target:"_self"},hr:{children:"Custom HR",dashed:!0},img:{style:{border:"5px solid green",borderRadius:"20px"}}}}))})}},47683:function(d,u,_){_.r(u);var s=_(16713),r=_(88401),o=_(69024),t=_(52676),i=`\`\`\`tsx
export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}
\`\`\`
`;u.default=function(){return(0,t.jsx)(r.L,{componentProps:{highlight:{actionsRender:function(n){var e=n.content,l=n.actionIconSize,E=n.language,m=n.originalNode;return(0,t.jsxs)(t.Fragment,{children:[m,(0,t.jsx)(s.Z,{icon:o.Z,onClick:function(){return alert(E+e)},size:l})]})}}},fullFeaturedCodeBlock:!0,children:i})}},14094:function(d,u,_){_.r(u);var s=_(26068),r=_.n(s),o=_(84522),t=_(59850),i=_(88401),a=_(52676),n=`\u597D\u7684,\u8BA9\u6211\u6765\u7528\u65B0\u7684\u89C6\u89D2\u89E3\u91CA\u4E00\u4E0B"\u7761\u89C9"\u8FD9\u4E2A\u8BCD\u3002

<think>\u8FD9\u4E2A\u8BF7\u6C42\u9002\u5408\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684SVG\u5361\u7247artifact</think>

\u8FD9\u662F\u6211\u4E3A"\u7761\u89C9"\u8FD9\u4E2A\u8BCD\u521B\u4F5C\u7684\u65B0\u89E3\u91CA\u5361\u7247\u3002`;u.default=function(){var e=(0,o.useCreateStore)(),l=(0,o.useControls)({children:{rows:!0,value:n}},{store:e}),E=l.children,m={children:E};return(0,a.jsx)(t.ZP,{levaStore:e,children:(0,a.jsx)(i.L,r()(r()({},m),{},{customComponentProps:{think:{second:20,done:!0}}}))})}},83194:function(d,u,_){_.r(u);var s=_(26068),r=_.n(s),o=_(84522),t=_(59850),i=_(88401),a=_(72945),n=_(52676);u.default=function(){var e=(0,o.useCreateStore)(),l=(0,o.useControls)({allowHtml:!0,children:{rows:!0,value:a.content},fontSize:16,fullFeaturedCodeBlock:!0,headerMultiple:1,lineHeight:1.8,marginMultiple:1.5},{store:e});return(0,n.jsx)(t.ZP,{levaStore:e,children:(0,n.jsx)(i.L,r()({},l))})}},64895:function(d,u,_){_.r(u);var s=_(26068),r=_.n(s),o=_(84522),t=_(59850),i=_(88401),a=_(72945),n=_(52676);u.default=function(){var e=(0,o.useCreateStore)(),l=(0,o.useControls)({allowHtml:!0,children:{rows:!0,value:a.code},fullFeaturedCodeBlock:!0},{store:e});return(0,n.jsx)(t.ZP,{levaStore:e,children:(0,n.jsx)(i.L,r()({componentProps:{highlight:{enableTransformer:!0}}},l))})}}}]);
