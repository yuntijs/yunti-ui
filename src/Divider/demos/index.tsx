import { Divider } from '@yuntijs/ui';

export default () => {
  return (
    <div style={{ width: '100%' }}>
      <div>
        <Divider mode="line" type="horizontal" />
      </div>
      <div>
        分割线左侧
        <Divider mode="line" type="vertical" />
        分割线右侧
      </div>

      <div>
        <Divider
          content="YuntiUI"
          dashed={true}
          defaultOpen={true}
          iconPlacement="left"
          mode="expanded"
          orientation="left"
          orientationMargin={0}
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
          orientation="left"
          orientationMargin={0}
        >
          YuntiUI
        </Divider>
      </div>
    </div>
  );
};
