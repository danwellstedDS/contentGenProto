/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { CSSUtils } from '../../hooks';
export declare const styles: (utils: CSSUtils) => import("@emotion/utils/dist/declarations/src/types").SerializedStyles;
declare const useStyle: () => {
    ladderColor: import("src").LadderColor;
    theme: Partial<import("src").ThemeConfig>;
    token: import("src").Token;
    componentsToken: import("src").ComponentTokenMap;
    subComponentsToken: import("src").SubComponentTokenMap;
    styles: string;
    iconPrefixCls: string;
    prefixCls: string;
    cx: import("antd-style").ClassNamesUtil;
};
export default useStyle;
