import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import { type Highlighter, createHighlighter } from 'shiki';
import useSWR from 'swr';

import { themeConfig } from '@/Highlighter/theme';

import { languageMap } from './languageMap';

export const FALLBACK_LANG = 'txt';

const FALLBACK_LANGS = [FALLBACK_LANG];

let cacheHighlighter: Highlighter;

const initHighlighter = async (lang: string): Promise<Highlighter> => {
  let highlighter = cacheHighlighter;
  const language = lang.toLowerCase();

  if (highlighter && FALLBACK_LANGS.includes(language)) return highlighter;

  if (languageMap.includes(language as any) && !FALLBACK_LANGS.includes(language)) {
    FALLBACK_LANGS.push(language);
  }

  highlighter = await createHighlighter({
    langs: FALLBACK_LANGS,
    themes: [themeConfig(true), themeConfig(false), 'catppuccin-latte', 'catppuccin-mocha'],
  });

  cacheHighlighter = highlighter;

  return highlighter;
};

export const useHighlight = (text: string, lang: string, isDarkMode: boolean) =>
  useSWR(
    [lang?.toLowerCase(), isDarkMode ? 'dark' : 'light', text].join('-'),
    async () => {
      try {
        const language = lang.toLowerCase();
        let theme = isDarkMode ? 'dark' : 'light';
        if (language === 'md') {
          theme = isDarkMode ? 'catppuccin-mocha' : 'catppuccin-latte';
        }
        const highlighter = await initHighlighter(language);
        const html = highlighter?.codeToHtml(text, {
          lang: languageMap.includes(language as any) ? language : FALLBACK_LANG,
          theme,
          transformers: [
            transformerNotationDiff(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
            transformerNotationFocus(),
            transformerNotationErrorLevel(),
          ],
        });
        return html;
      } catch {
        return '';
      }
    },
    { revalidateOnFocus: false }
  );

export { languageMap } from './languageMap';
