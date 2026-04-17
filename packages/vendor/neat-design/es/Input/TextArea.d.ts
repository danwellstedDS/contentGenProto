/**
 * @file TextArea.tsx
 * @author rzh(peter.rao@derbysoft.net)
 */
/// <reference types="react" />
import type { InputRef } from 'antd';
import type { TextAreaProps as AntdTextAreaProps } from 'antd/lib/input';
import type { SizeType } from '../hooks/useConvertSize';
export type TextAreaProps = Omit<AntdTextAreaProps, 'size'> & {
    size?: SizeType;
};
declare const TextArea: React.ForwardRefExoticComponent<Omit<AntdTextAreaProps, "size"> & {
    size?: SizeType;
} & React.RefAttributes<InputRef>>;
export default TextArea;
