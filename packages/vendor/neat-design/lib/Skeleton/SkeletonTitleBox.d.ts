/**
 * @file SkeletonTitleBox.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { InternalSkeletonComponentProps, SkeletonComponentProps } from './types';
export interface InternalSkeletonTitleBoxProps extends InternalSkeletonComponentProps {
    icon?: boolean;
}
export declare const InternalSkeletonTitleBox: FC<InternalSkeletonTitleBoxProps>;
export type SkeletonTitleBoxProps = InternalSkeletonTitleBoxProps & SkeletonComponentProps;
declare const SkeletonTitleBox: FC<SkeletonTitleBoxProps>;
export default SkeletonTitleBox;
