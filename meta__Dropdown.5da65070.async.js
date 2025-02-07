"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[49327],{22329:function(i,t,n){n.r(t),n.d(t,{demos:function(){return x}});var s=n(90228),r=n.n(s),f=n(87999),m=n.n(f),a=n(75271),y=n(86215),c=n(71983),g=n(63651),x={"dropdown-demo-demos":{component:a.memo(a.lazy(function(){return n.e(98568).then(n.bind(n,2945))})),asset:{type:"BLOCK",id:"dropdown-demo-demos",refAtomIds:["Dropdown"],dependencies:{"index.tsx":{type:"FILE",value:n(22898).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.100"}},entry:"index.tsx"},context:{"@ant-design/icons":y,"@yuntijs/ui":c},renderOpts:{compile:function(){var u=m()(r()().mark(function d(){var o,p=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,p));case 3:case"end":return e.stop()}},d)}));function l(){return u.apply(this,arguments)}return l}()}},"dropdown-demo-dropdownrender":{component:a.memo(a.lazy(function(){return n.e(98568).then(n.bind(n,6325))})),asset:{type:"BLOCK",id:"dropdown-demo-dropdownrender",refAtomIds:["Dropdown"],dependencies:{"index.tsx":{type:"FILE",value:n(8066).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.100"},antd:{type:"NPM",value:"5.23.0"}},entry:"index.tsx"},context:{"@ant-design/icons":y,"@yuntijs/ui":c,antd:g},renderOpts:{compile:function(){var u=m()(r()().mark(function d(){var o,p=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(74807).then(n.bind(n,74807));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,p));case 3:case"end":return e.stop()}},d)}));function l(){return u.apply(this,arguments)}return l}()}}}},82094:function(i,t,n){n.r(t),n.d(t,{texts:function(){return s}});const s=[{value:"based on antd ",paraId:0,tocIndex:0},{value:"Dropdown",paraId:0,tocIndex:0},{value:" component.",paraId:0,tocIndex:0},{value:`import { DownOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Flex, Typography } from '@yuntijs/ui';
import type { MenuProps } from '@yuntijs/ui';

const { Text } = Typography;

export default () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <a href="https://botnow.cn" rel="noopener noreferrer" target="_blank">
          Botnow
        </a>
      ),
      key: 'botnow',
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      menuExtra={{
        divider: true,
        content: (
          <Text style={{ fontSize: 12 }} type="secondary">
            \u5DF2\u53D1\u5E03\u5E73\u53F0
          </Text>
        ),
      }}
    >
      <Button icon={<DownOutlined />} iconPosition="end">
        <Flex align="center" gap="small">
          <Avatar size={16} />
          <span>Botnow</span>
        </Flex>
      </Button>
    </Dropdown>
  );
};
`,paraId:1,tocIndex:1},{value:"dropdownRender",paraId:2}]},8066:function(i,t){t.Z=`import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Flex, Typography } from '@yuntijs/ui';
import type { MenuProps } from '@yuntijs/ui';
import { Divider } from 'antd';

const { Text } = Typography;

export default () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <a href="https://botnow.cn" rel="noopener noreferrer" target="_blank">
          <Flex align="center" gap="small">
            <Avatar size={16} />
            <span>Botnow</span>
          </Flex>
        </a>
      ),
      key: 'botnow',
    },
    {
      label: (
        <a href="https://lingwu.cn" rel="noopener noreferrer" target="_blank">
          <Flex align="center" gap="small">
            <Avatar size={16} />
            <span>\u7075\u5C0F\u609F</span>
          </Flex>
        </a>
      ),
      key: 'lingwu',
    },
  ];

  return (
    <Dropdown
      dropdownRender={menu => (
        <Flex vertical>
          <Text style={{ fontSize: 12, padding: '10px 16px 4px' }} type="secondary">
            \u5DF2\u53D1\u5E03\u5E73\u53F0
          </Text>
          <Divider style={{ margin: 0 }} />
          {menu}
          <Divider style={{ margin: 0 }} />
          <Flex align="center" justify="center" style={{ fontSize: 12, padding: '8px 16px' }}>
            <Button icon={<PlusOutlined />} type="primary">
              \u6DFB\u52A0
            </Button>
          </Flex>
        </Flex>
      )}
      menu={{ items }}
    >
      <Button icon={<DownOutlined />} iconPosition="end">
        <Flex align="center" gap="small">
          <Avatar size={16} />
          <span>Botnow</span>
        </Flex>
      </Button>
    </Dropdown>
  );
};
`},22898:function(i,t){t.Z=`import { DownOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Flex, Typography } from '@yuntijs/ui';
import type { MenuProps } from '@yuntijs/ui';

const { Text } = Typography;

export default () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <a href="https://botnow.cn" rel="noopener noreferrer" target="_blank">
          <Flex align="center" gap="small">
            <Avatar size={16} />
            <span>Botnow</span>
          </Flex>
        </a>
      ),
      key: 'botnow',
    },
    {
      label: (
        <a href="https://lingwu.cn" rel="noopener noreferrer" target="_blank">
          <Flex align="center" gap="small">
            <Avatar size={16} />
            <span>\u7075\u5C0F\u609F</span>
          </Flex>
        </a>
      ),
      key: 'lingwu',
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      menuExtra={{
        divider: true,
        content: (
          <Text style={{ fontSize: 12 }} type="secondary">
            \u5DF2\u53D1\u5E03\u5E73\u53F0
          </Text>
        ),
      }}
    >
      <Button icon={<DownOutlined />} iconPosition="end">
        <Flex align="center" gap="small">
          <Avatar size={16} />
          <span>Botnow</span>
        </Flex>
      </Button>
    </Dropdown>
  );
};
`}}]);
