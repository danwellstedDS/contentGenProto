/**
 * @file useIcons.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { DatePickerProps } from 'antd';
import type { RangePickerProps } from 'antd/lib/date-picker/generatePicker/interface';
export interface Args {
    suffixIcon?: DatePickerProps['suffixIcon'] | RangePickerProps['suffixIcon'];
    prevIcon?: DatePickerProps['prevIcon'] | RangePickerProps['prevIcon'];
    nextIcon?: DatePickerProps['nextIcon'] | RangePickerProps['nextIcon'];
    superPrevIcon?: DatePickerProps['superPrevIcon'] | RangePickerProps['superPrevIcon'];
    superNextIcon?: DatePickerProps['superNextIcon'] | RangePickerProps['superNextIcon'];
}
declare const useIcons: ({ suffixIcon, prevIcon, nextIcon, superPrevIcon, superNextIcon, }: Args) => Args;
export default useIcons;
