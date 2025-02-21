import Component from './Component';
import rehypePlugin from './rehypePlugin';
import { remarkCaptureThink } from './remarkPlugin';

const AntThinkingElement = {
  Component,
  rehypePlugin,
  remarkPlugins: remarkCaptureThink,
  tag: 'think',
};

export default AntThinkingElement;
