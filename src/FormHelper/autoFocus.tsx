import React, { MutableRefObject, useState } from 'react';

type RefOrDomOrId<T> = HTMLElement | string | React.Ref<T>;

type F = any;

const getDom = (refOrDomOrId: RefOrDomOrId<F>) =>
  typeof refOrDomOrId === 'string'
    ? document.querySelector(`#${refOrDomOrId}`)
    : (refOrDomOrId as MutableRefObject<F>)?.current || refOrDomOrId;

// https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#input_%E7%B1%BB%E5%9E%8B
const disabled = ':not([disabled]):not([readonly])';
const queryInputTypes =
  ['text', 'password', 'search', 'tel', 'url', 'number', 'email', '']
    .map(item => `input[type="${item}"]${disabled}`)
    .join(', ') + `, input:not([type])${disabled}, textarea${disabled}`;
const setAutoFocus = (refOrDomOrId: RefOrDomOrId<F>) => {
  const dom = getDom(refOrDomOrId);
  if (!dom) return;
  const input = dom.querySelector?.(queryInputTypes);
  if (!input?.focus) return;
  input.focus();
  return true;
};

/**
 * Passing a ref, id, or DOM element to obtain and set the focus state of the first non-disabled and non-readonly input or textarea.
 * @param {RefOrDomOrId} refOrDomOrId - 支持类型 HTMLElement | string | React.Ref<T>
 * @returns void
 */
export const useAutoFocus = (refOrDomOrId?: RefOrDomOrId<F>) => {
  const [focused, setFocused] = useState<boolean>(false);
  React.useEffect(() => {
    if (focused || !refOrDomOrId) return;
    const setRes = setAutoFocus(refOrDomOrId);
    if (!setRes) return;
    setFocused(true);
  }, [refOrDomOrId, focused, setFocused]);
};
