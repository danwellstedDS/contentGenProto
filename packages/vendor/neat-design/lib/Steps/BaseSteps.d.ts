/**
 * @file BaseSteps.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { StepsProps as AntStepsProps } from 'antd';
import type { StepProps as AntStepProps } from 'antd/lib/steps';
import type { FC } from 'react';
export type StepsSize = 'medium' | 'small';
export type StepStatus = 'wait' | 'process' | 'finish' | 'error' | 'skip';
export type StepType = 'default' | 'inline';
export type StepIconType = 'outlined' | 'filled';
export type StepStatusIconType = Partial<Record<StepStatus, StepIconType>>;
export type CombinedStepStatusIconType = StepIconType | StepStatusIconType;
export interface StepProps extends Omit<AntStepProps, 'status' | 'type'> {
    status?: StepStatus;
    type?: StepType;
    iconType?: CombinedStepStatusIconType;
}
export interface BaseStepsProps extends Omit<AntStepsProps, 'items' | 'status' | 'size'> {
    items: StepProps[];
    status?: StepStatus;
    size?: StepsSize;
    iconType?: CombinedStepStatusIconType;
}
export declare const DefaultStepStatusIconType: Record<StepStatus, StepIconType>;
declare const BaseSteps: FC<BaseStepsProps>;
export default BaseSteps;
