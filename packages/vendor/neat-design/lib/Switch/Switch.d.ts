/**
 * @file Switch.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author rzh(peter.rao@derbysoft.net)
 */
/// <reference types="react" />
import type { SwitchProps as AntSwitchProps } from 'antd';
import type { SizeType } from '../hooks/useConvertSize';
export type SwitchProps = Omit<AntSwitchProps, 'size'> & {
    size?: SizeType;
};
declare const Switch: React.ForwardRefExoticComponent<Omit<AntSwitchProps, "size"> & {
    size?: SizeType;
} & React.RefAttributes<HTMLButtonElement>>;
export default Switch;
