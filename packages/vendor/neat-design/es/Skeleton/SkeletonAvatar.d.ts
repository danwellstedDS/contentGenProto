/**
 * @file SkeletonAvatar.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { InternalSkeletonComponentProps, SkeletonComponentProps } from './types';
export interface InternalSkeletonAvatarProps extends InternalSkeletonComponentProps {
}
export declare const InternalSkeletonAvatar: FC<InternalSkeletonAvatarProps>;
export type SkeletonAvatarProps = InternalSkeletonAvatarProps & SkeletonComponentProps & {
    block?: boolean;
};
declare const SkeletonAvatar: FC<SkeletonAvatarProps>;
export default SkeletonAvatar;
