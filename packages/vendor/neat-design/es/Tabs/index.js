/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components
import { Tabs as AntTabs } from 'antd';
import InternalTabs from "./Tabs";
var Tabs = InternalTabs;
Tabs.TabPane = AntTabs.TabPane;
export default Tabs;