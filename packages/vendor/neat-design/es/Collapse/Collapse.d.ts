/**
 * @file Collapse.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { CollapseProps as AntCollapseProps } from 'antd';
import type { FC } from 'react';
import type { SizeType } from '../hooks/useConvertSize';
export interface CollapseProps extends Omit<AntCollapseProps, 'size'> {
    size?: SizeType;
}
declare const Collapse: FC<CollapseProps>;
export default Collapse;
