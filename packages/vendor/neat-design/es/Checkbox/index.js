/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

import InternalCheckbox from "./Checkbox";
import InternalCheckboxGroup from "./CheckboxGroup";
var Checkbox = InternalCheckbox;
Checkbox.Group = InternalCheckboxGroup;
export default Checkbox;