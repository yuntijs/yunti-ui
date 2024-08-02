(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9879],{59168:function(i,e,n){var o={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function t(s){if(!n.o(o,s))return Promise.resolve().then(function(){var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l});var a=o[s],u=a[0];return n.e(a[1]).then(function(){return n.t(u,19)})}t.keys=function(){return Object.keys(o)},t.id=59168,i.exports=t},43394:function(i,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return m}});var o=n(90228),t=n.n(o),s=n(87999),a=n.n(s),u=n(75271),l=n(40909),m={"editablemessage-demo-demos":{component:u.memo(u.lazy(function(){return n.e(2993).then(n.bind(n,25029))})),asset:{type:"BLOCK",id:"editablemessage-demo-demos",refAtomIds:["EditableMessage"],dependencies:{"index.tsx":{type:"FILE",value:n(25767).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},"@yuntijs/ui":{type:"NPM",value:"1.0.0-beta.59"},leva:{type:"NPM",value:"0.9.35"},react:{type:"NPM",value:"18.3.1"},"./data.ts":{type:"FILE",value:n(35983).Z}},entry:"index.tsx"},context:{"@lobehub/ui":n(59806),"@yuntijs/ui":n(82426),leva:n(32313),react:n(75271),"./data.ts":n(59529)},renderOpts:{compile:function(){var d=a()(t()().mark(function p(){var c,f=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(9321).then(n.bind(n,19321));case 2:return r.abrupt("return",(c=r.sent).default.apply(c,f));case 3:case"end":return r.stop()}},p)}));function h(){return d.apply(this,arguments)}return h}()}}}},59529:function(i,e,n){"use strict";n.r(e),n.d(e,{code:function(){return s},content:function(){return o},content2:function(){return t}});var o=`# This is an H1
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
`,t=`# Customize Markdown Components
#### Customize Anchor Behavior
This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>


#### Customize Hr

---

#### Customize Image Display

![](https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp)
`,s=`

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
`},24547:function(i,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return t}});var o=n(40909);const t=[]},35983:function(i,e){"use strict";e.Z=`export const content = \`# This is an H1
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


#### Customize Hr

---

#### Customize Image Display

![](https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp)
\`;

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
`},25767:function(i,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { EditableMessage } from '@yuntijs/ui';
import { button } from 'leva';
import { useState } from 'react';

import { content } from './data';

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
        value={content}
      />
    </StoryBook>
  );
};
`}}]);
