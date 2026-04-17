/**
 * @file SkeletonBar.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { InternalSkeletonComponentProps, SkeletonComponentProps } from './types';
export interface InternalSkeletonBarProps extends InternalSkeletonComponentProps {
}
export declare const InternalSkeletonBar: FC<InternalSkeletonBarProps>;
export type SkeletonBarProps = InternalSkeletonBarProps & SkeletonComponentProps & {
    block?: boolean;
};
declare const SkeletonBar: FC<SkeletonBarProps>;
export default SkeletonBar;
