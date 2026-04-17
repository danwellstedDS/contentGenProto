/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

import InternalInputNumber from "./InputNumber";
import InputStepper from "./InputStepper";
var InputNumber = InternalInputNumber;
InputNumber.Stepper = InputStepper;
export default InputNumber;