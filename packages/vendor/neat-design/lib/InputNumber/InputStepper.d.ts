/**
 * @file InputStepper.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { InputNumberProps as AntInputNumberProps } from 'antd';
export type ControlsVisibleType = 'always' | 'auto' | undefined;
export interface InputStepperProps extends AntInputNumberProps {
    /**
     * Control the visible of controls.
     *  * "always": always show controls
     *  * "auto": only show controls when hover
     */
    controlsVisible?: ControlsVisibleType;
}
declare const InputStepper: ({ className, controlsVisible, controls, ...restProps }: InputStepperProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default InputStepper;
