/**
 * @file Content.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { PopoverProps } from './Popover';
export interface PopoverContentProps extends PopoverProps {
    close?: () => void;
}
declare const Content: ({ icon, content, okButton, okText, okType, okButtonProps, cancelButton, cancelButtonProps, cancelText, cancelType, close, onOk, onCancel, }: PopoverContentProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Content;
