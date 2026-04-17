/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Form as AntForm } from 'antd';
import InternalFormItem from './FormItem';
type InternalFormItemType = typeof InternalFormItem;
type CompoundedComponent = InternalFormItemType & {
    useStatus: typeof AntForm.Item.useStatus;
};
declare const FormItem: CompoundedComponent;
export type { FormItemProps } from './FormItem';
export default FormItem;
