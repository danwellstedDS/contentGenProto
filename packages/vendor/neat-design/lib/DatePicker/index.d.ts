/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import TimePicker from '../TimePicker';
import InternalDatePicker from './DatePicker';
import MonthPicker from './MonthPicker';
import QuarterPicker from './QuarterPicker';
import RangePicker from './RangePicker';
import YearPicker from './YearPicker';
type InternalDatePickerType = typeof InternalDatePicker;
type CompoundedComponent = InternalDatePickerType & {
    MonthPicker: typeof MonthPicker;
    TimePicker: typeof TimePicker;
    YearPicker: typeof YearPicker;
    QuarterPicker: typeof QuarterPicker;
    RangePicker: typeof RangePicker;
};
declare const DatePicker: CompoundedComponent;
export type { DatePickerProps } from './DatePicker';
export type { MonthPickerProps } from './MonthPicker';
export type { QuarterPickerProps } from './QuarterPicker';
export type { RangePickerProps } from './RangePicker';
export type { YearPickerProps } from './YearPicker';
export default DatePicker;
