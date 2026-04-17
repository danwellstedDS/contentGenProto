/**
 * @file useTabBarExtraContent.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { TabBarExtraMap } from 'rc-tabs/lib/interface';
import type { TabsProps } from '../Tabs';
declare const useTabBarExtraContent: () => {
    mergeTabBarExtraContent: (defaultTabBarExtraContent: TabBarExtraMap, ...tabBarExtraContents: TabsProps['tabBarExtraContent'][]) => {
        left: import("@emotion/react/jsx-runtime").JSX.Element;
        right: import("@emotion/react/jsx-runtime").JSX.Element;
    };
};
export default useTabBarExtraContent;
