/**
 * @file types.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ButtonProps as AntButtonProps } from 'antd/lib/button/button';
export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'tertiaryInline' | 'link';
export type ButtonSize = 'medium' | 'small' | 'large';
export interface ButtonProps extends Omit<AntButtonProps, 'type' | 'size' | 'ghost' | 'shape'> {
    type?: ButtonType;
    size?: ButtonSize;
    dropdown?: boolean;
}
