/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Form as AntForm } from 'antd';
import InternalForm from './Form';
import FormItem from './FormItem';
type InternalFormType = typeof InternalForm;
type CompoundedComponent = InternalFormType & {
    useForm: typeof AntForm.useForm;
    useFormInstance: typeof AntForm.useFormInstance;
    useWatch: typeof AntForm.useWatch;
    Item: typeof FormItem;
    List: typeof AntForm.List;
    ErrorList: typeof AntForm.ErrorList;
    Provider: typeof AntForm.Provider;
};
declare const Form: CompoundedComponent;
export type { FormProps } from './Form';
export type { FormItemProps } from './FormItem/FormItem';
export default Form;
