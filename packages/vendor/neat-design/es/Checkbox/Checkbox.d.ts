/**
 * @file Checkbox.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { CheckboxProps as AntCheckboxProps } from 'antd';
import type { FC } from 'react';
export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxState = 'error';
export interface CheckboxProps extends AntCheckboxProps {
    size?: CheckboxSize;
    state?: CheckboxState;
    labelWrap?: boolean;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
