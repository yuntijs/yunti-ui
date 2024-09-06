(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2079],{59168:function(r,t,n){var o={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function e(s){if(!n.o(o,s))return Promise.resolve().then(function(){var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u});var i=o[s],d=i[0];return n.e(i[1]).then(function(){return n.t(d,19)})}e.keys=function(){return Object.keys(o)},e.id=59168,r.exports=e},96490:function(r,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return j}});var o={};n.r(o),n.d(o,{Center:function(){return h.Z},Flexbox:function(){return v.D}});var e=n(90228),s=n.n(e),i=n(87999),d=n.n(i),u=n(75271),A=n(98134),c=n(59806),m=n(15474),f=n(98897),h=n(55471),v=n(90142),j={"chatinputarea-demo-demos":{component:u.memo(u.lazy(function(){return n.e(8081).then(n.bind(n,31770))})),asset:{type:"BLOCK",id:"chatinputarea-demo-demos",refAtomIds:["ChatInputArea"],dependencies:{"index.tsx":{type:"FILE",value:n(26470).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.67"},"lucide-react":{type:"NPM",value:"0.417.0"},"react-layout-kit":{type:"NPM",value:"1.9.0"}},entry:"index.tsx"},context:{"@lobehub/ui":c,"@yuntijs/ui":m,"lucide-react":f,"react-layout-kit":o},renderOpts:{compile:function(){var y=d()(s()().mark(function x(){var l,C=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(7423).then(n.bind(n,7423));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,C));case 3:case"end":return a.stop()}},x)}));function p(){return y.apply(this,arguments)}return p}()}}}},42572:function(r,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return e}});var o=n(98134);const e=[]},26470:function(r,t){"use strict";t.Z=`import { ActionIcon, TokenTag } from '@lobehub/ui';
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
`}}]);
