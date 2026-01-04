import { DragOutlined } from '@ant-design/icons';
import { Button, Drawer, DrawerProps, Flex } from 'antd';
import React, { memo, useRef, useState } from 'react';
import type { ControlPosition, DraggableData, DraggableEvent } from 'react-draggable';
// @Todo: use react-rnd instead, support resizing
import Draggable from 'react-draggable';

import { useStyles } from './style';

export interface DragPanelProps extends DrawerProps {
  /** 面板默认位置 */
  defaultPosition?: ControlPosition;
  /** 面板位置改变的回调函数 */
  onPositionChange?: (position: ControlPosition) => void;
}

export const DragPanel: React.FC<DragPanelProps> = memo(
  ({ title, classNames = {}, defaultPosition, onPositionChange, ...otherProps }) => {
    const { styles, cx } = useStyles();

    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const draggleRef = useRef<HTMLDivElement>(null);

    const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
      // @Todo SSR
      const { clientWidth, clientHeight } = window.document.documentElement;
      const targetRect = draggleRef.current?.getBoundingClientRect();
      if (!targetRect) {
        return;
      }
      setBounds({
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y),
      });
    };

    return (
      <Drawer
        {...otherProps}
        classNames={{
          ...classNames,
          wrapper: cx(styles.wrapper, classNames.wrapper),
          content: cx(styles.content, classNames.content),
        }}
        destroyOnHidden
        drawerRender={drawer => (
          <Draggable
            bounds={bounds}
            defaultPosition={defaultPosition}
            handle={`.${styles.dragHandle}`}
            nodeRef={draggleRef as React.RefObject<HTMLElement>}
            onStart={(event, uiData) => onStart(event, uiData)}
            onStop={(_e, data) => {
              onPositionChange?.({ x: data.x, y: data.y });
            }}
          >
            <div className={styles.dragWrapper} ref={draggleRef}>
              {drawer}
            </div>
          </Draggable>
        )}
        mask={false}
        rootClassName={styles.root}
        title={
          <Flex align="center" className={styles.dragHandle}>
            <Flex flex={2}>{title}</Flex>
            <Flex>
              <Button className={styles.dragHandle} icon={<DragOutlined />} type="text" />
            </Flex>
          </Flex>
        }
      />
    );
  }
);
