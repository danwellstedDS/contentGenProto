/**
 * @file SkeletonElement.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { SkeletonElementProps as AntSkeletonElementProps } from 'antd/lib/skeleton/Element';
import type { FC } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export interface SkeletonElementProps extends Omit<AntSkeletonElementProps, 'rootClassName' | 'size'> {
    size?: SizeType;
}
declare const SkeletonElement: FC<SkeletonElementProps>;
export default SkeletonElement;
