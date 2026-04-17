/**
 * @file types.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { TablePaginationConfig as AntTablePaginationConfig } from 'antd/lib/table/interface';
import type { TableProps as AntTableProps } from 'antd/lib/table/InternalTable';
import type { ReactNode } from 'react';
import React from 'react';
import type { SizeType } from 'src/hooks/useConvertSize';
import type { PaginationProps } from '../Pagination';
import type { PopoverProps } from '../Popover';
import type { SnackBarProps } from '../SnackBar';
import type { SpinnerProps } from '../Spinner';
export interface SelectAllAcrossPagesOptions {
    canSelectAllAcrossPages?: boolean;
    selectAllAcrossPages?: boolean;
    needSelectedTotalNumber?: number;
    onChangeSelectAllAcrossPages?: (selectAllAcrossPages: boolean) => void;
}
export interface TablePaginationConfig extends Omit<AntTablePaginationConfig, 'showTotal'> {
    showTotal?: PaginationProps['showTotal'];
}
export type TableSelectionPopType = 'popover' | 'snackBar';
interface BaseTableProps<RecordType = any> extends Omit<AntTableProps<RecordType>, 'loading' | 'size' | 'pagination'> {
    /**
     * 兼容 loading 对 size 字段的修改
     */
    loading?: boolean | SpinnerProps;
    /**
     * 修改 size 的枚举值
     */
    size?: SizeType;
    /**
     * 覆盖 Ant pagination 的类型
     */
    pagination?: false | TablePaginationConfig;
    /**
     * Selection Aciton Pop 的类型
     */
    tableSelectionPopType?: TableSelectionPopType;
    /**
     *  Selection Action Popup of popver 的 props
     */
    tableSelectionPopProps?: Omit<PopoverProps, 'onOpenChange'> | SnackBarProps;
    /**
     * 关于跨页全选的配置
     */
    selectAllAcrossPagesOptions?: SelectAllAcrossPagesOptions;
    /**
     * 显示在 Selection Action Bar 右侧的元素
     */
    extraSelectionAction?: ReactNode;
    /**
     * 自定义 Selection Action Bar 内的勾选数量提示语
     */
    selectedTotalNumberTip?: ReactNode;
}
export type TableProps<RecordType = any> = Omit<BaseTableProps<RecordType>, 'tableSelectionPopProps' | 'tableSelectionPopType'> & {
    rowSelectionHighlighted?: boolean;
} & ({
    tableSelectionPopType?: undefined;
    tableSelectionPopProps?: PopoverProps;
} | {
    tableSelectionPopType: 'popover';
    tableSelectionPopProps?: PopoverProps;
} | {
    tableSelectionPopType: 'snackBar';
    tableSelectionPopProps?: SnackBarProps;
});
/** from rc-table */
export type Key = React.Key;
export type ScrollConfig = {
    index?: number;
    key?: Key;
    top?: number;
};
export type Reference = {
    nativeElement: HTMLDivElement;
    scrollTo: (config: ScrollConfig) => void;
};
export {};
