/**
 * @file Tree.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { TreeProps as AntTreeProps } from 'antd';
import type { FC } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export interface TreeProps extends AntTreeProps {
    size?: SizeType;
}
declare const Tree: FC<TreeProps>;
export default Tree;
