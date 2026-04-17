/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
export interface Options {
    responsive?: boolean;
}
declare const useStyle: ({ responsive }: Options) => {
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
