/**
 * @file Input.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { InputProps as AntInputProps, InputRef } from 'antd';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export type InputProps = Omit<AntInputProps, 'size'> & {
    size?: SizeType;
};
type InternalInputType = ForwardRefExoticComponent<InputProps & RefAttributes<InputRef>>;
declare const Input: InternalInputType;
export default Input;
