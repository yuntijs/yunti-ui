(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9142],{59168:function(u,t,e){var r={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function a(o){if(!e.o(r,o))return Promise.resolve().then(function(){var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s});var v=r[o],p=v[0];return e.e(v[1]).then(function(){return e.t(p,19)})}a.keys=function(){return Object.keys(r)},a.id=59168,u.exports=a},83447:function(u,t,e){"use strict";var r;e.r(t),e.d(t,{demos:function(){return C}});var a=e(90228),o=e.n(a),v=e(87999),p=e.n(v),s=e(75271),j=e(44684),y=e(25144),h=e(85607),g=e(59806),C={"selectcard-demo-demos":{component:s.memo(s.lazy(function(){return e.e(1199).then(e.bind(e,94609))})),asset:{type:"BLOCK",id:"selectcard-demo-demos",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(5290).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.68"}},entry:"index.tsx"},context:{"@yuntijs/ui":y},renderOpts:{compile:function(){var i=p()(o()().mark(function m(){var l,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7423).then(e.bind(e,7423));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,c));case 3:case"end":return n.stop()}},m)}));function d(){return i.apply(this,arguments)}return d}()}},"selectcard-demo-selectwithimg":{component:s.memo(s.lazy(function(){return e.e(1199).then(e.bind(e,26517))})),asset:{type:"BLOCK",id:"selectcard-demo-selectwithimg",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(77305).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.68"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":h,"@yuntijs/ui":y,react:r||(r=e.t(s,2))},renderOpts:{compile:function(){var i=p()(o()().mark(function m(){var l,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7423).then(e.bind(e,7423));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,c));case 3:case"end":return n.stop()}},m)}));function d(){return i.apply(this,arguments)}return d}()}},"selectcard-demo-selectmultiple":{component:s.memo(s.lazy(function(){return e.e(1199).then(e.bind(e,25658))})),asset:{type:"BLOCK",id:"selectcard-demo-selectmultiple",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(83279).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.68"}},entry:"index.tsx"},context:{"@yuntijs/ui":y},renderOpts:{compile:function(){var i=p()(o()().mark(function m(){var l,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7423).then(e.bind(e,7423));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,c));case 3:case"end":return n.stop()}},m)}));function d(){return i.apply(this,arguments)}return d}()}},"selectcard-demo-playground":{component:s.memo(s.lazy(function(){return e.e(1199).then(e.bind(e,40479))})),asset:{type:"BLOCK",id:"selectcard-demo-playground",refAtomIds:["SelectCard"],dependencies:{"index.tsx":{type:"FILE",value:e(9417).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.68"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@lobehub/ui":g,"@yuntijs/ui":y,react:r||(r=e.t(s,2))},renderOpts:{compile:function(){var i=p()(o()().mark(function m(){var l,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7423).then(e.bind(e,7423));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,c));case 3:case"end":return n.stop()}},m)}));function d(){return i.apply(this,arguments)}return d}()}}}},35510:function(u,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return a}});var r=e(44684);const a=[{value:"A card display select, support multiple select and ",paraId:0},{value:"optionRender",paraId:0},{value:".",paraId:0}]},9417:function(u,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
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
`},83279:function(u,t){"use strict";t.Z=`import { SelectCard } from '@yuntijs/ui';

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
`},77305:function(u,t){"use strict";t.Z=`import { AntDesignOutlined } from '@ant-design/icons';
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
`},5290:function(u,t){"use strict";t.Z=`import { SelectCard } from '@yuntijs/ui';

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
