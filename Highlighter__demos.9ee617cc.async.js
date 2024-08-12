"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[8780],{7275:function(i,n,e){e.r(n);var u=e(26068),_=e.n(u),t=e(32313),r=e(48328),a=e(15474),o=e(52676),d=`export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}`;n.default=function(){var s=(0,t.useCreateStore)(),l=(0,t.useControls)({fileName:"",children:{rows:!0,value:d},language:"tsx",allowChangeLanguage:!1},{store:s});return(0,o.jsx)(r.ZP,{levaStore:s,children:(0,o.jsx)(a.Highlighter,_()(_()({fullFeatured:!0},l),{},{style:_()(_()({},l.style),{},{width:"100%"})}))})}},45982:function(i,n,e){e.r(n);var u=e(26068),_=e.n(u),t=e(32313),r=e(48328),a=e(15474),o=e(52676),d=`export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}`;n.default=function(){var s=(0,t.useCreateStore)(),l=(0,t.useControls)({children:{rows:!0,value:d},copyable:!0,copyButtonSize:{options:["site","large","normal","small"],value:"site"},language:"tsx",showLanguage:!0,spotlight:!1,type:{options:["ghost","block","pure"],value:"block"},fullFeatured:!1,wrap:!1},{store:s});return(0,o.jsx)(r.ZP,{levaStore:s,children:(0,o.jsx)(a.Highlighter,_()(_()({},l),{},{style:_()(_()({},l.style),{},{width:"100%"})}))})}}}]);
