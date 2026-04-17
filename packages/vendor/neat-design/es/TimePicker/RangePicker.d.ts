/**
 * @file RangePicker.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { TimeRangePickerProps as AntTimeRangePickerProps } from 'antd';
import type { FC } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export interface TimeRangePickerProps extends Omit<AntTimeRangePickerProps, 'size'> {
    size?: SizeType;
}
declare const TimePicker: FC<TimeRangePickerProps>;
export default TimePicker;
