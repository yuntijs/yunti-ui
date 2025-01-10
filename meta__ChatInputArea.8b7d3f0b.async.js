(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[12079],{85848:function(l,o,n){var u={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function a(i){if(!n.o(u,i))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d});var _=u[i],c=_[0];return n.e(_[1]).then(function(){return n.t(c,19)})}a.keys=function(){return Object.keys(u)},a.id=85848,l.exports=a},96261:function(l,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return j}});var u=n(90228),a=n.n(u),i=n(87999),_=n.n(i),c=n(75271),d=n(90831),p=n(71983),O=n(90983),f=n(6020),j={"chatinputarea-demo-demos":{component:c.memo(c.lazy(function(){return n.e(8081).then(n.bind(n,76838))})),asset:{type:"BLOCK",id:"chatinputarea-demo-demos",refAtomIds:["ChatInputArea"],dependencies:{"index.tsx":{type:"FILE",value:n(11116).Z},"@lobehub/ui":{type:"NPM",value:"1.153.16"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.79"},"lucide-react":{type:"NPM",value:"0.417.0"},"react-layout-kit":{type:"NPM",value:"1.9.0"}},entry:"index.tsx"},context:{"@lobehub/ui":d,"@yuntijs/ui":p,"lucide-react":O,"react-layout-kit":f},renderOpts:{compile:function(){var t=_()(a()().mark(function r(){var e,E=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(74807).then(n.bind(n,74807));case 2:return m.abrupt("return",(e=m.sent).default.apply(e,E));case 3:case"end":return m.stop()}},r)}));function s(){return t.apply(this,arguments)}return s}()}}}},78466:function(l,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return u}});const u=[]},11116:function(l,o){"use strict";o.Z=`import { ActionIcon, TokenTag } from '@lobehub/ui';
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
`},55471:function(l,o,n){"use strict";var u=n(30985),a=n(58424),i=n(24187),_=n(26325),c=n(75271),d=n(52676),p=["children","className","prefixCls"];function O(t,s){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter(function(E){return Object.getOwnPropertyDescriptor(t,E).enumerable})),r.push.apply(r,e)}return r}function f(t){for(var s=1;s<arguments.length;s++){var r=arguments[s]!=null?arguments[s]:{};s%2?O(Object(r),!0).forEach(function(e){(0,u.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var j=(0,c.forwardRef)(function(t,s){var r=t.children,e=t.className,E=t.prefixCls,y=(0,a.Z)(t,p);return(0,d.jsx)(i.Z,f(f({ref:s,internalClassName:"".concat((0,_.Gn)(E),"-center"),className:e},y),{},{align:"center",justify:"center",children:r}))});o.Z=j},6020:function(l,o,n){"use strict";n.r(o),n.d(o,{Center:function(){return u.Z},Flexbox:function(){return a.D}});var u=n(55471),a=n(90142)}}]);
