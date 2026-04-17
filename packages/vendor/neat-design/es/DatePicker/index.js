/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

import TimePicker from "../TimePicker";
import InternalDatePicker from "./DatePicker";
import MonthPicker from "./MonthPicker";
import QuarterPicker from "./QuarterPicker";
import RangePicker from "./RangePicker";
import YearPicker from "./YearPicker";
var DatePicker = InternalDatePicker;
DatePicker.MonthPicker = MonthPicker;
DatePicker.TimePicker = TimePicker;
DatePicker.YearPicker = YearPicker;
DatePicker.QuarterPicker = QuarterPicker;
DatePicker.RangePicker = RangePicker;
export default DatePicker;