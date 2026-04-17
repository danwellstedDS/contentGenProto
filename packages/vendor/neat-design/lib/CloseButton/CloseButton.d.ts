/**
 * @file CloseButton.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ButtonHTMLAttributes, FC } from 'react';
export type Type = 'default' | 'circle';
export type Size = 'small' | 'medium' | 'large';
export interface CloseButtonProps<T = unknown> extends Omit<ButtonHTMLAttributes<T>, 'type'> {
    tagName?: string;
    type?: Type;
    size?: Size | number;
    inverse?: boolean;
}
declare const CloseButton: FC<CloseButtonProps>;
export default CloseButton;
