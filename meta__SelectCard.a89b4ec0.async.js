(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[69142],{72239:function(r,t,e){var u={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function p(o){if(!e.o(u,o))return Promise.resolve().then(function(){var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s});var v=u[o],c=v[0];return e.e(v[1]).then(function(){return e.t(c,19)})}p.keys=function(){return Object.keys(u)},p.id=72239,r.exports=p},41560:function(r,t,e){"use strict";var u;e.r(t),e.d(t,{demos:function(){return j}});var p=e(90228),o=e.n(p),v=e(87999),c=e.n(v),s=e(75271),y=e(71983),g=e(6747),h=e(16911),j={"selectcard-demo-demos":{component:s.memo(s.lazy(function(){return e.e(1199).then(e.bind(e,19224))})),asset:{type:"BLOCK",id:"selectcard-demo-demos",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(84950).Z},"@yuntijs/ui":{type:"NPM",value:"1.1.0"}},entry:"index.tsx"},context:{"@yuntijs/ui":y},renderOpts:{compile:function(){var a=c()(o()().mark(function d(){var l,m=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(92074).then(e.bind(e,92074));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,m));case 3:case"end":return n.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"selectcard-demo-selectwithimg":{component:s.memo(s.lazy(function(){return e.e(1199).then(e.bind(e,25624))})),asset:{type:"BLOCK",id:"selectcard-demo-selectwithimg",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(29500).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@yuntijs/ui":{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":g,"@yuntijs/ui":y,react:u||(u=e.t(s,2))},renderOpts:{compile:function(){var a=c()(o()().mark(function d(){var l,m=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(92074).then(e.bind(e,92074));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,m));case 3:case"end":return n.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"selectcard-demo-selectmultiple":{component:s.memo(s.lazy(function(){return e.e(1199).then(e.bind(e,66599))})),asset:{type:"BLOCK",id:"selectcard-demo-selectmultiple",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(75699).Z},"@yuntijs/ui":{type:"NPM",value:"1.1.0"}},entry:"index.tsx"},context:{"@yuntijs/ui":y},renderOpts:{compile:function(){var a=c()(o()().mark(function d(){var l,m=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(92074).then(e.bind(e,92074));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,m));case 3:case"end":return n.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"selectcard-demo-playground":{component:s.memo(s.lazy(function(){return e.e(1199).then(e.bind(e,87782))})),asset:{type:"BLOCK",id:"selectcard-demo-playground",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(51439).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@lobehub/ui":h,"@yuntijs/ui":y,react:u||(u=e.t(s,2))},renderOpts:{compile:function(){var a=c()(o()().mark(function d(){var l,m=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(92074).then(e.bind(e,92074));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,m));case 3:case"end":return n.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},80600:function(r,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return u}});const u=[{value:"A card display select, support multiple select and ",paraId:0},{value:"optionRender",paraId:0},{value:".",paraId:0}]},51439:function(r,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},75699:function(r,t){"use strict";t.Z=`import { SelectCard } from '@yuntijs/ui';

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
`},29500:function(r,t){"use strict";t.Z=`import { AntDesignOutlined } from '@ant-design/icons';
import { Flex, Segmented, SelectCard, SelectCardProps } from '@yuntijs/ui';
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
          {
            label: 'icon',
            icon: <AntDesignOutlined />,
            iconStyle: { backgroundColor: '#1677ff' },
            value: 'icon',
          },
        ]}
        size={size}
      />
    </Flex>
  );
};

export default SelectWithImgDemo;
`},84950:function(r,t){"use strict";t.Z=`import { SelectCard } from '@yuntijs/ui';

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
