(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9879],{59168:function(r,t,n){var i={"./ar.json":[18444,8444],"./be.json":[5401,5401],"./cs.json":[24815,4815],"./de.json":[11976,1976],"./en.json":[28443,8443],"./es.json":[74957,4957],"./fa.json":[45263,5263],"./fi.json":[94234,4234],"./fr.json":[96792,6792],"./hi.json":[80489,489],"./it.json":[59688,9688],"./ja.json":[98465,8465],"./ko.json":[7265,7265],"./nl.json":[67781,7781],"./pl.json":[29630,9630],"./pt.json":[15896,5896],"./ru.json":[59787,9787],"./sa.json":[84757,4757],"./tr.json":[22794,2794],"./uk.json":[54429,4429],"./vi.json":[97655,7655],"./zh.json":[50622,622]};function o(l){if(!n.o(i,l))return Promise.resolve().then(function(){var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c});var u=i[l],m=u[0];return n.e(u[1]).then(function(){return n.t(m,19)})}o.keys=function(){return Object.keys(i)},o.id=59168,r.exports=o},43394:function(r,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return y}});var i=n(90228),o=n.n(i),l=n(87999),u=n.n(l),m=n(75271),c=n(40909),y={"editablemessage-demo-demos":{component:m.memo(m.lazy(function(){return n.e(2993).then(n.bind(n,25029))})),asset:{type:"BLOCK",id:"editablemessage-demo-demos",refAtomIds:["EditableMessage"],dependencies:{"index.tsx":{type:"FILE",value:n(25767).Z},"@lobehub/ui":{type:"NPM",value:"1.147.0"},leva:{type:"NPM",value:"0.9.35"},react:{type:"NPM",value:"18.3.1"},"./data.ts":{type:"FILE",value:n(35983).Z},"...tsx":{type:"FILE",value:n(77591).Z},"use-merge-value":{type:"NPM",value:"1.2.0"}},entry:"index.tsx"},context:{"@lobehub/ui":n(59806),leva:n(32313),react:n(75271),"./data.ts":n(59529),"...tsx":n(99335),"use-merge-value":n(65720)},renderOpts:{compile:function(){var C=u()(o()().mark(function d(){var f,e=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(9321).then(n.bind(n,19321));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,e));case 3:case"end":return a.stop()}},d)}));function _(){return C.apply(this,arguments)}return _}()}}}},59529:function(r,t,n){"use strict";n.r(t),n.d(t,{code:function(){return l},content:function(){return i},content2:function(){return o}});var i=`# This is an H1
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


#### Customize Hr

---

#### Customize Image Display

![](https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp)
`,l=`

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
`},99335:function(r,t,n){"use strict";n.r(t);var i=n(26068),o=n.n(i),l=n(48305),u=n.n(l),m=n(50119),c=n(76079),y=n(72566),C=n(75271),_=n(65720),d=n(52676),f=(0,C.memo)(function(e){var g=e.value,a=e.onChange,T=e.classNames,s=T===void 0?{}:T,D=e.onEditingChange,A=e.editing,S=e.openModal,$=e.onOpenChange,b=e.placeholder,P=e.showEditWhenEmpty,L=P===void 0?!1:P,h=e.styles,E=e.height,z=e.inputType,W=e.editButtonSize,w=e.text,N=e.fullFeaturedCodeBlock,p=e.model,H=e.fontSize,I=e.markdownProps,R=(0,_.default)(!1,{onChange:D,value:A}),O=u()(R,2),k=O[0],v=O[1],U=(0,_.default)(!1,{onChange:$,value:S}),B=u()(U,2),M=B[0],K=B[1],Z=E==="auto",F=(0,d.jsx)(m.Z,{className:s==null?void 0:s.input,classNames:{textarea:s==null?void 0:s.textarea},defaultValue:g,editButtonSize:W,height:E,onCancel:function(){return v(!1)},onConfirm:function(x){a==null||a(x),v(!1)},placeholder:b,style:h==null?void 0:h.input,text:w,textareaClassname:s==null?void 0:s.input,type:z});return!g&&L?F:(0,d.jsxs)(d.Fragment,{children:[!M&&k?F:(0,d.jsx)(c.Z,o()(o()({className:s==null?void 0:s.markdown,fontSize:H,fullFeaturedCodeBlock:N,style:o()({height:Z?"unset":E},h==null?void 0:h.markdown),variant:"chat"},I),{},{children:g||b||""})),M&&(0,d.jsx)(y.Z,{editing:k,extra:p==null?void 0:p.extra,footer:p==null?void 0:p.footer,height:E,onChange:a,onEditingChange:v,onOpenChange:function(x){K(x),v(!1)},open:M,placeholder:b,text:w,value:g})]})});t.default=f},24547:function(r,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});var i=n(40909);const o=[]},35983:function(r,t){"use strict";t.Z=`export const content = \`# This is an H1
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
`},25767:function(r,t){"use strict";t.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { button } from 'leva';
import { useState } from 'react';

import EditableMessage from '..';
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
`},77591:function(r,t){"use strict";t.Z=`'use client';

import {
  Markdown,
  MarkdownProps,
  MessageInput,
  type MessageInputProps,
  MessageModal,
  type MessageModalProps,
} from '@lobehub/ui';
import { CSSProperties, memo } from 'react';
import useControlledState from 'use-merge-value';

export interface EditableMessageProps {
  /**
   * @title The class name for the Markdown and MessageInput component
   */
  classNames?: {
    /**
     * @title The class name for the MessageInput component
     */
    input?: string;
    /**
     * @title The class name for the Markdown component
     */
    markdown?: string;
    textarea?: string;
  };
  editButtonSize?: MessageInputProps['editButtonSize'];
  /**
   * @title Whether the component is in edit mode or not
   * @default false
   */
  editing?: boolean;
  fontSize?: number;
  fullFeaturedCodeBlock?: boolean;
  height?: MessageInputProps['height'];
  inputType?: MessageInputProps['type'];
  model?: {
    extra?: MessageModalProps['extra'];
    footer?: MessageModalProps['footer'];
  };
  /**
   * @title Callback function when the value changes
   * @param value - The new value
   */
  onChange?: (value: string) => void;
  /**
   * @title Callback function when the editing state changes
   * @param editing - Whether the component is in edit mode or not
   */
  onEditingChange?: (editing: boolean) => void;
  /**
   * @title Callback function when the modal open state changes
   * @param open - Whether the modal is open or not
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * @title Whether the modal is open or not
   * @default false
   */
  openModal?: boolean;
  placeholder?: string;
  /**
   * @title Whether to show the edit button when the text value is empty
   * @default false
   */
  showEditWhenEmpty?: boolean;
  styles?: {
    /**
     * @title The style for the MessageInput component
     */
    input?: CSSProperties;
    /**
     * @title The style for the Markdown component
     */
    markdown?: CSSProperties;
  };
  text?: MessageModalProps['text'];
  /**
   * @title The current text value
   */
  value: string;
  markdownProps?: MarkdownProps;
}

const EditableMessage = memo<EditableMessageProps>(
  ({
    value,
    onChange,
    classNames = {},
    onEditingChange,
    editing,
    openModal,
    onOpenChange,
    placeholder,
    showEditWhenEmpty = false,
    styles: stylesProps,
    height,
    inputType,
    editButtonSize,
    text,
    fullFeaturedCodeBlock,
    model,
    fontSize,
    markdownProps,
  }) => {
    const [isEdit, setTyping] = useControlledState(false, {
      onChange: onEditingChange,
      value: editing,
    });

    const [expand, setExpand] = useControlledState<boolean>(false, {
      onChange: onOpenChange,
      value: openModal,
    });

    const isAutoSize = height === 'auto';

    const input = (
      <MessageInput
        className={classNames?.input}
        classNames={{ textarea: classNames?.textarea }}
        defaultValue={value}
        editButtonSize={editButtonSize}
        height={height}
        onCancel={() => setTyping(false)}
        onConfirm={text => {
          onChange?.(text);
          setTyping(false);
        }}
        placeholder={placeholder}
        style={stylesProps?.input}
        text={text}
        textareaClassname={classNames?.input}
        type={inputType}
      />
    );

    if (!value && showEditWhenEmpty) return input;

    return (
      <>
        {!expand && isEdit ? (
          input
        ) : (
          <Markdown
            className={classNames?.markdown}
            fontSize={fontSize}
            fullFeaturedCodeBlock={fullFeaturedCodeBlock}
            style={{
              height: isAutoSize ? 'unset' : height,
              ...stylesProps?.markdown,
            }}
            variant={'chat'}
            {...markdownProps}
          >
            {value || placeholder || ''}
          </Markdown>
        )}
        {expand && (
          <MessageModal
            editing={isEdit}
            extra={model?.extra}
            footer={model?.footer}
            height={height}
            onChange={onChange}
            onEditingChange={setTyping}
            onOpenChange={e => {
              setExpand(e);
              setTyping(false);
            }}
            open={expand}
            placeholder={placeholder}
            text={text}
            value={value}
          />
        )}
      </>
    );
  }
);

export default EditableMessage;
`}}]);
