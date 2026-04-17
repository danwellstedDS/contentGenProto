/**
 * @file SkeletonButton.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { InternalSkeletonComponentProps, SkeletonComponentProps } from './types';
export interface InternalSkeletonButtonProps extends InternalSkeletonComponentProps {
}
export declare const InternalSkeletonButton: FC<InternalSkeletonButtonProps>;
export type SkeletonButtonProps = InternalSkeletonButtonProps & SkeletonComponentProps & {
    block?: boolean;
};
declare const SkeletonButton: FC<SkeletonButtonProps>;
export default SkeletonButton;
