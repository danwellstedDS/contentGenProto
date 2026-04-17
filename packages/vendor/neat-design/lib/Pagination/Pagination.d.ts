/**
 * @file Pagination.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { PaginationProps as AntPaginationProps } from 'antd';
import type { FC } from 'react';
export interface PaginationProps extends Omit<AntPaginationProps, 'showTotal'> {
    showTotal?: false | AntPaginationProps['showTotal'];
}
declare const Pagination: FC<PaginationProps>;
export default Pagination;
