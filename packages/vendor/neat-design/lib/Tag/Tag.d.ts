/**
 * @file Tag.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { TagProps as AntTagProps } from 'antd';
import type { CSSProperties, FC } from 'react';
export type Color = 'blue' | 'blue-inverse' | 'green' | 'green-inverse' | 'red' | 'red-inverse' | 'cyan' | 'cyan-inverse' | 'purple' | 'purple-inverse' | 'orange' | 'orange-inverse' | 'amber' | 'amber-inverse' | 'pink' | 'pink-inverse' | 'neutral' | 'neutral-inverse';
export type TagSize = 'small' | 'medium' | 'large';
export interface TagProps extends Omit<AntTagProps, 'color'> {
    color?: Color;
    size?: TagSize;
    disabled?: boolean;
    pointerEvents?: CSSProperties['pointerEvents'];
}
declare const Tag: FC<TagProps>;
export default Tag;
