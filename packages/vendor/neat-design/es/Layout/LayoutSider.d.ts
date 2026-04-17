/**
 * @file LayoutSider.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import { Layout as AntLayout } from 'antd';
import type { GetProps, GetRef } from 'antd';
export type LayoutSiderRef = GetRef<typeof AntLayout.Sider>;
export interface LayoutSiderProps extends GetProps<typeof AntLayout.Sider> {
    bordered?: boolean;
}
declare const LayoutSider: React.ForwardRefExoticComponent<Omit<LayoutSiderProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default LayoutSider;
