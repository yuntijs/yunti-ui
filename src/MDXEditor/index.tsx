'use client';

import { MDXEditor as Editor, MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor';
import React, { useMemo } from 'react';

import { ALL_PLUGINS } from './_boilerplate';

export type { MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor';

interface Props extends Omit<MDXEditorProps, 'markdown'> {
  value: string;
}

export const MDXEditor = React.forwardRef<MDXEditorMethods, Props>(
  ({ value, onChange, plugins, ...props }, ref) => {
    const allPlaugins = useMemo(
      () => (plugins ? [...ALL_PLUGINS, ...plugins] : ALL_PLUGINS),
      [plugins]
    );

    return (
      <Editor markdown={value} onChange={onChange} plugins={allPlaugins} ref={ref} {...props} />
    );
  }
);
