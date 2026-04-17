/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import RangePicker from './RangePicker';
import InternalTimePicker from './TimePicker';
type InternalTimePickerType = typeof InternalTimePicker;
type CompoundedComponent = InternalTimePickerType & {
    RangePicker: typeof RangePicker;
};
declare const TimePicker: CompoundedComponent;
export type { TimeRangePickerProps } from './RangePicker';
export type { TimePickerProps } from './TimePicker';
export default TimePicker;
