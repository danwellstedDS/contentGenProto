/**
 * @file InputNumber.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { InputNumberProps as AntInputNumberProps } from 'antd';
import type { ReactElement, RefAttributes } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export type ValueType = string | number;
export type ControlsVisibleType = 'always' | 'never' | 'auto' | undefined;
export type InputDirectionType = 'left' | 'right' | undefined;
export type InputNumberProps<T extends ValueType = ValueType> = Omit<AntInputNumberProps<T>, 'size'> & {
    size?: SizeType;
    /**
     * Control the visible of controls.
     *  * "always": always show controls
     *  * "auto": only show controls when hover
     */
    controlsVisible?: ControlsVisibleType;
    inputDirection?: InputDirectionType;
} & RefAttributes<HTMLInputElement>;
type InputNumberType = (<T extends ValueType = ValueType>(props: InputNumberProps<T>) => ReactElement) & {
    displayName?: string | undefined;
};
declare const InputNumber: InputNumberType;
export default InputNumber;
