(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[69879],{1234:function(s,u,n){var e={"./ar.json":[18444,18444],"./be.json":[5401,5401],"./cs.json":[24815,24815],"./de.json":[11976,11976],"./en.json":[28443,28443],"./es.json":[74957,74957],"./fa.json":[45263,45263],"./fi.json":[94234,94234],"./fr.json":[96792,96792],"./hi.json":[80489,80489],"./it.json":[59688,59688],"./ja.json":[98465,98465],"./ko.json":[7265,7265],"./nl.json":[67781,67781],"./pl.json":[29630,29630],"./pt.json":[15896,15896],"./ru.json":[59787,59787],"./sa.json":[84757,84757],"./tr.json":[22794,22794],"./uk.json":[54429,54429],"./vi.json":[97655,97655],"./zh.json":[50622,50622]};function o(t){if(!n.o(e,t))return Promise.resolve().then(function(){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r});var i=e[t],l=i[0];return n.e(i[1]).then(function(){return n.t(l,19)})}o.keys=function(){return Object.keys(e)},o.id=1234,s.exports=o},4295:function(s,u,n){"use strict";var e;n.r(u),n.d(u,{demos:function(){return p}});var o=n(90228),t=n.n(o),i=n(87999),l=n.n(i),r=n(75271),E=n(19016),m=n(71983),h=n(84522),F=n(59529),p={"editablemessage-demo-demos":{component:r.memo(r.lazy(function(){return n.e(82993).then(n.bind(n,9268))})),asset:{type:"BLOCK",id:"editablemessage-demo-demos",refAtomIds:["EditableMessage"],dependencies:{"index.tsx":{type:"FILE",value:n(95925).Z},"@lobehub/ui":{type:"NPM",value:"1.164.2"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.99"},leva:{type:"NPM",value:"0.9.35"},react:{type:"NPM",value:"18.3.1"},"./data.ts":{type:"FILE",value:n(40113).Z}},entry:"index.tsx"},context:{"@lobehub/ui":E,"@yuntijs/ui":m,leva:h,react:e||(e=n.t(r,2)),"/home/runner/work/yunti-ui/yunti-ui/src/EditableMessage/demos/data.ts":F},renderOpts:{compile:function(){var d=l()(t()().mark(function f(){var c,B=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(74807).then(n.bind(n,74807));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,B));case 3:case"end":return a.stop()}},f)}));function C(){return d.apply(this,arguments)}return C}()}}}},59529:function(s,u,n){"use strict";n.r(u),n.d(u,{code:function(){return l},content:function(){return e},content2:function(){return o},content3:function(){return t},content4:function(){return i}});var e=`# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5

The point of reference-style links is not that they\u2019re easier to write. The point is that with reference-style links, your document source is vastly more readable. Compare the above examples: using reference-style links, the paragraph itself is only 81 characters long; with inline-style links, it\u2019s 176 characters; and as raw \`HTML\`, it\u2019s 234 characters. In the raw \`HTML\`, there\u2019s more markup than there is text.

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

an example | *an example* | **an example**

---

![](https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp)

![](https://gw.alipayobjects.com/zos/kitchen/8Ab%24hLJ5ur/cover.webp)

<video
  poster="https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp"
  src="https://github.com/lobehub/lobe-chat/assets/28616219/f29475a3-f346-4196-a435-41a6373ab9e2"/>

---

1. Bird
1. McHale
1. Parish
    1. Bird
    1. McHale
        1. Parish

---

- Red
- Green
- Blue
    - Red
    - Green
        - Blue

---

This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>


| title | title | title |
| --- | --- | --- |
| content | content | content |


\`\`\`bash
$ pnpm install
\`\`\`


\`\`\`javascript
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useDropNodeOnCanvas } from './useDropNodeOnCanvas';
\`\`\`

---

\u4EE5\u4E0B\u662F\u4E00\u6BB5Markdown\u683C\u5F0F\u7684LaTeX\u6570\u5B66\u516C\u5F0F\uFF1A

\u6211\u662F\u4E00\u4E2A\u884C\u5185\u516C\u5F0F\uFF1A$E=mc^2$

\u6211\u662F\u4E00\u4E2A\u72EC\u7ACB\u516C\u5F0F\uFF1A
$$
\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\ldots + x_n
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u5206\u5F0F\u7684\u516C\u5F0F\uFF1A
$$
\\frac{{n!}}{{k!(n-k)!}} = \\binom{n}{k}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u4E0A\u4E0B\u6807\u7684\u516C\u5F0F\uFF1A
$$
x^{2} + y^{2} = r^{2}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u79EF\u5206\u7B26\u53F7\u7684\u516C\u5F0F\uFF1A
$$
\\int_{a}^{b} f(x) \\, dx
$$

---

\u6211\u662F\u4E00\u4E2A\u5D4C\u5957\u6D4B\u8BD5\uFF1A
\`\`\`
$1
\`\`\`
`,o=`# Customize Markdown Components
#### Customize Anchor Behavior
This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>

<think>\u8FD9\u4E2A\u8BF7\u6C42\u9002\u5408\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684SVG\u5361\u7247artifact</think>

#### Customize Hr

---

#### Customize Image Display

![](https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp)

![](https://chat.dev.botnow.cn/v1/gpts/images/5f76e131-bcf3-4a92-878f-709b097c12b9)
`,t=`<think>\u8FD9\u4E2A\u8BF7\u6C42\u9002\u5408\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684SVG\u5361\u7247artifact</think>

\u8FD9\u662F\u6211\u4E3A"\u7761\u89C9"\u8FD9\u4E2A\u8BCD\u521B\u4F5C\u7684\u65B0\u89E3\u91CA\u5361\u7247\u3002`,i=`<think>

\u55EF\uFF0C\u7528\u6237\u53D1\u6765\u4E86\u4E00\u4E2A\u67E5\u8BE2\uFF0C\u5185\u5BB9\u662F\u201C3+3=?\u201D\u3002\u770B\u8D77\u6765\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u6570\u5B66\u95EE\u9898\u3002\u9996\u5148\uFF0C\u6211\u9700\u8981\u786E\u8BA4\u7528\u6237\u7684\u9700\u6C42\u662F\u4EC0\u4E48\u3002\u4ED6\u4EEC\u53EF\u80FD\u662F\u5728\u6D4B\u8BD5\u6211\u7684\u8BA1\u7B97\u80FD\u529B\uFF0C\u6216\u8005\u60F3\u786E\u8BA4\u4E00\u4E2A\u7B80\u5355\u7684\u52A0\u6CD5\u662F\u5426\u6B63\u786E\u3002

\u8003\u8651\u5230\u7528\u6237\u4E4B\u524D\u63D0\u5230\u8FC7\u89E3\u6790\u6587\u4EF6\uFF0C\u53EF\u80FD\u4ED6\u4EEC\u5E0C\u671B\u6211\u80FD\u591F\u5904\u7406\u6587\u4EF6\u76F8\u5173\u7684\u95EE\u9898\u3002\u4F46\u8FD9\u6B21\u7684\u95EE\u9898\u660E\u663E\u662F\u6570\u5B66\u9898\uFF0C\u6240\u4EE5\u53EF\u80FD\u4ED6\u4EEC\u60F3\u5207\u6362\u5230\u53E6\u4E00\u4E2A\u4E3B\u9898\u3002\u4E5F\u6709\u53EF\u80FD\u662F\u4ED6\u4EEC\u60F3\u770B\u770B\u6211\u662F\u5426\u80FD\u591F\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u7684\u95EE\u9898\uFF0C\u5305\u62EC\u7B80\u5355\u7684\u8BA1\u7B97\u3002

\u63A5\u4E0B\u6765\uFF0C\u6211\u9700\u8981\u8BC4\u4F30\u6211\u7684\u80FD\u529B\u8303\u56F4\u3002\u4F5C\u4E3A\u4E00\u4E2A\u901A\u7528\u7684AI\uFF0C\u6211\u80FD\u591F\u5904\u7406\u57FA\u672C\u7684\u7B97\u672F\u8FD0\u7B97\uFF0C\u5305\u62EC\u52A0\u6CD5\u3001\u51CF\u6CD5\u3001\u4E58\u6CD5\u548C\u9664\u6CD5\u3002\u6240\u4EE5\uFF0C3+3=6\u5E94\u8BE5\u662F\u6B63\u786E\u7684\u7B54\u6848\u3002\u4E0D\u8FC7\uFF0C\u6211\u5E94\u8BE5\u786E\u4FDD\u6211\u7684\u56DE\u7B54\u51C6\u786E\u65E0\u8BEF\uFF0C\u907F\u514D\u4EFB\u4F55\u8BA1\u7B97\u9519\u8BEF\u3002

\u53E6\u5916\uFF0C\u7528\u6237\u53EF\u80FD\u662F\u5728\u6D4B\u8BD5\u6211\u7684\u53CD\u5E94\u901F\u5EA6\u548C\u51C6\u786E\u6027\u3002\u6240\u4EE5\uFF0C\u6211\u5E94\u8BE5\u5FEB\u901F\u4E14\u51C6\u786E\u5730\u7ED9\u51FA\u7B54\u6848\uFF0C\u540C\u65F6\u4FDD\u6301\u53CB\u597D\u548C\u4E13\u4E1A\u7684\u8BED\u6C14\u3002\u8FD9\u6837\u53EF\u4EE5\u63D0\u5347\u7528\u6237\u4F53\u9A8C\uFF0C\u8BA9\u4ED6\u4EEC\u611F\u5230\u6EE1\u610F\u3002

\u6700\u540E\uFF0C\u8003\u8651\u5230\u7528\u6237\u53EF\u80FD\u540E\u7EED\u8FD8\u4F1A\u95EE\u66F4\u591A\u95EE\u9898\uFF0C\u6211\u5E94\u8BE5\u51C6\u5907\u597D\u5904\u7406\u5404\u79CD\u7C7B\u578B\u7684\u95EE\u9898\uFF0C\u5305\u62EC\u590D\u6742\u7684\u6570\u5B66\u9898\u3001\u7F16\u7A0B\u95EE\u9898\u3001\u6570\u636E\u5206\u6790\u7B49\uFF0C\u4EE5\u5C55\u793A\u6211\u7684\u5E7F\u6CDB\u77E5\u8BC6\u548C\u80FD\u529B\u3002

</think>

3 + 3 = 6`,l=`

#### transformerNotationDiff

\`\`\`ts
export function foo() {
  console.log('hewwo') // [!code --]
  console.log('hello') // [!code ++]
}
\`\`\`

#### transformerNotationHighlight

\`\`\`ts
export function foo() {
  console.log('Highlighted') // [!code highlight]
}
\`\`\`

#### transformerNotationWordHighlight

\`\`\`ts
export function foo() { // [!code word:Hello]
  const msg = 'Hello World'
  console.log(msg) // \u6253\u5370 Hello World
}
\`\`\`

#### transformerNotationFocus

\`\`\`ts
export function foo() {
  console.log('Focused') // [!code focus]
}
\`\`\`

#### transformerNotationErrorLevel

\`\`\`ts
export function foo() {
  console.error('Error') // [!code error]
  console.warn('Warning') // [!code warning]
}
\`\`\`
`},69491:function(s,u,n){"use strict";n.r(u),n.d(u,{texts:function(){return e}});const e=[]},40113:function(s,u){"use strict";u.Z=`export const content = \`# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5

The point of reference-style links is not that they\u2019re easier to write. The point is that with reference-style links, your document source is vastly more readable. Compare the above examples: using reference-style links, the paragraph itself is only 81 characters long; with inline-style links, it\u2019s 176 characters; and as raw \\\`HTML\\\`, it\u2019s 234 characters. In the raw \\\`HTML\\\`, there\u2019s more markup than there is text.

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

an example | *an example* | **an example**

---

![](https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp)

![](https://gw.alipayobjects.com/zos/kitchen/8Ab%24hLJ5ur/cover.webp)

<video
  poster="https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp"
  src="https://github.com/lobehub/lobe-chat/assets/28616219/f29475a3-f346-4196-a435-41a6373ab9e2"/>

---

1. Bird
1. McHale
1. Parish
    1. Bird
    1. McHale
        1. Parish

---

- Red
- Green
- Blue
    - Red
    - Green
        - Blue

---

This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>


| title | title | title |
| --- | --- | --- |
| content | content | content |


\\\`\\\`\\\`bash
$ pnpm install
\\\`\\\`\\\`


\\\`\\\`\\\`javascript
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useDropNodeOnCanvas } from './useDropNodeOnCanvas';
\\\`\\\`\\\`

---

\u4EE5\u4E0B\u662F\u4E00\u6BB5Markdown\u683C\u5F0F\u7684LaTeX\u6570\u5B66\u516C\u5F0F\uFF1A

\u6211\u662F\u4E00\u4E2A\u884C\u5185\u516C\u5F0F\uFF1A$E=mc^2$

\u6211\u662F\u4E00\u4E2A\u72EC\u7ACB\u516C\u5F0F\uFF1A
$$
\\\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\\\ldots + x_n
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u5206\u5F0F\u7684\u516C\u5F0F\uFF1A
$$
\\\\frac{{n!}}{{k!(n-k)!}} = \\\\binom{n}{k}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u4E0A\u4E0B\u6807\u7684\u516C\u5F0F\uFF1A
$$
x^{2} + y^{2} = r^{2}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u79EF\u5206\u7B26\u53F7\u7684\u516C\u5F0F\uFF1A
$$
\\\\int_{a}^{b} f(x) \\\\, dx
$$

---

\u6211\u662F\u4E00\u4E2A\u5D4C\u5957\u6D4B\u8BD5\uFF1A
\\\`\\\`\\\`
$1
\\\`\\\`\\\`
\`;

export const content2 = \`# Customize Markdown Components
#### Customize Anchor Behavior
This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>

<think>\u8FD9\u4E2A\u8BF7\u6C42\u9002\u5408\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684SVG\u5361\u7247artifact</think>

#### Customize Hr

---

#### Customize Image Display

![](https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp)

![](https://chat.dev.botnow.cn/v1/gpts/images/5f76e131-bcf3-4a92-878f-709b097c12b9)
\`;

export const content3 = \`<think>\u8FD9\u4E2A\u8BF7\u6C42\u9002\u5408\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684SVG\u5361\u7247artifact</think>

\u8FD9\u662F\u6211\u4E3A"\u7761\u89C9"\u8FD9\u4E2A\u8BCD\u521B\u4F5C\u7684\u65B0\u89E3\u91CA\u5361\u7247\u3002\`;

export const content4 = \`<think>

\u55EF\uFF0C\u7528\u6237\u53D1\u6765\u4E86\u4E00\u4E2A\u67E5\u8BE2\uFF0C\u5185\u5BB9\u662F\u201C3+3=?\u201D\u3002\u770B\u8D77\u6765\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u6570\u5B66\u95EE\u9898\u3002\u9996\u5148\uFF0C\u6211\u9700\u8981\u786E\u8BA4\u7528\u6237\u7684\u9700\u6C42\u662F\u4EC0\u4E48\u3002\u4ED6\u4EEC\u53EF\u80FD\u662F\u5728\u6D4B\u8BD5\u6211\u7684\u8BA1\u7B97\u80FD\u529B\uFF0C\u6216\u8005\u60F3\u786E\u8BA4\u4E00\u4E2A\u7B80\u5355\u7684\u52A0\u6CD5\u662F\u5426\u6B63\u786E\u3002

\u8003\u8651\u5230\u7528\u6237\u4E4B\u524D\u63D0\u5230\u8FC7\u89E3\u6790\u6587\u4EF6\uFF0C\u53EF\u80FD\u4ED6\u4EEC\u5E0C\u671B\u6211\u80FD\u591F\u5904\u7406\u6587\u4EF6\u76F8\u5173\u7684\u95EE\u9898\u3002\u4F46\u8FD9\u6B21\u7684\u95EE\u9898\u660E\u663E\u662F\u6570\u5B66\u9898\uFF0C\u6240\u4EE5\u53EF\u80FD\u4ED6\u4EEC\u60F3\u5207\u6362\u5230\u53E6\u4E00\u4E2A\u4E3B\u9898\u3002\u4E5F\u6709\u53EF\u80FD\u662F\u4ED6\u4EEC\u60F3\u770B\u770B\u6211\u662F\u5426\u80FD\u591F\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u7684\u95EE\u9898\uFF0C\u5305\u62EC\u7B80\u5355\u7684\u8BA1\u7B97\u3002

\u63A5\u4E0B\u6765\uFF0C\u6211\u9700\u8981\u8BC4\u4F30\u6211\u7684\u80FD\u529B\u8303\u56F4\u3002\u4F5C\u4E3A\u4E00\u4E2A\u901A\u7528\u7684AI\uFF0C\u6211\u80FD\u591F\u5904\u7406\u57FA\u672C\u7684\u7B97\u672F\u8FD0\u7B97\uFF0C\u5305\u62EC\u52A0\u6CD5\u3001\u51CF\u6CD5\u3001\u4E58\u6CD5\u548C\u9664\u6CD5\u3002\u6240\u4EE5\uFF0C3+3=6\u5E94\u8BE5\u662F\u6B63\u786E\u7684\u7B54\u6848\u3002\u4E0D\u8FC7\uFF0C\u6211\u5E94\u8BE5\u786E\u4FDD\u6211\u7684\u56DE\u7B54\u51C6\u786E\u65E0\u8BEF\uFF0C\u907F\u514D\u4EFB\u4F55\u8BA1\u7B97\u9519\u8BEF\u3002

\u53E6\u5916\uFF0C\u7528\u6237\u53EF\u80FD\u662F\u5728\u6D4B\u8BD5\u6211\u7684\u53CD\u5E94\u901F\u5EA6\u548C\u51C6\u786E\u6027\u3002\u6240\u4EE5\uFF0C\u6211\u5E94\u8BE5\u5FEB\u901F\u4E14\u51C6\u786E\u5730\u7ED9\u51FA\u7B54\u6848\uFF0C\u540C\u65F6\u4FDD\u6301\u53CB\u597D\u548C\u4E13\u4E1A\u7684\u8BED\u6C14\u3002\u8FD9\u6837\u53EF\u4EE5\u63D0\u5347\u7528\u6237\u4F53\u9A8C\uFF0C\u8BA9\u4ED6\u4EEC\u611F\u5230\u6EE1\u610F\u3002

\u6700\u540E\uFF0C\u8003\u8651\u5230\u7528\u6237\u53EF\u80FD\u540E\u7EED\u8FD8\u4F1A\u95EE\u66F4\u591A\u95EE\u9898\uFF0C\u6211\u5E94\u8BE5\u51C6\u5907\u597D\u5904\u7406\u5404\u79CD\u7C7B\u578B\u7684\u95EE\u9898\uFF0C\u5305\u62EC\u590D\u6742\u7684\u6570\u5B66\u9898\u3001\u7F16\u7A0B\u95EE\u9898\u3001\u6570\u636E\u5206\u6790\u7B49\uFF0C\u4EE5\u5C55\u793A\u6211\u7684\u5E7F\u6CDB\u77E5\u8BC6\u548C\u80FD\u529B\u3002

</think>

3 + 3 = 6\`;

export const code = \`

#### transformerNotationDiff

\\\`\\\`\\\`ts
export function foo() {
  console.log('hewwo') // [!code --]
  console.log('hello') // [!code ++]
}
\\\`\\\`\\\`

#### transformerNotationHighlight

\\\`\\\`\\\`ts
export function foo() {
  console.log('Highlighted') // [!code highlight]
}
\\\`\\\`\\\`

#### transformerNotationWordHighlight

\\\`\\\`\\\`ts
export function foo() { // [!code word:Hello]
  const msg = 'Hello World'
  console.log(msg) // \u6253\u5370 Hello World
}
\\\`\\\`\\\`

#### transformerNotationFocus

\\\`\\\`\\\`ts
export function foo() {
  console.log('Focused') // [!code focus]
}
\\\`\\\`\\\`

#### transformerNotationErrorLevel

\\\`\\\`\\\`ts
export function foo() {
  console.error('Error') // [!code error]
  console.warn('Warning') // [!code warning]
}
\\\`\\\`\\\`
\`;
`},95925:function(s,u){"use strict";u.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { EditableMessage } from '@yuntijs/ui';
import { button } from 'leva';
import { useState } from 'react';

import { content2 } from './data';

export default () => {
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEdit] = useState(false);
  const store = useCreateStore();

  useControls(
    {
      editing: button(() => {
        setEdit(true);
      }),
      openModal: button(() => {
        setOpenModal(true);
      }),
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <EditableMessage
        editing={editing}
        onEditingChange={setEdit}
        onOpenChange={setOpenModal}
        openModal={openModal}
        value={content2}
      />
    </StoryBook>
  );
};
`}}]);
