export type SizeType = 'small' | 'medium' | 'large' | undefined;
import type { SelectProps as AntdSelectProps } from 'antd/lib/select';
declare const _default: (size: SizeType) => 'default' | 'small' | 'large' | undefined;
export default _default;
export declare const useConvertSizeMediumAsMiddle: (size: SizeType) => AntdSelectProps['size'];
/**
 * This function is recommended when concatenating `classnames`
 * @description It's sure it will get 'size' By rule of Neat-Design
 * @param size
 * @returns SizeType
 */
export declare function rigorousNeatSize(size?: string): SizeType;
