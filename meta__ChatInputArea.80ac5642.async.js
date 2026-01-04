(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2079],{16404:function(i,t,n){var e={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,7458],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,3947],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(s){if(!n.o(e,s))return Promise.resolve().then(function(){var _=new Error("Cannot find module '"+s+"'");throw _.code="MODULE_NOT_FOUND",_});var r=e[s],a=r[0];return n.e(r[1]).then(function(){return n.t(a,19)})}o.keys=function(){return Object.keys(e)},o.id=16404,i.exports=o},65284:function(i,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return p}});var e=n(90228),o=n.n(e),s=n(87999),r=n.n(s),a=n(52136),_=n(23049),d=n(68458),m=n(77371),c=n(44282),h=n(20558),p={"chatinputarea-demo-demos":{component:a.memo(a.lazy(function(){return n.e(8081).then(n.bind(n,75558))})),asset:{type:"BLOCK",id:"chatinputarea-demo-demos",refAtomIds:["ChatInputArea"],dependencies:{"index.tsx":{type:"FILE",value:n(99755).Z},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"},"lucide-react":{type:"NPM",value:"0.544.0"},"react-layout-kit":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@lobehub/ui":_,"@lobehub/ui/chat":d,"@yuntijs/ui":m,"lucide-react":c,"react-layout-kit":h},renderOpts:{compile:function(){var y=r()(o()().mark(function f(){var l,j=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n.e(6768).then(n.bind(n,6768));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,j));case 3:case"end":return u.stop()}},f)}));function E(){return y.apply(this,arguments)}return E}()}}}},47316:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return e}});const e=[]},99755:function(i,t){"use strict";t.Z=`import { ActionIcon } from '@lobehub/ui';
import { TokenTag } from '@lobehub/ui/chat';
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
