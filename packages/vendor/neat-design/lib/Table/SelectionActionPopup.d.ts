/**
 * @file SelectionActionPopup.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC, PropsWithChildren, ReactNode } from 'react';
import type { PopoverProps } from '../Popover';
import type { SelectAllAcrossPagesOptions, TableProps } from './types';
export interface SelectionActionPopoverProps extends PopoverProps, SelectAllAcrossPagesOptions {
}
type Props = Pick<TableProps, 'tableSelectionPopType' | 'tableSelectionPopProps'> & {
    content?: ReactNode;
};
declare const SelectionActionPopup: FC<PropsWithChildren<Props>>;
export default SelectionActionPopup;
