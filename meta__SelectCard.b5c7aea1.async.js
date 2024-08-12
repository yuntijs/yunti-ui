(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9142],{59168:function(u,t,e){var c={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function s(p){if(!e.o(c,p))return Promise.resolve().then(function(){var y=new Error("Cannot find module '"+p+"'");throw y.code="MODULE_NOT_FOUND",y});var r=c[p],o=r[0];return e.e(r[1]).then(function(){return e.t(o,19)})}s.keys=function(){return Object.keys(c)},s.id=59168,u.exports=s},2671:function(u,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return f}});var c=e(90228),s=e.n(c),p=e(87999),r=e.n(p),o=e(75271),y=e(3490),f={"selectcard-demo-demos":{component:o.memo(o.lazy(function(){return e.e(1199).then(e.bind(e,23961))})),asset:{type:"BLOCK",id:"selectcard-demo-demos",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(78495).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.64"}},entry:"index.tsx"},context:{"@yuntijs/ui":e(15474)},renderOpts:{compile:function(){var a=r()(s()().mark(function d(){var l,m=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7358).then(e.bind(e,97358));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,m));case 3:case"end":return n.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"selectcard-demo-selectwithimg":{component:o.memo(o.lazy(function(){return e.e(1199).then(e.bind(e,76055))})),asset:{type:"BLOCK",id:"selectcard-demo-selectwithimg",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(17776).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.64"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":e(15474),react:e(75271)},renderOpts:{compile:function(){var a=r()(s()().mark(function d(){var l,m=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7358).then(e.bind(e,97358));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,m));case 3:case"end":return n.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"selectcard-demo-selectmultiple":{component:o.memo(o.lazy(function(){return e.e(1199).then(e.bind(e,40742))})),asset:{type:"BLOCK",id:"selectcard-demo-selectmultiple",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(73299).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.64"}},entry:"index.tsx"},context:{"@yuntijs/ui":e(15474)},renderOpts:{compile:function(){var a=r()(s()().mark(function d(){var l,m=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7358).then(e.bind(e,97358));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,m));case 3:case"end":return n.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"selectcard-demo-playground":{component:o.memo(o.lazy(function(){return e.e(1199).then(e.bind(e,78638))})),asset:{type:"BLOCK",id:"selectcard-demo-playground",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(13959).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.64"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@lobehub/ui":e(59806),"@yuntijs/ui":e(15474),react:e(75271)},renderOpts:{compile:function(){var a=r()(s()().mark(function d(){var l,m=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7358).then(e.bind(e,97358));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,m));case 3:case"end":return n.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},20947:function(u,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return s}});var c=e(3490);const s=[{value:"A card display select, support multiple select and ",paraId:0},{value:"optionRender",paraId:0},{value:".",paraId:0}]},13959:function(u,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { Divider, SelectCard, SelectCardProps } from '@yuntijs/ui';
import { useState } from 'react';

export default () => {
  const store = useCreateStore();
  const controls: SelectCardProps | any = useControls(
    {
      defaultValue: 'adapter',
      multiple: true,
      disabled: false,
      size: {
        options: ['small', 'middle', 'large'],
        value: 'middle',
      },
    },
    { store }
  );
  const [value, setValue] = useState<SelectCardProps['value']>();
  return (
    <StoryBook levaStore={store}>
      <SelectCard
        onChange={v => setValue(v)}
        options={[
          {
            label: '\u52A0\u8F7D\u9002\u914D\u5668',
            description: '\u6A21\u578B\u5C06\u4F7F\u7528\u5FAE\u8C03\u540E\u7684\u989D\u5916\u63D2\u4EF6\u6765\u589E\u5F3A\u6A21\u578B\u7684\u80FD\u529B',
            value: 'adapter',
          },
          { label: 'test1', description: 'test1 desc', value: 'test1' },
          { label: 'test2', description: 'test2 desc', value: 'test2' },
        ]}
        {...controls}
      />
      <Divider>onChange</Divider>
      <pre>{JSON.stringify({ value }, null, 2)}</pre>
    </StoryBook>
  );
};
`},73299:function(u,t){"use strict";t.Z=`import { SelectCard } from '@yuntijs/ui';

const SelectWithImgDemo = () => {
  return (
    <SelectCard
      defaultValue={['antd', 'yunti-ui']}
      multiple
      options={[
        {
          label: 'Ant Design',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
          value: 'antd',
        },
        {
          label: 'Lobehub UI',
          img: 'https://registry.npmmirror.com/@lobehub/assets-logo/1.2.0/files/assets/logo-3d.webp',
          value: 'lobehub-ui',
        },
        {
          label: 'YuntiJS UI',
          img: 'https://avatars.githubusercontent.com/u/148947838',
          value: 'yunti-ui',
        },
        { label: 'test', description: 'test desc', value: 'test' },
      ]}
    />
  );
};

export default SelectWithImgDemo;
`},17776:function(u,t){"use strict";t.Z=`import { Flex, Segmented, SelectCard, SelectCardProps } from '@yuntijs/ui';
import { useState } from 'react';

const SelectWithImgDemo = () => {
  const [size, setSize] = useState<SelectCardProps['size']>('small');
  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="small">
        <div>size:</div>
        <Segmented<SelectCardProps['size']>
          onChange={value => setSize(value)}
          options={['small', 'middle', 'large']}
          value={size}
        />
      </Flex>
      <SelectCard
        options={[
          {
            label: 'Ant Design',
            img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            value: 'antd',
          },
          {
            label: 'Lobehub UI',
            img: 'https://registry.npmmirror.com/@lobehub/assets-logo/1.2.0/files/assets/logo-3d.webp',
            value: 'lobehub-ui',
          },
          {
            label: 'YuntiJS UI',
            img: 'https://avatars.githubusercontent.com/u/148947838',
            value: 'yunti-ui',
          },
          { label: 'test', description: 'test desc', value: 'test' },
        ]}
        size={size}
      />
    </Flex>
  );
};

export default SelectWithImgDemo;
`},78495:function(u,t){"use strict";t.Z=`import { SelectCard } from '@yuntijs/ui';

const SelectCardDemo = () => {
  return (
    <SelectCard
      options={[
        {
          label: '\u52A0\u8F7D\u9002\u914D\u5668',
          description: '\u6A21\u578B\u5C06\u4F7F\u7528\u5FAE\u8C03\u540E\u7684\u989D\u5916\u63D2\u4EF6\u6765\u589E\u5F3A\u6A21\u578B\u7684\u80FD\u529B',
          value: 'adapter',
        },
        { label: 'test1', description: 'test1 desc', value: 'test1' },
        { label: 'test2', description: 'test2 desc', value: 'test2' },
      ]}
    />
  );
};

export default SelectCardDemo;
`}}]);
