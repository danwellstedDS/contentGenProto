/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import InternalCheckbox from './Checkbox';
import InternalCheckboxGroup from './CheckboxGroup';
type InternalCheckboxType = typeof InternalCheckbox;
type CompoundedComponent = InternalCheckboxType & {
    Group: typeof InternalCheckboxGroup;
};
declare const Checkbox: CompoundedComponent;
export type { CheckboxProps } from './Checkbox';
export default Checkbox;
