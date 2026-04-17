/**
 * @file HorizontalSteps.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { BaseStepsProps } from './BaseSteps';
export interface HorizontalStepsProps extends Omit<BaseStepsProps, 'direction' | 'labelPlacement'> {
}
declare const HorizontalSteps: FC<HorizontalStepsProps>;
export default HorizontalSteps;
