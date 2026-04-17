/**
 * @file Action.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import type { ButtonProps } from '../Button';
export type Type = 'footer' | 'picker';
export type Direction = 'r2l' | 'l2r';
export interface ActionProps extends HTMLAttributes<HTMLDivElement> {
    type?: Type;
    direction?: Direction;
    bordered?: boolean;
    info?: ReactNode;
    extraButtons?: ReactNode;
    okButton?: boolean;
    okButtonProps?: ButtonProps;
    okText?: ReactNode;
    okType?: ButtonProps['type'];
    cancelButton?: boolean;
    cancelButtonProps?: ButtonProps;
    cancelText?: ReactNode;
    cancelType?: ButtonProps['type'];
    buttonsRender?: (originButtons: ReactNode) => ReactNode;
    actionRender?: (originAction: ReactNode) => ReactNode;
    onOk?: (e: MouseEvent<HTMLButtonElement>) => void;
    onCancel?: (e: MouseEvent<HTMLButtonElement>) => void;
}
declare const Action: FC<ActionProps>;
export default Action;
