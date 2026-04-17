/**
 * @file YearPicker.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { DatePickerProps as AntDatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';
import type { FC } from 'react';
import type { SizeType } from './types';
export interface YearPickerProps<ValueType = Dayjs> extends Omit<AntDatePickerProps<ValueType>, 'picker' | 'size'> {
    size?: SizeType;
}
declare const YearPicker: FC<YearPickerProps>;
export default YearPicker;
