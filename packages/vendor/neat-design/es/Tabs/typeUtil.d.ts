/**
 * @file typeUtil.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import type { TabsProps } from './Tabs';
/**
 * Check whether the props `tabBarExtraContent` is the type of `TabBarExtraMap`.
 * @param tabBarExtraContent
 */
export declare const isTabBarExtraMap: (tabBarExtraContent: TabsProps['tabBarExtraContent']) => tabBarExtraContent is Partial<Record<import("rc-tabs/lib/interface").TabBarExtraPosition, React.ReactNode>>;
