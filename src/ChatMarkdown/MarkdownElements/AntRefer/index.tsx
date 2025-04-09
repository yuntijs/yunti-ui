import Component from './Component';
import rehypePlugin from './rehypePlugin';
import { remarkCaptureRefer } from './remarkPlugin';

const AntReferElement = {
  Component,
  rehypePlugin,
  remarkPlugins: remarkCaptureRefer,
  tag: 'refer',
};

export default AntReferElement;
