export interface WebsocketOptions {
  /**
   * Callback when the socket is opened
   */
  onOpen?: ((e: Event, socket: WebSocket) => void) | undefined;
  /**
   * Callback when the socket is closed
   */
  onClose?: ((e: CloseEvent) => void) | undefined;
  /**
   * Callback when the socket has an error
   */
  onError?: ((e: Event) => void) | undefined;
  /**
   * Callback allback which formats the websocket data stream.
   */
  formatMessage?: ((message: any) => string) | undefined;
  /**
   * Set to true, to reconnect the WebSocket automatically.
   */
  reconnect?: boolean;
  /**
   * Set the time to wait between reconnects in seconds.
   * Default is 1s
   */
  reconnectWait?: number;
}

export interface LineNumberClickEvent {
  lineNumber: number;
  highlightRange?: Immutable.Seq.Indexed<number>;
}

export interface LazyLogProps {
  /**
   * Flag to enable/disable case insensitive search
   */
  caseInsensitive?: boolean;
  /**
   * Optional custom inline style to attach to element which contains
   * the interior scrolling container.
   */
  containerStyle?: React.CSSProperties;
  /**
   * If true, capture system hotkeys for searching the page (Cmd-F, Ctrl-F,
   * etc.)
   */
  enableHotKeys?: boolean;
  /**
   * Enable the line gutters to be displayed. Default is false
   */
  enableGutters?: boolean;
  /**
   * Enable the line numbers to be displayed. Default is true.
   */
  enableLineNumbers?: boolean;
  /**
   * Enable hyperlinks to be discovered in log text and made clickable links. Default is false.
   */
  enableLinks?: boolean;
  /**
   * Enable the search feature.
   */
  enableSearch?: boolean;
  /**
   * If true, search like a browser search - enter jumps to the next line
   * with the searched term, shift + enter goes backwards.
   * Also adds up and down arrows to search bar to jump
   * to the next and previous result.
   * If false, enter toggles the filter instead.
   * Defaults to true.
   */
  enableSearchNavigation?: boolean;
  /**
   * Enable the ability to select multiple lines using shift + click.
   * Defaults to true.
   */
  enableMultilineHighlight?: boolean;
  /**
   * Number of extra lines to show at the bottom of the log.
   * Set this to 1 so that Linux users can see the last line
   * of the log output.
   */
  extraLines?: number;
  /**
   * Options object which will be passed through to the `fetch` request.
   * Defaults to `{ credentials: 'omit' }`.
   */
  fetchOptions?: RequestInit;
  /**
   * Scroll to the end of the component after each update to the content.
   * Cannot be used in combination with `scrollToLine`.
   */
  follow?: boolean;
  /**
   * Execute a function against each string part of a line,
   * returning a new line part. Is passed a single argument which is
   * the string part to manipulate, should return a new string
   * with the manipulation completed.
   */
  formatPart?: (text: string) => React.ReactNode;
  /**
   * The Line Gutter component
   */
  gutter?: React.ReactNode[];
  /**
   * Set the height in pixels for the component.
   * Defaults to `'auto'` if unspecified. When the `height` is `'auto'`,
   * the component will expand vertically to fill its container.
   */
  height?: string | number;
  /**
   * Line number (e.g. `highlight={10}`) or line number range to highlight
   * inclusively (e.g. `highlight={[5, 10]}` highlights lines 5-10).
   * This is 1-indexed, i.e. line numbers start at `1`.
   */
  highlight?: number | number[];
  /**
   * Specify an additional className to append to highlighted lines.
   */
  highlightLineClassName?: string;
  /**
   * Icon for the Filter Lines button in the Search Bar. Defaults to FilterLineIcon SVG.
   */
  iconFilterLines?: React.ReactNode;
  /**
   * Icon for the Find Next button in the Search Bar. Defaults to ArrowDownIcon SVG.
   */
  iconFindNext?: React.ReactNode;
  /**
   * Icon for the Find Previous button in the Search Bar. Defaults to ArrowUpIcon SVG.
   */
  iconFindPrevious?: React.ReactNode;
  /**
   * Specify an additional className to append to lines.
   */
  lineClassName?: string;
  /**
   * Specify an alternate component to use when loading.
   */
  loadingComponent?: React.ReactNode | ((props: any) => React.ReactNode);
  /**
   * Execute a function if the provided `url` has encountered an error
   * during loading.
   */
  onError?: (error: any) => any;
  /**
   * Execute a function when the highlighted range has changed.
   * Is passed a single argument which is an `Immutable.Range`
   * of the highlighted line numbers.
   */
  onHighlight?: (range: Immutable.Seq.Indexed<number>) => any;
  /**
   * Execute a function if/when the provided `url` has completed loading.
   */
  onLoad?: () => any;
  /**
   * Additional function called when a line number is clicked.
   * On click, the line will always be highlighted.
   * This function is to provide additional actions.
   * Receives an object with lineNumber and highlightRange.
   * Defaults to null.
   */
  onLineNumberClick?: (event: LineNumberClickEvent) => any;
  /**
   * Callback to invoke on click of line contents.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onLineContentClick?(event: React.MouseEvent<HTMLSpanElement>): void;
  /**
   * Callback to invoke on user scroll. Args matches the ScrollFollow onScroll callback.
   * @param args
   */
  onScroll?(args: { scrollTop: number; scrollHeight: number; clientHeight: number }): void;
  /**
   * Number of rows to render above/below the visible bounds of the list.
   * This can help reduce flickering during scrolling on
   * certain browsers/devices. Defaults to `100`.
   */
  overscanRowCount?: number;
  /**
   * A fixed row height in pixels. Controls how tall a line is,
   * as well as the `lineHeight` style of the line's text.
   * Defaults to `19`.
   */
  rowHeight?: number;
  /**
   * Scroll to a particular line number once it has loaded.
   * This is 1-indexed, i.e. line numbers start at `1`.
   * Cannot be used in combination with `follow`.
   */
  scrollToLine?: number;
  /**
   * Make the text selectable, allowing to copy & paste. Defaults to `false`.
   */
  selectableLines?: boolean;
  /**
   * Set to `true` to specify remote URL will be streaming chunked data.
   * Defaults to `false` to download data until completion.
   */
  stream?: boolean;
  /**
   * Optional custom inline style to attach to root
   * virtual `LazyList` element.
   */
  style?: React.CSSProperties;
  /**
   * String containing text to display.
   */
  text?: string;
  /**
   * The URL from which to fetch content. Subject to same-origin policy,
   * so must be accessible via fetch on same domain or via CORS.
   */
  url?: string;
  /**
   * Set to `true` to specify that url is a websocket URL.
   * Defaults to `false` to download data until completion.
   */
  websocket?: boolean;
  /**
   * Options object which will be passed through to websocket.
   */
  websocketOptions?: WebsocketOptions;
  /**
   * Set the width in pixels for the component.
   * Defaults to `'auto'` if unspecified.
   * When the `width` is `'auto'`, the component will expand
   * horizontally to fill its container.
   */
  width?: string | number;
}
