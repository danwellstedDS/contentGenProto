/**
 * @file DrawerFooter.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type React from 'react';
import type { FC, HTMLAttributes } from 'react';
import type { ActionProps } from '../Action';
import type { ModalProps } from '../Modal';
import type { DrawerProps } from './Drawer';
export interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {
    okButtonProps?: ModalProps['okButtonProps'];
    okText?: ModalProps['okText'];
    okType?: ModalProps['okType'];
    cancelButtonProps?: ModalProps['cancelButtonProps'];
    cancelText?: ModalProps['cancelText'];
    cancelType?: ModalProps['okType'];
    direction?: ActionProps['direction'];
    info?: ActionProps['info'];
    extraButtons?: ActionProps['extraButtons'];
    onOk?: (e: React.MouseEvent<HTMLButtonElement>, onClose?: DrawerProps['onClose']) => void;
    onCancel?: ModalProps['onCancel'];
}
declare const DrawerFooter: FC<DrawerFooterProps>;
export default DrawerFooter;
