/**
 * @file Popover.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { PopoverProps as AntPopoverProps } from 'antd';
import type { TooltipRef } from 'antd/lib/tooltip';
import type { ReactNode } from 'react';
import type { ActionProps } from '../Action';
import type { CloseButtonProps } from '../CloseButton';
export type PopoverProps = AntPopoverProps & Pick<ActionProps, 'okButton' | 'okButtonProps' | 'okText' | 'okType' | 'cancelButton' | 'cancelButtonProps' | 'cancelText' | 'cancelType' | 'onOk' | 'onCancel'> & {
    icon?: ReactNode;
    closable?: boolean;
    closeButtonProps?: CloseButtonProps;
};
declare const Popover: React.ForwardRefExoticComponent<AntPopoverProps & Pick<ActionProps, "okButton" | "okButtonProps" | "okText" | "okType" | "cancelButton" | "cancelButtonProps" | "cancelText" | "cancelType" | "onOk" | "onCancel"> & {
    icon?: ReactNode;
    closable?: boolean;
    closeButtonProps?: CloseButtonProps;
} & React.RefAttributes<TooltipRef>>;
export default Popover;
