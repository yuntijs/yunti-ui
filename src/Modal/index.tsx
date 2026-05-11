import {
  Modal as AntdModal,
  type ModalFuncProps as AntdModalFuncProps,
  type ModalProps as AntdModalProps,
} from 'antd';
import React from 'react';

import { prefixCls } from '@/utils/constants';

import { useStyles } from './style';

export type ModalFuncProps = AntdModalFuncProps;
interface CustomModalProps {
  /**
   * @description Whether support border-bottom of header and border-top of footer.
   * @default 'true'
   */
  borderd?: boolean;
}
export interface ModalProps extends AntdModalProps, CustomModalProps {}

const OriginModal: React.FC<ModalProps> = props => {
  const { className, borderd = true, ...otherProps } = props;

  const { styles, cx } = useStyles({ borderd, ...otherProps });

  return (
    <AntdModal {...otherProps} className={cx(styles.custom, `${prefixCls}-modal`, className)} />
  );
};

type AntdModalType = typeof AntdModal;
type DeprecatedStaticKey =
  | 'info'
  | 'success'
  | 'error'
  | 'warning'
  | 'warn'
  | 'confirm'
  | 'destroyAll'
  | 'config';

type ModalType = React.FC<ModalProps> &
  Omit<AntdModalType, DeprecatedStaticKey> & {
    /** @deprecated Use `App.useApp().modal.info` instead, which is bound to the ConfigProvider context. */
    info: AntdModalType['info'];
    /** @deprecated Use `App.useApp().modal.success` instead, which is bound to the ConfigProvider context. */
    success: AntdModalType['success'];
    /** @deprecated Use `App.useApp().modal.error` instead, which is bound to the ConfigProvider context. */
    error: AntdModalType['error'];
    /** @deprecated Use `App.useApp().modal.warning` instead, which is bound to the ConfigProvider context. */
    warning: AntdModalType['warning'];
    /** @deprecated Use `App.useApp().modal.warn` instead, which is bound to the ConfigProvider context. */
    warn: AntdModalType['warn'];
    /** @deprecated Use `App.useApp().modal.confirm` instead, which is bound to the ConfigProvider context. */
    confirm: AntdModalType['confirm'];
    /** @deprecated Static methods are deprecated. Use the instance returned by `App.useApp().modal` to manage lifecycles. */
    destroyAll: AntdModalType['destroyAll'];
    /** @deprecated Static config does not pick up ConfigProvider context. Configure via `<ConfigProvider />` instead. */
    config: AntdModalType['config'];
  };

export const Modal = OriginModal as ModalType;
Modal.useModal = AntdModal.useModal;
Modal.destroyAll = AntdModal.destroyAll;
Modal.config = AntdModal.config;
Modal._InternalPanelDoNotUseOrYouWillBeFired = AntdModal._InternalPanelDoNotUseOrYouWillBeFired;
Modal.info = AntdModal.info;
Modal.success = AntdModal.success;
Modal.error = AntdModal.error;
Modal.warning = AntdModal.warning;
Modal.warn = AntdModal.warn;
Modal.confirm = AntdModal.confirm;

export default Modal;
