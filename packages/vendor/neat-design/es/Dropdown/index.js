/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

import { Dropdown as AntDropdown } from 'antd';
import InternalDropdown from "./Dropdown";
var Dropdown = InternalDropdown;
Dropdown.Button = AntDropdown.Button;
export default Dropdown;