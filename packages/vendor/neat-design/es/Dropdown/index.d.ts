/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Dropdown as AntDropdown } from 'antd';
import InternalDropdown from './Dropdown';
type InternalDropdownType = typeof InternalDropdown;
type CompoundedComponent = InternalDropdownType & {
    Button: typeof AntDropdown.Button;
};
declare const Dropdown: CompoundedComponent;
export type { DropdownProps } from './Dropdown';
export default Dropdown;
