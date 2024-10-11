(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[961],{59168:function(i,t,n){var o={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function e(u){if(!n.o(o,u))return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l});var r=o[u],a=r[0];return n.e(r[1]).then(function(){return n.t(a,19)})}e.keys=function(){return Object.keys(o)},e.id=59168,i.exports=e},71764:function(i,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return E}});var o=n(90228),e=n.n(o),u=n(87999),r=n.n(u),a=n(75271),l=n(92970),m=n(20376),d=n(59806),c=n(25144),y=n(33275),p=n(13625),h=n(6020),E={"src-use-speech-synthes-demo-demos":{component:a.memo(a.lazy(function(){return Promise.all([n.e(6505),n.e(9401),n.e(2033),n.e(4718),n.e(8328),n.e(5144),n.e(2433)]).then(n.bind(n,87172))})),asset:{type:"BLOCK",id:"src-use-speech-synthes-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(88653).Z},"@lobehub/tts":{type:"NPM",value:"1.25.1"},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.69"},antd:{type:"NPM",value:"5.19.4"},"lucide-react":{type:"NPM",value:"0.417.0"},"react-layout-kit":{type:"NPM",value:"1.9.0"}},entry:"index.tsx"},context:{"@lobehub/tts":m,"@lobehub/ui":d,"@yuntijs/ui":c,antd:y,"lucide-react":p,"react-layout-kit":h},renderOpts:{compile:function(){var v=r()(e()().mark(function P(){var _,O=arguments;return e()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(7423).then(n.bind(n,7423));case 2:return s.abrupt("return",(_=s.sent).default.apply(_,O));case 3:case"end":return s.stop()}},P)}));function f(){return v.apply(this,arguments)}return f}()}}}},72002:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return e}});var o=n(92970);const e=[]},88653:function(i,t){"use strict";t.Z=`import { SpeechSynthesisTTS } from '@lobehub/tts';
import { Icon, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
