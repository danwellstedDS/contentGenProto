/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Cascader as AntCascader } from 'antd';
import InternalCascader from './Cascader';
type InternalCascaderType = typeof InternalCascader;
type CompoundedComponent = InternalCascaderType & {
    SHOW_PARENT: typeof AntCascader.SHOW_PARENT;
    SHOW_CHILD: typeof AntCascader.SHOW_CHILD;
    Panel: typeof AntCascader.Panel;
};
declare const Cascader: CompoundedComponent;
export type * from './Cascader';
export default Cascader;
