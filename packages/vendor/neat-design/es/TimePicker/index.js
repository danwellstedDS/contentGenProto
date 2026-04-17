/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

import RangePicker from "./RangePicker";
import InternalTimePicker from "./TimePicker";
var TimePicker = InternalTimePicker;
TimePicker.RangePicker = RangePicker;
export default TimePicker;