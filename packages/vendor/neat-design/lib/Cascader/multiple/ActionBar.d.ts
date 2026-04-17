/**
 * @file ActionBar.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { FC } from 'react';
import type { ActionProps } from '../../Action';
export interface ActionBarProps extends ActionProps {
    loading?: boolean;
    select?: {
        showSelectAll: boolean;
        selectAll: boolean;
        indeterminate: boolean;
        disabled?: boolean;
    };
    changeOnSelect?: boolean;
    onSelectAll?: () => void;
    onDeselectAll?: () => void;
}
declare const ActionBar: FC<ActionBarProps>;
export default ActionBar;
