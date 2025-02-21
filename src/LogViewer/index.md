---
nav: Components
group: Data Display
title: LogViewer
---

React component that loads and views remote text in the browser lazily and efficiently. Logs can be loaded from static text, a URL, or a WebSocket and including ANSI highlighting. Based on [@melloware/react-logviewer
](https://github.com/melloware/react-logviewer)

## Usage

```jsx | pure
import { LogViewer } from '@yuntijs/ui';

const LogViewerDemo = () => {
  return (
    <LogViewer
      enableSearch
      extraLines={1}
      height={520}
      selectableLines
      url="https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log"
    />
  );
};

export default ProCardDemo;
```

### Demo

<code src="./demos/index.tsx"></code>

### Playground

<code src="./demos/Playground.tsx" noPadding></code>

## API

<API></API>
