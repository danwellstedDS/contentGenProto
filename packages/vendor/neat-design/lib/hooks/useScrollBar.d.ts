/**
 * @file ScrollBar.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
export declare const Direction: {
    HORIZONTAL: string;
    VERTICAL: string;
};
export type TempSize = {
    vertical: number | null;
    horizontal: number | null;
};
export declare const useScrollBarStyle: () => {
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
declare const useScrollBar: () => {
    getSize: (direction?: string) => number;
    hasPlaceholderScrollBar: () => boolean;
};
export default useScrollBar;
