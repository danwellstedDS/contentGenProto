/**
 * @file QuarterPicker.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { DatePickerProps as AntDatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';
import type { FC } from 'react';
import type { SizeType } from './types';
export interface QuarterPickerProps<ValueType = Dayjs> extends Omit<AntDatePickerProps<ValueType>, 'picker' | 'size'> {
    size?: SizeType;
}
declare const QuarterPicker: FC<QuarterPickerProps>;
export default QuarterPicker;
