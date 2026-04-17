/**
 * @file ElementChildrenWrapper.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Form as AntForm } from 'antd';
import type { FocusEventHandler, ReactNode } from 'react';
import type { FormItemProps } from '../FormItem';
interface ChildProps {
    [name: string]: any;
}
export interface ElementChildrenWrapperProps extends ChildProps {
    formItemProps?: FormItemProps;
    children?: ReactNode;
    onFocus?: FocusEventHandler<HTMLElement>;
    onBlur?: FocusEventHandler<HTMLElement>;
    onStatusChange?: (status: ReturnType<typeof AntForm.Item.useStatus>) => void;
}
declare function ElementChildrenWrapper({ formItemProps, children, onFocus, onBlur, onStatusChange, ...restProps }: ElementChildrenWrapperProps): ReactNode;
export default ElementChildrenWrapper;
