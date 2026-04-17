/**
 * @file SkeletonTable.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { SkeletonComponentProps } from './types';
export interface SkeletonTableProps extends SkeletonComponentProps {
    checkable?: boolean;
    rows?: number;
    cols?: number;
}
declare const SkeletonTable: FC<SkeletonTableProps>;
export default SkeletonTable;
