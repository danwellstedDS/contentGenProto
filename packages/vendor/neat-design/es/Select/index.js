/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components
import { Select as AntSelect } from 'antd';
import Cascader from "../Cascader";
import InternalSelect from "./Select";

// Types

var Select = InternalSelect;
Select.Option = AntSelect.Option;
Select.OptGroup = AntSelect.OptGroup;
Select.Cascader = Cascader;
export default Select;