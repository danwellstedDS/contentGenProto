/**
 * @file Badge.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { BadgeProps as AntBadgeProps } from 'antd';
import type { FC } from 'react';
export type Color = 'important' | 'blue' | 'deep-purple' | 'purple' | 'pinkish-red' | 'red' | 'deep-orange' | 'orange' | 'amber' | 'yellow' | 'green' | 'teal' | 'cyan' | 'primary' | 'default' | 'inverse' | 'error' | 'info' | 'success' | 'warning';
export type Size = 'small' | 'medium' | 'large';
export interface BadgeProps extends Omit<AntBadgeProps, 'color' | 'size'> {
    color?: Color;
    size?: Size;
}
declare const Badge: FC<BadgeProps>;
export default Badge;
