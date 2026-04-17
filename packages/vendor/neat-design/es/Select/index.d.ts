/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Select as AntSelect } from 'antd';
import Cascader from '../Cascader';
import InternalSelect from './Select';
import type { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
import type { BaseSelectRef } from 'rc-select/lib/BaseSelect';
import type { PropsWithChildren, ReactElement, RefAttributes } from 'react';
import type { SelectProps } from './Select';
type InternalSelectType = typeof InternalSelect;
type CompoundedComponent = (<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType>(props: PropsWithChildren<SelectProps<ValueType, OptionType>> & RefAttributes<BaseSelectRef>) => ReactElement) & {
    displayName?: string | undefined;
} & InternalSelectType & {
    Option: typeof AntSelect.Option;
    OptGroup: typeof AntSelect.OptGroup;
    Cascader: typeof Cascader;
};
declare const Select: CompoundedComponent;
export type { SelectProps } from './Select';
export default Select;
