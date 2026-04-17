/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components
import { Cascader as AntCascader } from 'antd';
import InternalCascader from "./Cascader";
var Cascader = InternalCascader;
Cascader.SHOW_PARENT = AntCascader.SHOW_PARENT;
Cascader.SHOW_CHILD = AntCascader.SHOW_CHILD;
Cascader.Panel = AntCascader.Panel;
export default Cascader;