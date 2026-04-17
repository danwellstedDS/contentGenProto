/**
 * @file RangePicker.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { RangePickerProps as AntRangePickerProps } from 'antd/lib/date-picker';
import type { FC } from 'react';
import type { SizeType } from './types';
export interface RangePickerProps extends Omit<AntRangePickerProps, 'size'> {
    size?: SizeType;
}
declare const RangePicker: FC<RangePickerProps>;
export default RangePicker;
