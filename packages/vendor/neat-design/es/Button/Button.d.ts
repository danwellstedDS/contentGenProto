/**
 * @file Button.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Button as AntButton } from 'antd';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { ButtonProps } from './types';
type CompoundedComponent = ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLElement>> & {
    Group: typeof AntButton.Group;
};
declare const Button: CompoundedComponent;
export default Button;
