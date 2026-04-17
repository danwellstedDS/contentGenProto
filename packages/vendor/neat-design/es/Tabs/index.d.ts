/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Tabs as AntTabs } from 'antd';
import InternalTabs from './Tabs';
type InternalTabsType = typeof InternalTabs;
type CompoundedComponent = InternalTabsType & {
    TabPane: typeof AntTabs.TabPane;
};
declare const Tabs: CompoundedComponent;
export type { TabsProps } from './Tabs';
export default Tabs;
