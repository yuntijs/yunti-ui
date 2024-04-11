import { notification } from 'antd';
import { createGlobalStyle } from 'antd-style';

export const NotificationGlobalStyle = createGlobalStyle`
.yunti-notification {
  width: auto;
  min-width: 360px;
  max-width: 520px;
  &-link {
    color: ${({ theme }) => {
      return `${theme?.colorPrimary} !important`;
    }};
  }
  &-link:hover {
    color: ${({ theme }) => {
      return `${theme?.colorPrimaryHover} !important`;
    }};
  }
  &-collapse {
    &-expand-icon {
      font-size: 14px !important;
    }
    &.ant-collapse > .ant-collapse-item {
      & > .ant-collapse-header {
        padding: 6px 16px 6px 24px;
        & > span {
          color: rgba(0, 0, 0, 0.7);
        }
        &:hover {
          .yunti-notification-collapse-expand-icon {
            color: ${({ theme }) => {
              return theme?.colorPrimary;
            }};
          }
        }
        .ant-collapse-expand-icon {
          position: absolute;
          top: 3.429px;
          left: 0%;
        }

        .ant-collapse-arrow {
          position: relative;
          top: 3.429px;

          display: inline-block;

          padding: 6px 0;

          line-height: 0;
          text-align: center;
          text-transform: none;
          text-rendering: optimizelegibility;
          vertical-align: -0.125em;
        }
        & > .ant-collapse-header-text {
          width: 100%;
        }
      }
      & > .ant-collapse-content > .ant-collapse-content-box {
        padding: 0;
      }
    }
    &-content-p {
      position: relative;
      & > pre {
        overflow: auto;
        height: 166px;
        margin: 0;
        padding-right: 24px;
      }
      & > .ant-typography-copy {
        position: absolute;
        right: 16px;
        bottom: 8px;

        font-size: 14px;
        color:${({ theme }) => {
          return `${theme?.colorPrimary} !important`;
        }};
      }

      & > .ant-typography-copy:hover {
        color:${({ theme }) => {
          return `${theme?.colorPrimaryHover} !important`;
        }};
      }
    }
  }
  ${({ theme }) => {
    const { prefixCls } = theme || {};
    notification.config({
      prefixCls,
    });
    return `
      .${prefixCls}-notice-message {
        font-weight: 500 !important;
      }
      .${prefixCls}-notice-description {
        max-height: ~'calc(100vh - 160px)';
        overflow: auto;
      }
    `;
  }}
}
`;
