import { Card } from '@yuntijs/ui';

export default () => {
  const content =
    'The YuntiUI components are inspired by LobeUI and developed based on Antd components, fully compatible with Antd components, and it is recommended to use antd-style as the default css-in-js styling solution. ';
  const gridStyle: React.CSSProperties = {
    width: '50%',
    textAlign: 'center',
  };
  return (
    <Card title="YuntiUI Card.Grid">
      <Card.Grid hoverable={false} style={gridStyle}>
        {content}
      </Card.Grid>
      <Card.Grid style={gridStyle}>{content}</Card.Grid>
      <Card.Grid style={gridStyle}>{content}</Card.Grid>
    </Card>
  );
};
