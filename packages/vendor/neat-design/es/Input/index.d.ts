/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Input as AntInput } from 'antd';
import InternalInput from './Input';
import InternalInputOTP from './InputOTP';
import InternalInputPassword from './InputPassword';
import InternalSearch from './Search';
import InternalTextArea from './TextArea';
type InternalInputType = typeof InternalInput;
type CompoundedComponent = InternalInputType & {
    Group: typeof AntInput.Group;
    Password: typeof InternalInputPassword;
    Search: typeof InternalSearch;
    TextArea: typeof InternalTextArea;
    OTP: typeof InternalInputOTP;
};
declare const Input: CompoundedComponent;
export type { InputRef } from 'antd';
export type { InputProps } from './Input';
export type { OTPProps } from './InputOTP';
export default Input;
