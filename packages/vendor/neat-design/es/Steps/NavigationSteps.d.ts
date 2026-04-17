/**
 * @file NavigationSteps.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { BaseStepsProps } from './BaseSteps';
export interface NavigationStepsProps extends Omit<BaseStepsProps, 'type' | 'direction' | 'labelPlacement'> {
}
declare const NavigationSteps: FC<NavigationStepsProps>;
export default NavigationSteps;
