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

type ModalType = typeof AntdModal;
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
