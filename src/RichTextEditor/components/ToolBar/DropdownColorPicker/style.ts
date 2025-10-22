import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    colorPickerBox: css`
      z-index: 100;

      box-sizing: content-box;
      min-height: 40px;
      padding: 20px;

      background-color: ${token.colorBgElevated};
      border-radius: 8px;
      box-shadow: ${token.boxShadowSecondary};

      .color-picker-basic-color {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        margin: 0;
        margin-top: 10px;
        padding: 0;
      }

      .color-picker-basic-color button {
        cursor: pointer;

        width: 16px;
        height: 16px;
        padding: 0;

        list-style-type: none;

        border: 1px solid ${token.colorBorderSecondary};
        border-radius: 4px;
      }

      .color-picker-basic-color button.active {
        box-shadow: ${token.boxShadowSecondary};
      }

      .color-picker-saturation {
        user-select: none;

        position: relative;

        width: 100%;
        height: 150px;
        margin-top: 15px;

        background-image:
          linear-gradient(transparent, black), linear-gradient(to right, white, transparent);
      }
      .color-picker-saturation_cursor {
        position: absolute;
        transform: translate(-10px, -10px);

        box-sizing: border-box;
        width: 20px;
        height: 20px;

        border: 2px solid ${token.colorBorderSecondary};
        border-radius: 50%;
        box-shadow: ${token.boxShadowSecondary};
      }
      .color-picker-hue {
        user-select: none;

        position: relative;

        width: 100%;
        height: 12px;
        margin-top: 15px;

        background-image: linear-gradient(
          to right,
          rgb(255, 0, 0),
          rgb(255, 255, 0),
          rgb(0, 255, 0),
          rgb(0, 255, 255),
          rgb(0, 0, 255),
          rgb(255, 0, 255),
          rgb(255, 0, 0)
        );
        border-radius: 12px;
      }

      .color-picker-hue_cursor {
        position: absolute;
        transform: translate(-10px, -4px);

        box-sizing: border-box;
        width: 20px;
        height: 20px;

        border: 2px solid ${token.colorBorderSecondary};
        border-radius: 50%;
        box-shadow: ${token.boxShadowSecondary};
      }

      .color-picker-color {
        width: 100%;
        height: 20px;
        margin-top: 15px;
        border: 1px solid ${token.colorBorderSecondary};
      }
    `,
  };
});
