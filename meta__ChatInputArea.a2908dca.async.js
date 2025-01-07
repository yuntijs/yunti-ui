(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[12079],{69143:function(i,e,n){var _={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function u(a){if(!n.o(_,a))return Promise.resolve().then(function(){var E=new Error("Cannot find module '"+a+"'");throw E.code="MODULE_NOT_FOUND",E});var l=_[a],c=l[0];return n.e(l[1]).then(function(){return n.t(c,19)})}u.keys=function(){return Object.keys(_)},u.id=69143,i.exports=u},96261:function(i,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return t}});var _=n(90228),u=n.n(_),a=n(87999),l=n.n(a),c=n(75271),E=n(23328),y=n(17724),O=n(94572),f=n(90983),h=n(6020),t={"chatinputarea-demo-demos":{component:c.memo(c.lazy(function(){return n.e(8081).then(n.bind(n,76838))})),asset:{type:"BLOCK",id:"chatinputarea-demo-demos",refAtomIds:["ChatInputArea"],dependencies:{"index.tsx":{type:"FILE",value:n(20219).Z},"@lobehub/ui":{type:"NPM",value:"1.153.16"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.75"},"lucide-react":{type:"NPM",value:"0.417.0"},"react-layout-kit":{type:"NPM",value:"1.9.0"}},entry:"index.tsx"},context:{"@lobehub/ui":y,"@yuntijs/ui":O,"lucide-react":f,"react-layout-kit":h},renderOpts:{compile:function(){var s=l()(u()().mark(function r(){var d,p=arguments;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(74807).then(n.bind(n,74807));case 2:return m.abrupt("return",(d=m.sent).default.apply(d,p));case 3:case"end":return m.stop()}},r)}));function o(){return s.apply(this,arguments)}return o}()}}}},78466:function(i,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return u}});var _=n(23328);const u=[]},20219:function(i,e){"use strict";e.Z=`import { ActionIcon, TokenTag } from '@lobehub/ui';
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
`},55471:function(i,e,n){"use strict";var _=n(30985),u=n(58424),a=n(47981),l=n(26325),c=n(75271),E=n(52676),y=["children","className","prefixCls"];function O(t,s){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);s&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(t,d).enumerable})),o.push.apply(o,r)}return o}function f(t){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?arguments[s]:{};s%2?O(Object(o),!0).forEach(function(r){(0,_.Z)(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}var h=(0,c.forwardRef)(function(t,s){var o=t.children,r=t.className,d=t.prefixCls,p=(0,u.Z)(t,y);return(0,E.jsx)(a.Z,f(f({ref:s,internalClassName:"".concat((0,l.Gn)(d),"-center"),className:r},p),{},{align:"center",justify:"center",children:o}))});e.Z=h},6020:function(i,e,n){"use strict";n.r(e),n.d(e,{Center:function(){return _.Z},Flexbox:function(){return u.D}});var _=n(55471),u=n(90142)}}]);
