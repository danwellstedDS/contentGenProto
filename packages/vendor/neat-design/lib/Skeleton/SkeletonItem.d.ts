/**
 * @file SkeletonItem.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { SkeletonElementProps as AntSkeletonElementProps } from 'antd/lib/skeleton/Element';
import type { FC, ReactNode } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export interface SkeletonItemProps extends Omit<AntSkeletonElementProps, 'rootClassName' | 'prefixCls' | 'size'> {
    children?: ReactNode;
    size?: SizeType;
    block?: boolean;
    loading?: boolean;
    loadingPlaceholder?: ReactNode;
}
declare const SkeletonItem: FC<SkeletonItemProps>;
export default SkeletonItem;
