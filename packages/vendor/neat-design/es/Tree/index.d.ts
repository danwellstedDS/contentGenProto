/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Tree as AntTree } from 'antd';
import InternalTree from './Tree';
type InternalTreeType = typeof InternalTree;
type CompoundedComponent = InternalTreeType & {
    TreeNode: typeof AntTree.TreeNode;
    DirectoryTree: typeof AntTree.DirectoryTree;
};
declare const Tabs: CompoundedComponent;
export type { TreeProps } from './Tree';
export default Tabs;
