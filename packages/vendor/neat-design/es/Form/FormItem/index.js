/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

import { Form as AntForm } from 'antd';
import InternalFormItem from "./FormItem";
var FormItem = InternalFormItem;
FormItem.useStatus = AntForm.Item.useStatus;
export default FormItem;