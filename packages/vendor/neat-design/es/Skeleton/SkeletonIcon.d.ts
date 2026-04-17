/**
 * @file SkeletonIcon.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { InternalSkeletonComponentProps, SkeletonComponentProps } from './types';
export interface InternalSkeletonIconProps extends InternalSkeletonComponentProps {
}
export declare const InternalSkeletonIcon: FC<InternalSkeletonIconProps>;
export type SkeletonIconProps = InternalSkeletonIconProps & SkeletonComponentProps & {
    block?: boolean;
};
declare const SkeletonIcon: FC<SkeletonIconProps>;
export default SkeletonIcon;
