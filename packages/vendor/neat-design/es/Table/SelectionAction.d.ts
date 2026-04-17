/**
 * @file SelectionAction.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { PropsWithChildren } from 'react';
import type { TableProps } from './types';
export type TableSelectionPopProps = PropsWithChildren<Pick<TableProps, 'selectAllAcrossPagesOptions' | 'tableSelectionPopType' | 'tableSelectionPopProps' | 'extraSelectionAction' | 'selectedTotalNumberTip'>> & {
    loading: boolean;
};
declare const SelectionAction: ({ tableSelectionPopType, tableSelectionPopProps, selectAllAcrossPagesOptions, loading, selectedTotalNumberTip, extraSelectionAction, children, }: TableSelectionPopProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default SelectionAction;
