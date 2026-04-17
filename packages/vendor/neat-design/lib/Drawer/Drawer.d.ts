/**
 * @file Drawer.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { DrawerProps as AntDrawerProps } from 'antd';
import type { FC } from 'react';
export interface DrawerProps extends Omit<AntDrawerProps, 'size' | 'placement'> {
    placement?: 'left' | 'right';
    size?: 'small' | 'medium' | 'large' | 'full-screen';
}
declare const Drawer: FC<DrawerProps>;
export default Drawer;
