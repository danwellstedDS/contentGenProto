/**
 * @file Divider.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { DividerProps as AntDividerProps } from 'antd';
import type { FC } from 'react';
export type Alignment = 'horizontal' | 'vertical';
export type Size = 'medium' | 'large';
export interface DividerProps extends Omit<AntDividerProps, 'type' | 'plain' | 'size'> {
    alignment?: Alignment;
    size?: Size;
}
declare const Divider: FC<DividerProps>;
export default Divider;
