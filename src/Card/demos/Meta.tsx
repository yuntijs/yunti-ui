import { Card, Logo } from '@yuntijs/ui';

export default () => {
  const description =
    'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution. ';

  return (
    <Card>
      <Card.Meta avatar={<Logo />} description={description} title="YuntiUI Card.Meta" />
    </Card>
  );
};
