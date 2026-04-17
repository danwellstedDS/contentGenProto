/**
 * @file FormContext.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import type { FormProps } from './Form';
import type { FormItemProps } from './FormItem';
export interface FormContextType extends Partial<FormProps> {
    onFormItemLabelChange?: ({ name, label }: Partial<FormItemProps>) => void;
}
declare const _default: React.Context<FormContextType>;
export default _default;
