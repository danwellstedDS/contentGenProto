/**
 * @file SelectionActionBar.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { ReactNode } from 'react';
import type { SelectAllAcrossPagesOptions, TableProps } from './types';
export interface TableSelectionBarProps {
    selectedRowKeys?: TableProps['rowSelection']['selectedRowKeys'];
    totalNum?: number;
    loading?: boolean;
    action?: ReactNode;
    selectedTotalNumberTip?: ReactNode;
    onClearAll?: () => void;
    selectAllAcrossPagesOptions: SelectAllAcrossPagesOptions & {
        showSelectAll: boolean;
    };
}
declare const SelectionActionBar: ({ selectedRowKeys, totalNum, loading, action, selectedTotalNumberTip, onClearAll, selectAllAcrossPagesOptions: { canSelectAllAcrossPages, needSelectedTotalNumber, selectAllAcrossPages, onChangeSelectAllAcrossPages, showSelectAll, }, }: TableSelectionBarProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default SelectionActionBar;
