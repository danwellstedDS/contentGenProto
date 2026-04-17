/**
 * @file YearPicker.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { RangePickerProps as AntRangePickerProps } from 'antd/lib/date-picker/generatePicker/interface';
import type { Dayjs } from 'dayjs';
import type { FC } from 'react';
import type { SizeType } from './types';
export interface RangeYearPickerProps<ValueType = Dayjs> extends Omit<AntRangePickerProps<ValueType>, 'picker' | 'size'> {
    size?: SizeType;
}
declare const YearPicker: FC<RangeYearPickerProps>;
export default YearPicker;
