(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[62474],{1234:function(r,o,n){var a={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function t(d){if(!n.o(a,d))return Promise.resolve().then(function(){var s=new Error("Cannot find module '"+d+"'");throw s.code="MODULE_NOT_FOUND",s});var i=a[d],l=i[0];return n.e(i[1]).then(function(){return n.t(l,19)})}t.keys=function(){return Object.keys(a)},t.id=1234,r.exports=t},96592:function(r,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return b}});var a=n(90228),t=n.n(a),d=n(87999),i=n.n(d),l=n(75271),s=n(42847),v=n(71983),h=n(6997),b={"mentions-demo-demos":{component:l.memo(l.lazy(function(){return n.e(23137).then(n.bind(n,33952))})),asset:{type:"BLOCK",id:"mentions-demo-demos",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:n(18166).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.86"},"lucide-react":{type:"NPM",value:"0.417.0"}},entry:"index.tsx"},context:{"@lobehub/ui":s,"@yuntijs/ui":v,"lucide-react":h},renderOpts:{compile:function(){var m=i()(t()().mark(function p(){var u,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,y));case 3:case"end":return e.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}},"mentions-demo-singleline":{component:l.memo(l.lazy(function(){return n.e(23137).then(n.bind(n,78241))})),asset:{type:"BLOCK",id:"mentions-demo-singleline",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:n(79950).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.86"},"lucide-react":{type:"NPM",value:"0.417.0"}},entry:"index.tsx"},context:{"@lobehub/ui":s,"@yuntijs/ui":v,"lucide-react":h},renderOpts:{compile:function(){var m=i()(t()().mark(function p(){var u,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,y));case 3:case"end":return e.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}},"mentions-demo-playground":{component:l.memo(l.lazy(function(){return n.e(23137).then(n.bind(n,88557))})),asset:{type:"BLOCK",id:"mentions-demo-playground",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:n(52964).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.86"},"lucide-react":{type:"NPM",value:"0.417.0"}},entry:"index.tsx"},context:{"@lobehub/ui":s,"@yuntijs/ui":v,"lucide-react":h},renderOpts:{compile:function(){var m=i()(t()().mark(function p(){var u,y=arguments;return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,y));case 3:case"end":return e.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}}}},32670:function(r,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return a}});const a=[{value:"Based on ",paraId:0,tocIndex:0},{value:"lexical editor",paraId:0,tocIndex:0},{value:", inspired by ",paraId:0,tocIndex:0},{value:"Dify",paraId:0,tocIndex:0},{value:" and ",paraId:0,tocIndex:0},{value:"lexical-beautiful-mentions",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:`import { Icon } from '@lobehub/ui';
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
`,paraId:1,tocIndex:1}]},52964:function(r,o){"use strict";o.Z=`import { Icon, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},79950:function(r,o){"use strict";o.Z=`import { Icon } from '@lobehub/ui';
import { Mentions } from '@yuntijs/ui';
import { Carrot, Cloud, Smile } from 'lucide-react';

export default () => {
  return (
    <Mentions
      autoSize={{
        minRows: 1,
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
`},18166:function(r,o){"use strict";o.Z=`import { Icon } from '@lobehub/ui';
import { Mentions, Typography } from '@yuntijs/ui';
import { Braces, Carrot, Cloud, Smile } from 'lucide-react';

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
        {
          label: 'json',
          value: 'json',
          icon: <Icon icon={Braces} />,
          children: [
            {
              label: 'id',
              selectedLabel: 'json.id',
              value: 'json.id',
            },
            {
              label: 'name',
              selectedLabel: 'json.name',
              value: 'json.name',
            },
            {
              label: 'category',
              value: 'json.category',
              children: [
                {
                  label: 'id',
                  selectedLabel: 'json.category.id',
                  value: 'json.category.id',
                  extraElement: <Typography.Text code>string</Typography.Text>,
                },
                {
                  label: 'name',
                  selectedLabel: 'json.category.name',
                  value: 'json.category.name',
                },
              ],
            },
            {
              label: 'photoUrls',
              value: 'json.photoUrls',
              children: [
                {
                  label: '[Array Item]',
                  value: 'json.photoUrls.root',
                },
              ],
            },
            {
              label: 'tags',
              value: 'json.tags',
              children: [
                {
                  label: '[Array Item]',
                  value: 'json.tags.root',
                  disabled: true,
                },
                {
                  label: 'id',
                  value: 'json.tags.id',
                },
                {
                  label: 'name',
                  value: 'json.tags.name',
                },
              ],
            },
            {
              label: 'status',
              value: 'json.status',
            },
          ],
        },
      ]}
      preTriggerChars=".*"
      triggers={['@']}
    />
  );
};
`}}]);
