/**
 * @file util.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ButtonProps as AntButtonProps } from 'antd/lib/button/button';
import type { ButtonProps, ButtonSize, ButtonType } from './types';
export interface Options {
    withoutDefault?: boolean;
}
export declare const neatButtonType2AntButtonType: (type: ButtonType) => AntButtonProps['type'];
export declare const neatButtonSize2AntButtonSize: (size: ButtonSize) => AntButtonProps['size'];
export declare const neatButtonIcon2AntButtonIcon: (icon: ButtonProps['icon'], props?: Partial<ButtonProps>) => AntButtonProps['icon'];
export declare const neatButtonProps2AntButtonProps: (props: Partial<ButtonProps>, options?: Options) => Partial<AntButtonProps>;
