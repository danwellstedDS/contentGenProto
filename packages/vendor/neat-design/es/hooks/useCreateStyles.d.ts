/**
 * @file useCreateStyles.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { LadderColor, Token } from '@derbysoft/neat-design-token';
import type { ReturnStyles as AntReturnStyles, StyleOrGetStyleFn as AntStyleOrGetStyleFn, BaseReturnType, CreateStylesUtils, SerializedStyles } from 'antd-style';
import type { CreateOptions } from 'antd-style/lib/functions/createInstance';
import type { ComponentTokenMap, SubComponentTokenMap, ThemeConfig } from '../theme';
declare enum CIJ_KEY_ENUM {
    DEFAULT = "css",
    HIGH = "css-high-priority"
}
declare enum CIJ_PRIORITY_ENUM {
    DEFAULT = "low",
    HIGH = "high"
}
export declare const CIJ_HIGH_PRIORITY_CONFIG: {
    key: CIJ_KEY_ENUM;
    hashPriority: CIJ_PRIORITY_ENUM;
};
export declare const useInternalCreateStyles: (options?: CreateOptions<any>) => <Props, Input extends BaseReturnType = BaseReturnType>(styleOrGetStyle: AntStyleOrGetStyleFn<Input, Props>, options?: import("antd-style").ClassNameGeneratorOption) => (props?: Props) => AntReturnStyles<Input>;
export interface CSSUtils extends Omit<CreateStylesUtils, 'theme' | 'token'> {
    ladderColor: LadderColor;
    theme: Partial<ThemeConfig>;
    token: Token;
    componentsToken: ComponentTokenMap;
    subComponentsToken: SubComponentTokenMap;
}
export type GetStyleFn<Input extends BaseReturnType, Props> = (utils: CSSUtils, props: Props) => Input;
export type CreateStylesCallback<Input extends BaseReturnType, Props> = (utils: CSSUtils) => Input | GetStyleFn<Input, Props>;
export interface ReturnStyles<Input extends BaseReturnType = SerializedStyles> extends Omit<AntReturnStyles<Input>, 'theme'> {
    ladderColor: LadderColor;
    theme: Partial<ThemeConfig>;
    token: Token;
    componentsToken: ComponentTokenMap;
    subComponentsToken: SubComponentTokenMap;
}
declare const _default: (options?: CreateOptions<any>) => <Input extends BaseReturnType, Props = unknown>(fn: CreateStylesCallback<Input, Props>) => {
    ladderColor: LadderColor;
    theme: Partial<ThemeConfig>;
    token: Token;
    componentsToken: ComponentTokenMap;
    subComponentsToken: SubComponentTokenMap;
    styles: import("antd-style").ReturnStyleToUse<Input>;
    iconPrefixCls: string;
    prefixCls: string;
    cx: import("antd-style").ClassNamesUtil;
};
export default _default;
