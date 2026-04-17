/**
 * @file InputPassword.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import type { InputRef } from 'antd';
import type { PasswordProps as AntdPasswordProps } from 'antd/lib/input';
import { type SizeType } from '../hooks/useConvertSize';
export type PasswordProps = Omit<AntdPasswordProps, 'size'> & {
    size?: SizeType;
};
declare const InputPassword: React.ForwardRefExoticComponent<Omit<AntdPasswordProps, "size"> & {
    size?: SizeType;
} & React.RefAttributes<InputRef>>;
export default InputPassword;
