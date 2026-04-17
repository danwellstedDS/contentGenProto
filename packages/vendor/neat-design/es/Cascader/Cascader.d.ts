/**
 * @file Cascader.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { CascaderProps as AntCascaderProps } from 'antd';
import type { CascaderRef as AntCascaderRef, DefaultOptionType as AntDefaultOptionType } from 'antd/lib/cascader';
import type { PropsWithChildren, RefAttributes } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
import type { MultipleCascaderActionProps } from './multiple/MultipleCascader';
import { MultipleCascaderSelectionProps } from './multiple/MultipleCascader';
export type CascaderProps<OptionType extends AntDefaultOptionType = AntDefaultOptionType, ValueField extends keyof OptionType = keyof OptionType, Multiple extends boolean = boolean> = Omit<AntCascaderProps<OptionType, ValueField, Multiple>, 'size'> & {
    size?: SizeType;
};
export type CascaderAutoProps<OptionType extends AntDefaultOptionType = AntDefaultOptionType, ValueField extends keyof OptionType = keyof OptionType> = (CascaderProps<OptionType, ValueField> & {
    multiple?: false;
}) | (CascaderProps<OptionType, ValueField, true> & MultipleCascaderActionProps & MultipleCascaderSelectionProps & {
    multiple: true;
});
declare const Cascader: <OptionType extends AntDefaultOptionType = AntDefaultOptionType, ValueField extends keyof OptionType = keyof OptionType>({ className, classNames, placeholder, allowClear, suffixIcon, removeIcon, expandIcon, multiple, showCheckedStrategy, size, ...restProps }: PropsWithChildren<CascaderAutoProps<OptionType, ValueField>> & RefAttributes<AntCascaderRef>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Cascader;
