/**
 * @file useSize.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { DatePickerProps as AntDatePickerProps } from 'antd';
import type { SizeType } from '../types';
declare const useSize: (size?: SizeType) => AntDatePickerProps['size'];
export default useSize;
