/**
 * @file useSelectAll.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { FC } from 'react';
import type { CheckboxProps } from '../../Checkbox';
export interface SelectAllProps extends CheckboxProps {
    onSelectAll?: () => void;
    onDeselectAll?: () => void;
}
declare const SelectAll: FC<SelectAllProps>;
export default SelectAll;
