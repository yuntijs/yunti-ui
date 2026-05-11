import { Divider } from '@yuntijs/ui';

export default () => {
  return (
    <div style={{ width: '100%' }}>
      <div>
        <Divider mode="line" orientation="horizontal" />
      </div>
      <div>
        分割线左侧
        <Divider mode="line" orientation="vertical" />
        分割线右侧
      </div>

      <div>
        <Divider
          content="YuntiUI"
          dashed={true}
          defaultOpen={true}
          iconPlacement="left"
          mode="expanded"
          styles={{ content: { margin: 0 } }}
          titlePlacement="start"
        >
          <div>
            The YuntiUI components are inspired by LobeUI and developed based on Antd components,
            fully compatible with Antd components, and it is recommended to use antd-style as the
            default css-in-js styling solution.
          </div>
        </Divider>
      </div>

      <div>
        <Divider
          dashed={true}
          defaultOpen={true}
          iconPlacement="left"
          mode="default"
          styles={{ content: { margin: 0 } }}
          titlePlacement="start"
        >
          YuntiUI
        </Divider>
      </div>
    </div>
  );
};
