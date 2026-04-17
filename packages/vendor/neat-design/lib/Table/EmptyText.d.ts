/**
 * @file EmptyText.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC, HTMLAttributes, ReactNode } from 'react';
import type { TableProps } from './types';
export interface EmptyTextProps extends HTMLAttributes<HTMLDivElement> {
    loading?: TableProps['loading'];
    image?: ReactNode;
    text?: ReactNode;
    description?: ReactNode;
    render?: TableProps['locale']['emptyText'];
}
declare const EmptyText: FC<EmptyTextProps>;
export default EmptyText;
