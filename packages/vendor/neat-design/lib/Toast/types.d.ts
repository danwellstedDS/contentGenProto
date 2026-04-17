/**
 * @file types.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { message as AntMessage } from 'antd';
import type { ArgsProps as AntMessageArgsProps, ConfigOptions as AntMessageConfigOptions, MessageType as AntMessageType, MessageInstance } from 'antd/lib/message/interface';
import type * as React from 'react';
import type { ReactElement, ReactNode } from 'react';
export interface VoidFunction {
    (): void;
}
export interface ToastConfigOptions extends AntMessageConfigOptions {
}
export interface ToastArgsProps extends Omit<AntMessageArgsProps, 'icon'> {
    icon?: ReactNode | boolean;
    loading?: boolean;
    closable?: boolean;
}
export type ToastJointContent = ReactNode | ToastArgsProps;
export interface ToastType extends AntMessageType {
}
export type ToastTypeOpen = (content: ToastJointContent, duration?: number | VoidFunction, onClose?: VoidFunction) => ToastType;
export interface ToastInstance extends Omit<MessageInstance, 'info' | 'success' | 'error' | 'warning' | 'open'> {
    info: ToastTypeOpen;
    success: ToastTypeOpen;
    error: ToastTypeOpen;
    warning: ToastTypeOpen;
    open(args: ToastArgsProps): ToastType;
}
export interface Toast extends Omit<typeof AntMessage, 'useMessage'> {
    useToast: (toastConfig?: ToastConfigOptions) => readonly [
        ToastInstance,
        ReactElement<any, string | React.JSXElementConstructor<any>>
    ];
}
