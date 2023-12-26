import { defineConfig } from 'father';

export default defineConfig({
  esm: { output: 'es' },
  umd: {
    output: 'umd',
    name: 'YuntiUI',
    entry: {
      "src/index": {
        name: "YuntiUI",
      },
    },
    sourcemap: true,
    externals: {
      'react': 'var window.React',
      'antd': 'var window.antd',
      "react-dom": "var window.ReactDOM",
      "prop-types": "var window.PropTypes",
    },
  },
});
