/**
 * @file SkeletonMenu.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { SkeletonComponentProps } from './types';
export interface SkeletonMenuProps extends Omit<SkeletonComponentProps, 'size'> {
    rows?: number;
}
declare const SkeletonMenu: FC<SkeletonMenuProps>;
export default SkeletonMenu;
