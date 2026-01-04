"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[8780],{12184:function(h,_,e){e.r(_);var l=e(26068),n=e.n(l),s=e(95165),o=e(16896),i=e(35371),a=e(69979),t=`export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}`;_.default=function(){var r=(0,s.useCreateStore)(),u=(0,s.useControls)({fileName:"",children:{rows:!0,value:t},language:"tsx",allowChangeLanguage:!1},{store:r});return(0,a.jsx)(o.ZP,{levaStore:r,children:(0,a.jsx)(i.oP,n()(n()({fullFeatured:!0},u),{},{style:n()(n()({},u.style),{},{width:"100%"})}))})}},25356:function(h,_,e){e.r(_);var l=e(26068),n=e.n(l),s=e(95165),o=e(16896),i=e(35371),a=e(98878),t=e(69979);_.default=function(){var r=(0,s.useCreateStore)(),u=(0,s.useControls)({children:{rows:!0,value:a.content},copyable:!0,copyButtonSize:{options:["large","normal","small"],value:"small"},language:"md",showLanguage:!0,spotlight:!1,variant:{options:["filled","outlined","borderless"],value:"filled"},fullFeatured:!1,wrap:!1},{store:r});return(0,t.jsx)(o.ZP,{levaStore:r,children:(0,t.jsx)(i.oP,n()(n()({},u),{},{style:n()(n()({},u.style),{},{width:"100%"})}))})}},27785:function(h,_,e){e.r(_);var l=e(48305),n=e.n(l),s=e(35371),o=e(659),i=e(78305),a=e(56214),t=e(52136),r=e(69979),u=`import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
  preferences: { theme: 'light' | 'dark'; language: string; notifications: boolean };
}

// \u8FD9\u662F\u4E00\u4E2A\u8D85\u957F\u7684\u6CE8\u91CA\u884C\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u5728\u4E0D\u5F00\u542F wrap \u6A21\u5F0F\u4E0B\u6A2A\u5411\u6EDA\u52A8\u7684\u6548\u679C\u3002This is a very long comment line to test horizontal scrolling behavior when wrap mode is disabled. \u8FD9\u884C\u6CE8\u91CA\u8DB3\u591F\u957F\u4EE5\u786E\u4FDD\u4F1A\u89E6\u53D1\u6A2A\u5411\u6EDA\u52A8\u3002

const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
};

export const UserProfile = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchUser(userId)
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      <img src={user.avatar} alt={user.name} style={{ width: 100, height: 100, borderRadius: '50%' }} />
    </div>
  );
};`;_.default=function(){var m=(0,t.useState)(""),P=n()(m,2),O=P[0],f=P[1],y=(0,t.useState)(!1),M=n()(y,2),c=M[0],v=M[1],d=(0,t.useRef)(null),E=(0,t.useRef)(0),g=(0,t.useCallback)(function(){c||(f(""),v(!0),E.current=0,d.current=setInterval(function(){if(E.current<u.length){var p=Math.floor(Math.random()*5)+1,C=Math.min(E.current+p,u.length);f(u.slice(0,C)),E.current=C}else d.current&&(clearInterval(d.current),d.current=null),v(!1)},30))},[c]),D=(0,t.useCallback)(function(){d.current&&(clearInterval(d.current),d.current=null),v(!1)},[]),b=(0,t.useCallback)(function(){D(),f(""),E.current=0},[D]);return(0,r.jsxs)(o.Z,{gap:"small",style:{width:"100%"},vertical:!0,children:[(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.ZP,{disabled:c,onClick:g,type:"primary",children:"Start Streaming"}),(0,r.jsx)(a.ZP,{disabled:!c,onClick:D,children:"Stop"}),(0,r.jsx)(a.ZP,{onClick:b,children:"Reset"})]}),(0,r.jsx)(o.Z,{flex:1,children:(0,r.jsx)(s.oP,{animated:!0,copyable:!0,fullFeatured:!0,language:"tsx",showLanguage:!0,style:{maxHeight:400,height:400,width:600},wrap:!0,children:O})})]})}},31799:function(h,_,e){e.r(_);var l=e(26068),n=e.n(l),s=e(95165),o=e(16896),i=e(35371),a=e(31182),t=e(69979),r=`export default ({ children, className }: MarkdownProps) => {
  const { styles } = useStyles();
  return (
    <ReactMarkdown
      className={cx(styles.container, className)}
      components={{ pre: CodeBlock, code: Code }}
    >
      {children}
    </ReactMarkdown>
  );
}`;_.default=function(){var u=(0,s.useCreateStore)(),m=(0,s.useControls)({children:{rows:!0,value:r},copyable:!0,copyButtonSize:{options:["large","normal","small"],value:"small"},language:"tsx",showLanguage:!0,spotlight:!1,fullFeatured:!1,wrap:!1,theme:{options:a.themeMap,value:"slack-ochin"}},{store:u});return(0,t.jsx)(o.ZP,{levaStore:u,children:(0,t.jsx)(i.oP,n()(n()({},m),{},{style:n()(n()({},m.style),{},{width:"100%"})}))})}}}]);
