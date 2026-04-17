/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author pipi(peter.rao@derbysoft.net)
 */
import { Radio as AntRadio } from 'antd';
import InternalRadio from './Radio';
import Group from './Group';
type InternalRadioType = typeof InternalRadio;
type CompoundedComponent = InternalRadioType & {
    Group: typeof Group;
    Button: typeof AntRadio.Button;
};
declare const Radio: CompoundedComponent;
export type { RadioProps } from './Radio';
export type { RadioGroupProps } from './Group';
export default Radio;
