/**
 * @file CheckboxGroup.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/lib/checkbox';
import type { FC } from 'react';
import type { CheckboxSize } from './Checkbox';
export interface CheckboxGroupProps extends AntCheckboxGroupProps {
    size?: CheckboxSize;
}
declare const CheckboxGroup: FC<CheckboxGroupProps>;
export default CheckboxGroup;
