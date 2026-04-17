/**
 * @file Tabs.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import type { TabsProps as AntTabsProps } from 'antd';
import type { TabsType as AntTabsType } from 'antd/lib/tabs';
import type { SizeType } from '../hooks/useConvertSize';
export type TabsRef = HTMLDivElement;
export interface TabsProps extends Omit<AntTabsProps, 'size' | 'tabPosition' | 'type'> {
    size?: SizeType;
    type?: AntTabsType | 'editable-line';
}
declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export default Tabs;
