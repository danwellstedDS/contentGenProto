/**
 * @file SkeletonCard.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { SkeletonParagraphProps } from './SkeletonParagraph';
export interface SkeletonCardProps extends Omit<SkeletonParagraphProps, 'size'> {
}
declare const SkeletonCard: FC<SkeletonCardProps>;
export default SkeletonCard;
