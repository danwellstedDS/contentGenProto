/**
 * @file FunctionChildrenWrapper.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Form as AntForm } from 'antd';
import type { FormInstance } from 'antd/lib/form/Form';
import type { ReactNode } from 'react';
export interface FunctionChildrenWrapperProps<Values> {
    children?: (form: FormInstance<Values>) => ReactNode;
    formItemFunctionalArgs?: [form: FormInstance<Values>];
    onStatusChange?: (status: ReturnType<typeof AntForm.Item.useStatus>) => void;
}
declare function FunctionChildrenWrapper<Values = any>({ children, formItemFunctionalArgs, onStatusChange, }: FunctionChildrenWrapperProps<Values>): ReactNode;
export default FunctionChildrenWrapper;
