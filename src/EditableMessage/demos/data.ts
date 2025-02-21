export const content = `# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5

The point of reference-style links is not that they’re easier to write. The point is that with reference-style links, your document source is vastly more readable. Compare the above examples: using reference-style links, the paragraph itself is only 81 characters long; with inline-style links, it’s 176 characters; and as raw \`HTML\`, it’s 234 characters. In the raw \`HTML\`, there’s more markup than there is text.

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

以下是一段Markdown格式的LaTeX数学公式：

我是一个行内公式：$E=mc^2$

我是一个独立公式：
$$
\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\ldots + x_n
$$

我是一个带有分式的公式：
$$
\\frac{{n!}}{{k!(n-k)!}} = \\binom{n}{k}
$$

我是一个带有上下标的公式：
$$
x^{2} + y^{2} = r^{2}
$$

我是一个带有积分符号的公式：
$$
\\int_{a}^{b} f(x) \\, dx
$$

---

我是一个嵌套测试：
\`\`\`
$1
\`\`\`
`;

export const content2 = `# Customize Markdown Components
#### Customize Anchor Behavior
This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>

<think>这个请求适合创建一个新的SVG卡片artifact</think>

#### Customize Hr

---

#### Customize Image Display

![](https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/lobe-chat.webp)

![](https://chat.dev.botnow.cn/v1/gpts/images/5f76e131-bcf3-4a92-878f-709b097c12b9)
`;

export const content3 = `<think>这个请求适合创建一个新的SVG卡片artifact</think>

这是我为"睡觉"这个词创作的新解释卡片。`;

export const content4 = `<think>

嗯，用户发来了一个查询，内容是“3+3=?”。看起来这是一个简单的数学问题。首先，我需要确认用户的需求是什么。他们可能是在测试我的计算能力，或者想确认一个简单的加法是否正确。

考虑到用户之前提到过解析文件，可能他们希望我能够处理文件相关的问题。但这次的问题明显是数学题，所以可能他们想切换到另一个主题。也有可能是他们想看看我是否能够处理不同类型的问题，包括简单的计算。

接下来，我需要评估我的能力范围。作为一个通用的AI，我能够处理基本的算术运算，包括加法、减法、乘法和除法。所以，3+3=6应该是正确的答案。不过，我应该确保我的回答准确无误，避免任何计算错误。

另外，用户可能是在测试我的反应速度和准确性。所以，我应该快速且准确地给出答案，同时保持友好和专业的语气。这样可以提升用户体验，让他们感到满意。

最后，考虑到用户可能后续还会问更多问题，我应该准备好处理各种类型的问题，包括复杂的数学题、编程问题、数据分析等，以展示我的广泛知识和能力。

</think>

3 + 3 = 6`;

export const code = `

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
  console.log(msg) // 打印 Hello World
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
`;
