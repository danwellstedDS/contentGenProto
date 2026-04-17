/**
 * @file DatePicker.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { DatePickerProps as AntDatePickerProps } from 'antd';
import type { PickerMode } from 'rc-picker/lib/interface';
import type { FC } from 'react';
import type { SizeType } from './types';
export interface DatePickerProps extends Omit<AntDatePickerProps, 'size' | 'picker'> {
    picker?: Exclude<PickerMode, 'week'>;
    size?: SizeType;
}
declare const DatePicker: FC<DatePickerProps>;
export default DatePicker;
