/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components
import { Input as AntInput } from 'antd';
import InternalInput from "./Input";
import InternalInputOTP from "./InputOTP";
import InternalInputPassword from "./InputPassword";
import InternalSearch from "./Search";
import InternalTextArea from "./TextArea";
var Input = InternalInput;
Input.Password = InternalInputPassword;
Input.Search = InternalSearch;
Input.TextArea = InternalTextArea;
Input.Group = AntInput.Group;
Input.OTP = InternalInputOTP;
export default Input;