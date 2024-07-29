(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2474],{37442:function(i,o,n){var u={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function t(s){if(!n.o(u,s))return Promise.resolve().then(function(){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d});var l=u[s],r=l[0];return n.e(l[1]).then(function(){return n.t(r,19)})}t.keys=function(){return Object.keys(u)},t.id=37442,i.exports=t},85492:function(i,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return f}});var u=n(90228),t=n.n(u),s=n(87999),l=n.n(s),r=n(50959),d=n(93139),f={"mentions-demo-demos":{component:r.memo(r.lazy(function(){return n.e(3137).then(n.bind(n,88826))})),asset:{type:"BLOCK",id:"mentions-demo-demos",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:n(27782).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.54"},"lucide-react":{type:"NPM",value:"0.400.0"}},entry:"index.tsx"},context:{"@lobehub/ui":n(12658),"@yuntijs/ui":n(63408),"lucide-react":n(68242)},renderOpts:{compile:function(){var m=l()(t()().mark(function p(){var a,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8896).then(n.bind(n,68896));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,y));case 3:case"end":return e.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}},"mentions-demo-playground":{component:r.memo(r.lazy(function(){return n.e(3137).then(n.bind(n,65103))})),asset:{type:"BLOCK",id:"mentions-demo-playground",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:n(21546).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.54"},"lucide-react":{type:"NPM",value:"0.400.0"}},entry:"index.tsx"},context:{"@lobehub/ui":n(12658),"@yuntijs/ui":n(63408),"lucide-react":n(68242)},renderOpts:{compile:function(){var m=l()(t()().mark(function p(){var a,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8896).then(n.bind(n,68896));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,y));case 3:case"end":return e.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}}}},53953:function(i,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return t}});var u=n(93139);const t=[{value:"Based on ",paraId:0,tocIndex:0},{value:"lexical editor",paraId:0,tocIndex:0},{value:", inspired by ",paraId:0,tocIndex:0},{value:"Dify",paraId:0,tocIndex:0},{value:" and ",paraId:0,tocIndex:0},{value:"lexical-beautiful-mentions",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { Icon } from '@lobehub/ui';
import { Mentions } from '@yuntijs/ui';
import { Smile } from 'lucide-react';

export default () => {
  return (
    <Mentions
      autoSize={{
        minRows: 3,
      }}
      defaultValue="\u{1F44B}\uFF0CI'm {{1.zhang}}"
      options={[{ label: 'zhang', value: '1.zhang', icon: <Icon icon={Smile} /> }]}
      triggers={['@']}
    />
  );
};
`,paraId:1,tocIndex:1}]},21546:function(i,o){"use strict";o.Z=`import { Icon, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { Mentions, MentionsProps } from '@yuntijs/ui';
import { Carrot, Cloud, Smile } from 'lucide-react';

export default () => {
  const store = useCreateStore();
  const control: MentionsProps | any = useControls(
    {
      allowSpaces: true,
      readOnly: false,
      disabled: false,
      placeholder: '\u8F93\u5165 @ \u89E6\u53D1\u63D0\u53CA',
      variant: {
        options: ['outlined', 'filled', 'borderless'],
        value: 'outlined',
      },
      defaultValue: {
        rows: true,
        value: \`\u{1F44B}\uFF0CI'm {{1.zhang}}\`,
      },
      punctuation: {
        rows: true,
        value: '\\\\.,\\\\*\\\\?\\\\$\\\\|#{}\\\\(\\\\)\\\\^\\\\[\\\\]\\\\\\\\/!%\\'"~=<>_:;',
      },
      preTriggerChars: '.*',
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Mentions
        autoSize={{ minRows: 6 }}
        options={[
          { label: 'zhang', value: '1.zhang', icon: <Icon icon={Smile} /> },
          {
            label: 'luobo',
            value: '2.luobo',
            icon: <Icon icon={Carrot} />,
            error: '\u9009\u6211\u89E6\u53D1\u9519\u8BEF\u6837\u5F0F',
          },
          { label: 'yunti', value: '3.yunti', icon: <Icon icon={Cloud} /> },
        ]}
        style={{ width: 400 }}
        {...control}
      />
    </StoryBook>
  );
};
`},27782:function(i,o){"use strict";o.Z=`import { Icon } from '@lobehub/ui';
import { Mentions } from '@yuntijs/ui';
import { Carrot, Cloud, Smile } from 'lucide-react';

export default () => {
  return (
    <Mentions
      autoSize={{
        minRows: 3,
      }}
      defaultValue="\u{1F44B}\uFF0CI'm {{1.zhang}}"
      options={[
        {
          label: 'zhang',
          value: '1.zhang',
          icon: <Icon icon={Smile} />,
        },
        {
          label: 'luobo',
          value: '2.luobo',
          icon: <Icon icon={Carrot} />,
          error: '\u9009\u6211\u89E6\u53D1\u9519\u8BEF\u6837\u5F0F',
        },
        {
          label: 'yunti',
          value: '3.yunti',
          icon: <Icon icon={Cloud} />,
        },
      ]}
      preTriggerChars=".*"
      triggers={['@']}
    />
  );
};
`}}]);
