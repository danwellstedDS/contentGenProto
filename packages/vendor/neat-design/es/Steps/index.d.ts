/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Steps as AntSteps } from 'antd';
import HorizontalSteps from './HorizontalSteps';
import NavigationSteps from './NavigationSteps';
import InternalSteps from './Steps';
import VerticalSteps from './VerticalSteps';
type InternalStepsType = typeof InternalSteps;
type CompoundedComponent = InternalStepsType & {
    Step: typeof AntSteps.Step;
    Horizontal: typeof HorizontalSteps;
    Navigation: typeof NavigationSteps;
    Vertical: typeof VerticalSteps;
};
declare const Steps: CompoundedComponent;
export type { CombinedStepStatusIconType, StepIconType, StepProps, StepsSize, StepStatus, StepStatusIconType, StepType, } from './BaseSteps';
export type { HorizontalStepsProps } from './HorizontalSteps';
export type { NavigationStepsProps } from './NavigationSteps';
export type { StepsProps } from './Steps';
export type { VerticalStepsProps } from './VerticalSteps';
export default Steps;
