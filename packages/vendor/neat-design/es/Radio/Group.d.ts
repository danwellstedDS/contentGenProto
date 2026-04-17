import type { RadioGroupProps as AntdRadioGroupProps } from 'antd';
import type { CheckboxOptionType } from 'antd/lib/checkbox/Group';
import type { SizeType } from '../hooks/useConvertSize';
type NeatRadioExtraProps = {
    size?: SizeType;
    state?: 'error';
};
export type RadioOptionType = (CheckboxOptionType & NeatRadioExtraProps) | string | number;
export type RadioGroupProps = Omit<AntdRadioGroupProps, 'size' | 'options'> & NeatRadioExtraProps & {
    options?: RadioOptionType[];
};
declare const RadioGroup: (props: RadioGroupProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default RadioGroup;
