/**
 * @file VerticalSteps.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { BaseStepsProps } from './BaseSteps';
export interface VerticalStepsProps extends Omit<BaseStepsProps, 'direction' | 'labelPlacement'> {
}
declare const VerticalSteps: FC<VerticalStepsProps>;
export default VerticalSteps;
