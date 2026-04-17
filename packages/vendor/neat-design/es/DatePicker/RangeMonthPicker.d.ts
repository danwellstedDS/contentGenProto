/**
 * @file RangeMonthPicker.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { RangePickerProps as AntRangePickerProps } from 'antd/lib/date-picker/generatePicker/interface';
import type { Dayjs } from 'dayjs';
import type { FC } from 'react';
import type { SizeType } from './types';
export interface RangeMonthPickerProps<ValueType = Dayjs> extends Omit<AntRangePickerProps<ValueType>, 'picker' | 'size'> {
    size?: SizeType;
}
declare const RangeMonthPicker: FC<RangeMonthPickerProps>;
export default RangeMonthPicker;
