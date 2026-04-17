/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components
import { Tree as AntTree } from 'antd';
import InternalTree from "./Tree";
var Tabs = InternalTree;
Tabs.TreeNode = AntTree.TreeNode;
Tabs.DirectoryTree = AntTree.DirectoryTree;
export default Tabs;