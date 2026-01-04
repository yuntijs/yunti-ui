(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[961],{16404:function(i,t,n){var o={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,7458],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,3947],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function e(u){if(!n.o(o,u))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a});var l=o[u],r=l[0];return n.e(l[1]).then(function(){return n.t(r,19)})}e.keys=function(){return Object.keys(o)},e.id=16404,i.exports=e},77775:function(i,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return v}});var o=n(90228),e=n.n(o),u=n(87999),l=n.n(u),r=n(52136),a=n(86425),d=n(23049),y=n(41453),c=n(77371),p=n(99630),h=n(44282),f=n(20558),v={"src-use-speech-synthes-demo-demos":{component:r.memo(r.lazy(function(){return Promise.all([n.e(5217),n.e(1179),n.e(2622),n.e(4240),n.e(3112),n.e(9172),n.e(3748),n.e(6896),n.e(9534),n.e(3311),n.e(2433)]).then(n.bind(n,70668))})),asset:{type:"BLOCK",id:"src-use-speech-synthes-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(4719).Z},"@lobehub/tts":{type:"NPM",value:"2.0.1"},"@lobehub/ui":{type:"NPM",value:"2.12.4"},"@yuntijs/ui":{type:"NPM",value:"2.0.0-beta.23"},antd:{type:"NPM",value:"5.27.3"},"lucide-react":{type:"NPM",value:"0.544.0"},"react-layout-kit":{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@lobehub/tts":a,"@lobehub/ui":d,"@lobehub/ui/storybook":y,"@yuntijs/ui":c,antd:p,"lucide-react":h,"react-layout-kit":f},renderOpts:{compile:function(){var E=l()(e()().mark(function P(){var m,O=arguments;return e()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(6768).then(n.bind(n,6768));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,O));case 3:case"end":return s.stop()}},P)}));function j(){return E.apply(this,arguments)}return j}()}}}},41385:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});const o=[]},4719:function(i,t){"use strict";t.Z=`import { SpeechSynthesisTTS } from '@lobehub/tts';
import { Icon } from '@lobehub/ui';
import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { useSpeechSynthes } from '@yuntijs/ui';
import { Button, Input, SelectProps } from 'antd';
import { StopCircle, Volume2 } from 'lucide-react';
import { Flexbox } from 'react-layout-kit';

const defaultText = '\u8FD9\u662F\u4E00\u6BB5\u4F7F\u7528 Speech Synthes \u7684\u8BED\u97F3\u6F14\u793A';

const genLevaOptions = (options: SelectProps['options']) => {
  const data: any = {};
  // eslint-disable-next-line unicorn/no-array-for-each
  options?.forEach((item: any) => (data[item?.label || item?.value] = item?.value));
  return data;
};

export default () => {
  const store = useCreateStore();
  const options: any = useControls(
    {
      pitch: {
        max: 1,
        min: -1,
        step: 0.1,
        value: 0,
      },
      rate: {
        max: 1,
        min: -1,
        step: 0.1,
        value: 0,
      },
      voice: {
        options: genLevaOptions(new SpeechSynthesisTTS().voiceOptions),
        value: '\u5A77\u5A77',
      },
    },
    { store }
  );
  const { setText, isLoading, start, stop } = useSpeechSynthes(defaultText, options);
  return (
    <StoryBook levaStore={store}>
      <Flexbox gap={8}>
        {isLoading ? (
          <Button block icon={<Icon icon={StopCircle} />} onClick={stop}>
            Stop
          </Button>
        ) : (
          <Button block icon={<Icon icon={Volume2} />} onClick={start} type={'primary'}>
            Speak
          </Button>
        )}
        <Input.TextArea defaultValue={defaultText} onChange={e => setText(e.target.value)} />
      </Flexbox>
    </StoryBook>
  );
};
`}}]);
