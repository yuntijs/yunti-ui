(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[70252],{1234:function(l,t,n){var o={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function r(a){if(!n.o(o,a))return Promise.resolve().then(function(){var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s});var i=o[a],d=i[0];return n.e(i[1]).then(function(){return n.t(d,19)})}r.keys=function(){return Object.keys(o)},r.id=1234,l.exports=r},12934:function(l,t,n){"use strict";var o;n.r(t),n.d(t,{demos:function(){return g}});var r=n(90228),a=n.n(r),i=n(87999),d=n.n(i),s=n(75271),y=n(71983),f=n(6997),h=n(87780),I=n(63651),g={"src-form-demo-demos":{component:s.memo(s.lazy(function(){return Promise.all([n.e(79233),n.e(63626),n.e(50778),n.e(35787),n.e(59850),n.e(91867),n.e(26577),n.e(52433)]).then(n.bind(n,22162))})),asset:{type:"BLOCK",id:"src-form-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(421).Z},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.91"},"lucide-react":{type:"NPM",value:"0.417.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@yuntijs/ui":y,"lucide-react":f,react:o||(o=n.t(s,2))},renderOpts:{compile:function(){var m=d()(a()().mark(function c(){var u,v=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,v));case 3:case"end":return e.stop()}},c)}));function p(){return m.apply(this,arguments)}return p}()}},"src-form-demo-playground":{component:s.memo(s.lazy(function(){return Promise.all([n.e(79233),n.e(63626),n.e(50778),n.e(35787),n.e(59850),n.e(91867),n.e(26577),n.e(52433)]).then(n.bind(n,33225))})),asset:{type:"BLOCK",id:"src-form-demo-playground",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(72008).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.91"},antd:{type:"NPM",value:"5.23.0"},"lucide-react":{type:"NPM",value:"0.417.0"}},entry:"index.tsx"},context:{"@lobehub/ui":h,"@yuntijs/ui":y,antd:I,"lucide-react":f},renderOpts:{compile:function(){var m=d()(a()().mark(function c(){var u,v=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,v));case 3:case"end":return e.stop()}},c)}));function p(){return m.apply(this,arguments)}return p}()}}}},27142:function(l,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});const o=[{value:"Based on ",paraId:0,tocIndex:0},{value:"antd form",paraId:0,tocIndex:0},{value:", add ",paraId:0,tocIndex:0},{value:"Form.CollapseList",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:"Form",paraId:1},{value:"see ",paraId:2,tocIndex:1},{value:"https://ant.design/components/form",paraId:2,tocIndex:1},{value:" .",paraId:2,tocIndex:1},{value:"Form.CollapseList",paraId:1},{value:`import { Form, Input } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';

const FormCollapseList = Form.CollapseList;
interface FieldType {
  outputs?: {
    key: string;
    value: string;
  }[];
}

export default () => {
  const outputs = [
    {
      key: 'class',
      value: 'claas1',
    },
    {
      key: 'namespace',
      value: 'ns1',
    },
  ];
  return (
    <Form
      onValuesChange={(_, values) => console.log('values =>', values)}
      style={{ width: '100%' }}
      variant="filled"
    >
      <FormCollapseList
        columns={[
          {
            label: '\u53D8\u91CF\u540D',
            name: 'key',
            render: () => <Input maxLength={30} placeholder="\u8F93\u5165\u53D8\u91CF\u540D" showCount />,
          },
          {
            label: '\u53D8\u91CF\u503C',
            name: 'value',
            render: () => <Input placeholder="\u8F93\u5165\u53D8\u91CF\u503C" style={{ width: 360 }} />,
            rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u53D8\u91CF\u503C' }],
          },
        ]}
        icon={VariableIcon}
        initialValue={outputs}
        name="outputs"
        title="\u8F93\u51FA\u53D8\u91CF"
        variant="block"
      />
    </Form>
  );
};
`,paraId:3,tocIndex:2},{value:"Form.CollapseList",paraId:1},{value:"Form",paraId:1},{value:"see ",paraId:4,tocIndex:6},{value:"https://ant.design/components/form#api",paraId:4,tocIndex:6},{value:"Form.CollapseList",paraId:1}]},72008:function(l,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { FormCollapseList, FormCollapseListProps, Input } from '@yuntijs/ui';
import { Form } from 'antd';
import { VariableIcon } from 'lucide-react';

export default () => {
  const store = useCreateStore();
  const control: FormCollapseListProps | any = useControls(
    {
      name: 'outputs',
      title: '\u8F93\u51FA\u53D8\u91CF',
      fieldRemoveButton: true,
      readOnly: false,
      defaultActive: true,
      disabled: false,
      addOneFiledDefault: true,
      disableRemoveWhenOneField: true,
      maxFileds: 10,
      empty: '\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0',
      variant: {
        options: ['default', 'block', 'ghost', 'pure'],
        value: 'default',
      },
    },
    { store }
  );
  return (
    <StoryBook levaStore={store} style={{ width: '100%' }}>
      <Form style={{ width: '100%', height: '100%' }}>
        <FormCollapseList
          columns={[
            {
              label: '\u53D8\u91CF\u540D',
              name: 'key',
              width: '40%',
              render: () => <Input maxLength={30} placeholder="\u8F93\u5165\u53D8\u91CF\u540D" showCount />,
            },
            {
              label: '\u53D8\u91CF\u503C',
              name: 'value',
              width: '45%',
              render: () => <Input placeholder="\u8F93\u5165\u53D8\u91CF\u503C" />,
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u53D8\u91CF\u503C' }],
            },
          ]}
          icon={VariableIcon}
          {...control}
        />
      </Form>
    </StoryBook>
  );
};
`},421:function(l,t){"use strict";t.Z=`import { Divider, Flex, Form, Highlighter, Input } from '@yuntijs/ui';
import { VariableIcon } from 'lucide-react';
import { useState } from 'react';

const FormCollapseList = Form.CollapseList;
interface FieldType {
  outputs?: {
    key: string;
    value: string;
  }[];
}

export default () => {
  const outputs = [
    {
      key: 'class',
      value: 'claas1',
    },
    {
      key: 'namespace',
      value: 'ns1',
    },
  ];

  const [values, setValues] = useState<FieldType>({ outputs });

  return (
    <Flex gap={6} style={{ width: '100%' }} vertical>
      <Form onValuesChange={(_, values) => setValues(values)} variant="filled">
        <FormCollapseList
          columns={[
            {
              dependencies: field => [['outputs', field.name, 'value']],
              label: '\u53D8\u91CF\u540D',
              name: 'key',
              render: () => <Input maxLength={30} placeholder="\u8F93\u5165\u53D8\u91CF\u540D" showCount />,
              rules: (_field, index) => [
                { whitespace: true, required: true, message: '\u8BF7\u8F93\u5165\u53D8\u91CF\u540D' },
                ({ getFieldValue }) => ({
                  validator(_rule, value) {
                    const vars: FieldType['outputs'] = getFieldValue('outputs');
                    if (vars?.some((v, vIndex) => vIndex !== index && v.key === value)) {
                      return Promise.reject(new Error('\u53D8\u91CF\u540D\u4E0D\u80FD\u91CD\u590D'));
                    }
                    return Promise.resolve();
                  },
                }),
              ],
            },
            {
              label: '\u53D8\u91CF\u503C',
              name: 'value',
              render: () => <Input placeholder="\u8F93\u5165\u53D8\u91CF\u503C" style={{ width: 360 }} />,
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u53D8\u91CF\u503C' }],
            },
          ]}
          icon={VariableIcon}
          initialValue={outputs}
          name="outputs"
          title="\u8F93\u51FA\u53D8\u91CF"
          variant="block"
        />
      </Form>
      <Divider
        content="Form value \u503C"
        dashed
        defaultOpen
        mode="expanded"
        orientation="left"
        orientationMargin={0}
      >
        <Highlighter language="json">{JSON.stringify(values, null, 2)}</Highlighter>
      </Divider>
    </Flex>
  );
};
`}}]);
