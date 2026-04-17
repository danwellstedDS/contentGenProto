/**
 * @file Form.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FormProps as AntFormProps, FormInstance } from 'antd';
import type { PropsWithChildren, ReactElement, Ref } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export type FormLayout = 'horizontal' | 'vertical';
export interface FormProps<Values = any> extends Omit<AntFormProps<Values>, 'size' | 'layout' | 'labelAlign' | 'labelCol' | 'labelWrap'> {
    size?: SizeType;
    layout?: FormLayout;
}
declare const ForwardRefForm: <Values = any>(props: PropsWithChildren<FormProps<Values>> & {
    ref?: Ref<FormInstance<Values>>;
}) => ReactElement;
export default ForwardRefForm;
