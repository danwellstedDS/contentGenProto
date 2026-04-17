/**
 * @file InputOTP.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import { Input as AntInput } from 'antd';
import type { GetProps } from 'antd';
import type { SizeType } from '../hooks/useConvertSize';
export interface OTPProps extends Omit<GetProps<typeof AntInput.OTP>, 'size'> {
    size?: SizeType;
}
declare const InputOTP: React.ForwardRefExoticComponent<Omit<OTPProps, "ref"> & React.RefAttributes<import("antd/es/input/OTP").OTPRef>>;
export default InputOTP;
