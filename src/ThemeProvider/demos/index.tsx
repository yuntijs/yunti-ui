import { Alert, Button, Card, SelectCard, ThemeProvider, useTheme } from '@yuntijs/ui';
import { Flex, Tag } from 'antd';

// One brand seed — antd's defaultAlgorithm / darkAlgorithm will derive a full
// primary palette from it for both light and dark mode. If you want different
// brand colours per mode, pass `theme` as a function and branch on `appearance`.
const BRAND = '#3B82F6';

const PRESET_COLORS = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

const Showcase = () => (
  <Flex gap={16} vertical>
    <Card size="small" title="Button — exercises colorPrimary / Hover / Active / Error">
      <Flex gap={12} wrap>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
        <Button danger type="primary">
          Danger Primary
        </Button>
        <Button danger>Danger Default</Button>
        <Button disabled type="primary">
          Disabled
        </Button>
      </Flex>
    </Card>

    <Card size="small" title="Tag — preset colors (lobehub's algorithm used to recolor these)">
      <Flex gap={8} wrap>
        {PRESET_COLORS.map(c => (
          <Tag color={c} key={c}>
            {c}
          </Tag>
        ))}
      </Flex>
    </Card>

    <Card size="small" title="Tag — status colors (success / processing / warning / error)">
      <Flex gap={8} wrap>
        <Tag color="success">success</Tag>
        <Tag color="processing">processing</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="error">error</Tag>
        <Tag color="default">default</Tag>
      </Flex>
    </Card>

    <Card size="small" title="Alert — exercises colorInfo / Success / Warning / Error">
      <Flex gap={8} vertical>
        <Alert showIcon title="info alert" type="info" />
        <Alert showIcon title="success alert" type="success" />
        <Alert showIcon title="warning alert" type="warning" />
        <Alert showIcon title="error alert" type="error" />
      </Flex>
    </Card>

    <Card
      size="small"
      title="SelectCard — custom yunti-ui component reading token.colorPrimary directly"
    >
      <SelectCard
        defaultValue="a"
        options={[
          { value: 'a', label: 'Option A', description: 'Selected border picks up colorPrimary' },
          { value: 'b', label: 'Option B', description: 'Click to select' },
          { value: 'c', label: 'Option C', description: 'Click to select' },
        ]}
      />
    </Card>
  </Flex>
);

export default () => {
  // Inherit the docs site's current light/dark mode so this demo flips with the
  // page theme toggle. In your app you usually drive `appearance` from your own
  // store/cookie instead, or use `themeMode="auto"` to follow the OS.
  const { appearance } = useTheme();

  return (
    <ThemeProvider
      appearance={appearance}
      theme={{
        token: {
          colorPrimary: BRAND,
          colorInfo: BRAND,
          colorLink: BRAND,
        },
      }}
    >
      <Showcase />
    </ThemeProvider>
  );
};
