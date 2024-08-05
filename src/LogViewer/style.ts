import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token }) => {
    const bgColor = '#222222';
    return {
      root: css`
        position: relative;
        background-color: ${bgColor};
        border-radius: ${token.borderRadiusLG}px;

        .react-lazylog-searchbar {
          margin-bottom: ${token.marginXXS}px;
          padding: ${token.paddingXS}px;

          background-color: ${bgColor};
          border-bottom: 1px solid #2d2d2d;
          border-top-left-radius: ${token.borderRadiusLG}px;
          border-top-right-radius: ${token.borderRadiusLG}px;
          & > input {
            border-radius: ${token.borderRadius}px;
          }
          & > button {
            cursor: pointer;
            padding: 2px 6px;
            border-radius: ${token.borderRadius}px;
          }
          &-up-arrow {
            margin-right: 0;
          }
        }
        .react-lazylog {
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
          scrollbar-width: auto;
          background-color: ${bgColor};
          border-radius: ${token.borderRadiusLG}px;

          .log-number {
            margin-right: 0;
          }
          .log-content {
            margin-left: 15px;
          }
        }
      `,
      searchBarIcon: css`
        font-size: 16px;
      `,
      loader: css`
        position: absolute;
        right: ${token.marginSM}px;
        bottom: ${token.marginSM}px;

        font-size: 18px;
        color: #999;
      `,
    };
  },
  { hashPriority: 'low' }
);
