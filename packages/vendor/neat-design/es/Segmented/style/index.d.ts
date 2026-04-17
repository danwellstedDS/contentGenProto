/**
 * @file index.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
declare const useStyle: ({ onlyIcon }: {
    onlyIcon: any;
}) => {
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
