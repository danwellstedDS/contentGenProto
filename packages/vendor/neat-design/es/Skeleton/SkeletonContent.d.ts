/**
 * @file SkeletonContent.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { SkeletonParagraphProps } from './SkeletonParagraph';
export interface SkeletonContentProps extends Omit<SkeletonParagraphProps, 'size'> {
}
declare const SkeletonContent: FC<SkeletonContentProps>;
export default SkeletonContent;
