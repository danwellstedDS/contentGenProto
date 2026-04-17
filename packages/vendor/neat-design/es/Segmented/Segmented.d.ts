/**
 * @file Segmented.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
/// <reference types="react" />
import type { SegmentedProps as AntSegmentedProps } from 'antd';
import type { SizeType } from '../hooks/useConvertSize';
export type SegmentedValue = string | number;
export interface SegmentedProps<ValueType = SegmentedValue> extends Omit<AntSegmentedProps<ValueType>, 'onChange' | 'size'> {
    onChange?: (value: any) => void;
    size?: SizeType;
}
declare const Segmented: React.ForwardRefExoticComponent<Omit<SegmentedProps<SegmentedValue>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Segmented;
