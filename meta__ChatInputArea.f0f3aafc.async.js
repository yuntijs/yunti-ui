(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2079],{37442:function(_,o,n){var a={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function r(i){if(!n.o(a,i))return Promise.resolve().then(function(){var m=new Error("Cannot find module '"+i+"'");throw m.code="MODULE_NOT_FOUND",m});var l=a[i],d=l[0];return n.e(l[1]).then(function(){return n.t(d,19)})}r.keys=function(){return Object.keys(a)},r.id=37442,_.exports=r},77243:function(_,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return p}});var a=n(90228),r=n.n(a),i=n(87999),l=n.n(i),d=n(50959),m=n(59063),p={"chatinputarea-demo-demos":{component:d.memo(d.lazy(function(){return n.e(8081).then(n.bind(n,39795))})),asset:{type:"BLOCK",id:"chatinputarea-demo-demos",refAtomIds:["ChatInputArea"],dependencies:{"index.tsx":{type:"FILE",value:n(55086).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.54"},"lucide-react":{type:"NPM",value:"0.400.0"},"react-layout-kit":{type:"NPM",value:"1.7.4"}},entry:"index.tsx"},context:{"@lobehub/ui":n(12658),"@yuntijs/ui":n(63408),"lucide-react":n(68242),"react-layout-kit":n(41397)},renderOpts:{compile:function(){var c=l()(r()().mark(function O(){var e,s=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(8896).then(n.bind(n,68896));case 2:return t.abrupt("return",(e=t.sent).default.apply(e,s));case 3:case"end":return t.stop()}},O)}));function f(){return c.apply(this,arguments)}return f}()}}}},50654:function(_,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return r}});var a=n(59063);const r=[]},55086:function(_,o){"use strict";o.Z=`import { ActionIcon, TokenTag } from '@lobehub/ui';
import { ChatInputActionBar, ChatInputArea, ChatSendButton } from '@yuntijs/ui';
import { Eraser, Languages } from 'lucide-react';
import { Flexbox } from 'react-layout-kit';

export default () => {
  return (
    <Flexbox style={{ height: 150, position: 'relative' }}>
      <div style={{ flex: 1 }}></div>
      <ChatInputArea
        autoSize={{ minRows: 1, maxRows: 4 }}
        bottomAddons={<ChatSendButton />}
        topAddons={
          <ChatInputActionBar
            leftAddons={
              <>
                <ActionIcon icon={Languages} />
                <ActionIcon icon={Eraser} />
                <TokenTag maxValue={5000} value={1000} />
              </>
            }
          />
        }
      />
    </Flexbox>
  );
};
`},81057:function(_,o,n){"use strict";var a=n(25940),r=n(48385),i=n(8462),l=n(79086),d=n(50959),m=n(11527),p=["children","className","prefixCls"];function c(e,s){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter(function(h){return Object.getOwnPropertyDescriptor(e,h).enumerable})),u.push.apply(u,t)}return u}function f(e){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?c(Object(u),!0).forEach(function(t){(0,a.Z)(e,t,u[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):c(Object(u)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))})}return e}var O=(0,d.forwardRef)(function(e,s){var u=e.children,t=e.className,h=e.prefixCls,E=(0,r.Z)(e,p);return(0,m.jsx)(i.Z,f(f({ref:s,internalClassName:"".concat((0,l.Gn)(h),"-center"),className:t},E),{},{align:"center",justify:"center",children:u}))});o.Z=O},41397:function(_,o,n){"use strict";n.r(o),n.d(o,{Center:function(){return a.Z},Flexbox:function(){return r.D}});var a=n(81057),r=n(24819)}}]);
