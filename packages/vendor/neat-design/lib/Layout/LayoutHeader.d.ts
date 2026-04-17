/**
 * @file LayoutHeader.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import { Layout as AntLayout } from 'antd';
import type { GetProps, GetRef } from 'antd';
export type LayoutHeaderRef = GetRef<typeof AntLayout.Header>;
export interface LayoutHeaderProps extends GetProps<typeof AntLayout.Header> {
    bordered?: boolean;
}
declare const LayoutHeader: React.ForwardRefExoticComponent<Omit<LayoutHeaderProps, "ref"> & React.RefAttributes<HTMLElement>>;
export default LayoutHeader;
