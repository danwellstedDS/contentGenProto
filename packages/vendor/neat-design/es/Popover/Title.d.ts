/**
 * @file Title.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { PopoverProps } from './Popover';
export interface PopoverTitleProps extends PopoverProps {
    close?: () => void;
}
declare const Title: ({ title, icon, closable, closeButtonProps, close, onCancel, }: PopoverTitleProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Title;
