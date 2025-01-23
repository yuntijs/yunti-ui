(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[80961],{1234:function(i,t,n){var e={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(u){if(!n.o(e,u))return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l});var r=e[u],a=r[0];return n.e(r[1]).then(function(){return n.t(a,19)})}o.keys=function(){return Object.keys(e)},o.id=1234,i.exports=o},99144:function(i,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return _}});var e=n(90228),o=n.n(e),u=n(87999),r=n.n(u),a=n(75271),l=n(68862),d=n(42847),c=n(71983),p=n(63651),y=n(6997),h=n(6020),_={"src-use-speech-synthes-demo-demos":{component:a.memo(a.lazy(function(){return Promise.all([n.e(79233),n.e(63626),n.e(50778),n.e(35787),n.e(59850),n.e(91867),n.e(26577),n.e(52433)]).then(n.bind(n,41324))})),asset:{type:"BLOCK",id:"src-use-speech-synthes-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(77370).Z},"@lobehub/tts":{type:"NPM",value:"1.25.1"},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.84"},antd:{type:"NPM",value:"5.23.0"},"lucide-react":{type:"NPM",value:"0.417.0"},"react-layout-kit":{type:"NPM",value:"1.9.0"}},entry:"index.tsx"},context:{"@lobehub/tts":l,"@lobehub/ui":d,"@yuntijs/ui":c,antd:p,"lucide-react":y,"react-layout-kit":h},renderOpts:{compile:function(){var f=r()(o()().mark(function E(){var m,j=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(74807).then(n.bind(n,74807));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,j));case 3:case"end":return s.stop()}},E)}));function v(){return f.apply(this,arguments)}return v}()}}}},33749:function(i,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return e}});const e=[]},77370:function(i,t){"use strict";t.Z=`import { SpeechSynthesisTTS } from '@lobehub/tts';
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
