/**
 * @file Progress.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ProgressProps as AntProgressProps } from 'antd';
import type { FC } from 'react';
import type { TooltipProps } from '../Tooltip';
export type ProgressProps = Omit<AntProgressProps, 'type' | 'size' | 'percentPosition'> & ({
    type: 'ringMini';
    size?: undefined;
    percentPosition?: Partial<TooltipProps>;
} | {
    type: 'ring';
    size?: 'small' | 'medium' | 'large';
    percentPosition?: undefined;
} | {
    type?: 'bar' | 'bold';
    size?: 'small' | 'medium' | 'large';
    percentPosition?: AntProgressProps['percentPosition'];
});
declare const Progress: FC<ProgressProps>;
export default Progress;
