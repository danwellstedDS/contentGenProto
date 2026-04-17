/**
 * @file SkeletonParagraph.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { InternalSkeletonComponentProps, SkeletonComponentProps } from './types';
export interface InternalSkeletonParagraphProps extends InternalSkeletonComponentProps {
    rows?: number;
}
export declare const InternalSkeletonParagraph: FC<InternalSkeletonParagraphProps>;
export type SkeletonParagraphProps = InternalSkeletonParagraphProps & SkeletonComponentProps;
declare const SkeletonParagraph: FC<SkeletonParagraphProps>;
export default SkeletonParagraph;
