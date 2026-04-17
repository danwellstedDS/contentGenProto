/**
 * @file FormItem.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FormItemProps as AntFormItemProps } from 'antd';
import type { FocusEventHandler, ReactElement, ReactNode } from 'react';
export interface FormItemProps<Values = any> extends Omit<AntFormItemProps<Values>, 'labelAlign' | 'labelCol' | 'tooltip'> {
    tooltip?: ReactNode;
    onFocus?: FocusEventHandler<HTMLElement>;
    onBlur?: FocusEventHandler<HTMLElement>;
}
declare function FormItem<Values = any>(props: FormItemProps<Values>): ReactElement;
export default FormItem;
