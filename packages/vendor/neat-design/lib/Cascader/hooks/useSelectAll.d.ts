/**
 * @file useSelectAll.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { DefaultOptionType, SingleValueType } from 'rc-cascader/lib/Cascader';
import type { GetEntities } from 'rc-cascader/lib/hooks/useEntities';
import * as React from 'react';
import type { CascaderProps } from '../Cascader';
import type { MultipleCascaderProps } from '../multiple/MultipleCascader';
export type UseSelectAll = Pick<CascaderProps | MultipleCascaderProps, 'loadData' | 'value' | 'showCheckedStrategy'> & {
    optionsPaths: MultipleCascaderProps['options'][];
    fieldNames: MultipleCascaderProps['fieldNames'];
    getPathKeyEntities: GetEntities;
    getValueByKeyPath: (pathKeys: React.Key[]) => SingleValueType[];
};
declare const useSelectAll: <OptionType extends DefaultOptionType = DefaultOptionType, ValueField extends keyof OptionType = keyof OptionType>({ loadData, optionsPaths, value, fieldNames, showCheckedStrategy, getPathKeyEntities, getValueByKeyPath, }: UseSelectAll) => {
    showSelectAll: boolean;
    isSelectAll: boolean;
    indeterminate: boolean;
    selectAllValue: import("rc-cascader/lib/Cascader").ValueType<Required<OptionType>, ValueField>[][];
};
export default useSelectAll;
