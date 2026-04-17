/**
 * @file Select.tsx
 * @author rzh(peter.rao@derbysoft.net)
 */
import type { SelectProps as AntSelectProps } from 'antd';
import type { BaseOptionType } from 'antd/lib/select';
import type { ReactNode } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export interface Option extends BaseOptionType {
    icon?: ReactNode;
}
export interface SelectProps<V = any, O = Option> extends Omit<AntSelectProps<V, O>, 'options' | 'removeIcon' | 'allowClear' | 'size'> {
    options?: Option[];
    allowClear?: boolean;
    readOnly?: boolean;
    size?: SizeType;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps<unknown, Option> & React.RefAttributes<unknown>>;
export default Select;
