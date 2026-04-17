/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import InternalInputNumber from './InputNumber';
import InputStepper from './InputStepper';
type CompoundedComponent = typeof InternalInputNumber & {
    Stepper: typeof InputStepper;
};
declare const InputNumber: CompoundedComponent;
export type { InputNumberProps } from './InputNumber';
export type { InputStepperProps } from './InputStepper';
export default InputNumber;
