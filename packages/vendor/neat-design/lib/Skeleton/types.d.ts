/**
 * @file types.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { CSSProperties, ReactNode } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export interface InternalSkeletonComponentProps {
    className?: string;
    style?: CSSProperties;
    size?: SizeType;
    active?: boolean;
}
export interface SkeletonComponentProps extends InternalSkeletonComponentProps {
    children?: ReactNode;
    rootClassName?: string;
    loading?: boolean;
}
