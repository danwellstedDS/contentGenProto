/**
 * @file Steps.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { BaseStepsProps } from './BaseSteps';
export interface StepsProps extends Omit<BaseStepsProps, 'direction' | 'labelPlacement'> {
}
declare const Steps: FC<StepsProps>;
export default Steps;
