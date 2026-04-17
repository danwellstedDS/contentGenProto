/**
 * @file TimePicker.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { TimePickerProps as AntTimePickerProps } from 'antd';
import type { FC } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export interface TimePickerProps extends Omit<AntTimePickerProps, 'size'> {
    size?: SizeType;
}
declare const TimePicker: FC<TimePickerProps>;
export default TimePicker;
