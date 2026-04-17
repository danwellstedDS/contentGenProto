/**
 * @file useRowSelection.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
/// <reference types="react" />
import type { TableProps } from '../';
import type { SelectAllAcrossPagesOptions } from '../types';
export interface SelectAllAcrossPagesAllOptions<T> extends SelectAllAcrossPagesOptions {
    rowSelection?: TableProps<T>['rowSelection'];
    dataSource?: TableProps<T>['dataSource'];
    rowKey?: TableProps<T>['rowKey'];
}
declare const useRowSelection: <T>(options: SelectAllAcrossPagesAllOptions<T>) => {
    rowSelection: import("antd/lib/table/interface").TableRowSelection<T> | {
        selectedRowKeys: any[];
        onChange: (v: React.SetStateAction<any[]>, ...args: any[]) => void;
        getCheckboxProps: (record: T) => Partial<Omit<import("antd/lib").CheckboxProps, "checked" | "defaultChecked">>;
        preserveSelectedRowKeys?: boolean;
        type?: import("antd/lib/table/interface").RowSelectionType;
        defaultSelectedRowKeys?: React.Key[];
        onSelect?: import("antd/lib/table/interface").SelectionSelectFn<T>;
        onSelectMultiple?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
        onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
        onSelectInvert?: (selectedRowKeys: React.Key[]) => void;
        onSelectNone?: () => void;
        selections?: boolean | import("antd/lib/table/hooks/useSelection").INTERNAL_SELECTION_ITEM[];
        hideSelectAll?: boolean;
        fixed?: import("rc-table/lib/interface").FixedType;
        columnWidth?: string | number;
        columnTitle?: React.ReactNode | ((checkboxNode: React.ReactNode) => React.ReactNode);
        checkStrictly?: boolean;
        align?: "left" | "right" | "center";
        renderCell?: (value: boolean, record: T, index: number, originNode: React.ReactNode) => React.ReactNode | import("rc-table/lib/interface").RenderedCell<T>;
        onCell?: import("rc-table/lib/interface").GetComponentProps<T>;
    };
    canSelectAllAcrossPages: boolean;
    needSelectedTotalNumber: number;
    selectAllAcrossPages: boolean;
    onChangeSelectAllAcrossPages: (v: React.SetStateAction<boolean>, ...args: any[]) => void;
};
export default useRowSelection;
