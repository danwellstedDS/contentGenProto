/**
 * @file MultipleCascader.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { CascaderProps as AntCascaderProps } from 'antd';
import type { CascaderRef, DefaultOptionType } from 'antd/lib/cascader';
import type { GetValueType } from 'rc-cascader/lib/Cascader';
import type { PropsWithChildren, RefAttributes } from 'react';
import type { CascaderProps } from '../Cascader';
import type { ActionBarProps } from './ActionBar';
export interface MultipleCascaderSelectionProps {
    changeOnSelect?: boolean;
}
export interface MultipleCascaderActionProps {
    onOk?: ActionBarProps['onOk'];
    onCancel?: ActionBarProps['onCancel'];
}
export type MultipleCascaderProps<OptionType extends DefaultOptionType = DefaultOptionType, ValueField extends keyof OptionType = keyof OptionType> = CascaderProps<OptionType, ValueField, true> & MultipleCascaderActionProps & MultipleCascaderSelectionProps & {
    multiple: true;
};
export type InternalMultipleCascaderProps<OptionType extends DefaultOptionType = DefaultOptionType, ValueField extends keyof OptionType = keyof OptionType> = Omit<MultipleCascaderProps, 'size' | 'value' | 'defaultValue' | 'onChange'> & {
    size?: AntCascaderProps['size'];
    value?: GetValueType<OptionType, ValueField, true>;
    defaultValue?: GetValueType<OptionType, ValueField, true>;
    onChange?: (value: GetValueType<OptionType, ValueField, true>, selectOptions: OptionType[] | OptionType[][]) => void;
};
declare const MultipleCascader: <OptionType extends DefaultOptionType = DefaultOptionType, ValueField extends keyof OptionType = keyof OptionType>({ open, options, loadData, fieldNames, value, loading, autoClearSearchValue, showCheckedStrategy, popupRender, showSearch, changeOnSelect, onOpenChange, onChange, onBlur, onOk, onCancel, ...restProps }: PropsWithChildren<InternalMultipleCascaderProps<OptionType, ValueField>> & RefAttributes<CascaderRef>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default MultipleCascader;
