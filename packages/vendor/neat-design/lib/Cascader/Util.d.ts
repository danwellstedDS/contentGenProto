/**
 * @file Util.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { DefaultOptionType } from 'rc-cascader/lib/Cascader';
import type { MultipleCascaderProps } from './multiple/MultipleCascader';
export type ValueKey = MultipleCascaderProps['fieldNames']['value'];
export type ChildrenKey = MultipleCascaderProps['fieldNames']['children'];
export interface Option extends DefaultOptionType {
}
/**
 * @param option
 * @param fieldNames
 * @param callback
 * @param depth
 * @param parentNode
 * @param path
 */
export declare function preOrderTraverse<OptionType extends DefaultOptionType = DefaultOptionType, ValueField extends keyof OptionType = keyof OptionType>(option: OptionType, fieldNames: MultipleCascaderProps<OptionType, ValueField>['fieldNames'], callback: (option: OptionType, parentNode: OptionType, depth: number, path: OptionType[]) => void | false, depth?: number, parentNode?: OptionType, path?: OptionType[]): void | boolean;
/**
 * Get select all value when showCheckedStrategy === AntCascader.SHOW_CHILD
 * @param options
 * @param valueKey
 * @param childrenKey
 * @param valuePath
 */
export declare function getSelectAllValue(options: MultipleCascaderProps['options'], valueKey: ValueKey, childrenKey: ChildrenKey, valuePath?: any[]): any[];
/**
 * Get select all value when showCheckedStrategy === AntCascader.SHOW_CHILD
 * @param optionsPaths
 * @param valueKey
 * @param childrenKey
 * @param valuePath
 */
export declare function getSelectAllValueByPaths(optionsPaths: MultipleCascaderProps['options'][], valueKey: ValueKey, childrenKey: ChildrenKey, valuePath?: any[]): any[][];
