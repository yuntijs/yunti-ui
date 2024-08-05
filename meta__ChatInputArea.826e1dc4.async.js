(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2079],{59168:function(s,t,n){var o={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function e(r){if(!n.o(o,r))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d});var i=o[r],a=i[0];return n.e(i[1]).then(function(){return n.t(a,19)})}e.keys=function(){return Object.keys(o)},e.id=59168,s.exports=e},57598:function(s,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return _}});var o=n(90228),e=n.n(o),r=n(87999),i=n.n(r),a=n(75271),d=n(69593),_={"chatinputarea-demo-demos":{component:a.memo(a.lazy(function(){return n.e(8081).then(n.bind(n,51))})),asset:{type:"BLOCK",id:"chatinputarea-demo-demos",refAtomIds:["ChatInputArea"],dependencies:{"index.tsx":{type:"FILE",value:n(79552).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.60"},"lucide-react":{type:"NPM",value:"0.417.0"},"react-layout-kit":{type:"NPM",value:"1.9.0"}},entry:"index.tsx"},context:{"@lobehub/ui":n(59806),"@yuntijs/ui":n(82426),"lucide-react":n(68068),"react-layout-kit":n(6020)},renderOpts:{compile:function(){var m=i()(e()().mark(function h(){var l,y=arguments;return e()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n.e(7358).then(n.bind(n,97358));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,y));case 3:case"end":return u.stop()}},h)}));function c(){return m.apply(this,arguments)}return c}()}}}},30853:function(s,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return e}});var o=n(69593);const e=[]},79552:function(s,t){"use strict";t.Z=`import { ActionIcon, TokenTag } from '@lobehub/ui';
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
`},6020:function(s,t,n){"use strict";n.r(t),n.d(t,{Center:function(){return o.Z},Flexbox:function(){return e.D}});var o=n(55471),e=n(90142)}}]);
