/**
 * monaco-editor 版本的**唯一来源**。
 *
 * 曾经三处各写一个版本号（`MonacoEditor` 的 props 默认值 + `base/monaco.ts` 里两处兜底），
 * 升级时漏改一处就会同时加载两份 monaco（几十 MB）、且「URL 写着一个版本、实际吃另一个」。
 * 加版本号的地方一律引用这里。
 */
export const DEFAULT_MONACO_VERSION = '0.56.0';
