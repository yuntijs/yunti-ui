"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[58780],{93569:function(i,n,_){_.r(n);var a=_(26068),e=_.n(a),t=_(84522),r=_(3409),d=_(22435),l=_(52676),s=`export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}`;n.default=function(){var o=(0,t.useCreateStore)(),u=(0,t.useControls)({fileName:"",children:{rows:!0,value:s},language:"tsx",allowChangeLanguage:!1},{store:o});return(0,l.jsx)(r.ZP,{levaStore:o,children:(0,l.jsx)(d.oP,e()(e()({fullFeatured:!0},u),{},{style:e()(e()({},u.style),{},{width:"100%"})}))})}},3562:function(i,n,_){_.r(n);var a=_(26068),e=_.n(a),t=_(84522),r=_(3409),d=_(22435),l=_(59529),s=_(52676);n.default=function(){var o=(0,t.useCreateStore)(),u=(0,t.useControls)({children:{rows:!0,value:l.content},copyable:!0,copyButtonSize:{options:["site","large","normal","small"],value:"site"},language:"md",showLanguage:!0,spotlight:!1,type:{options:["ghost","block","pure"],value:"block"},fullFeatured:!1,wrap:!1},{store:o});return(0,s.jsx)(r.ZP,{levaStore:o,children:(0,s.jsx)(d.oP,e()(e()({},u),{},{style:e()(e()({},u.style),{},{width:"100%"})}))})}},44360:function(i,n,_){_.r(n);var a=_(26068),e=_.n(a),t=_(84522),r=_(3409),d=_(22435),l=_(52676),s=`export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}`;n.default=function(){var o=(0,t.useCreateStore)(),u=(0,t.useControls)({children:{rows:!0,value:s},copyable:!0,copyButtonSize:{options:["site","large","normal","small"],value:"site"},language:"tsx",showLanguage:!0,spotlight:!1,type:{options:["ghost","block","pure"],value:"block"},fullFeatured:!1,wrap:!1},{store:o});return(0,l.jsx)(r.ZP,{levaStore:o,children:(0,l.jsx)(d.oP,e()(e()({},u),{},{style:e()(e()({},u.style),{},{width:"100%"})}))})}}}]);
