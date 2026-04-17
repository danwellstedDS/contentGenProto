/**
 * @file LayoutFooter.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import { Layout as AntLayout } from 'antd';
import type { GetProps, GetRef } from 'antd';
export type LayoutFooterRef = GetRef<typeof AntLayout.Footer>;
export type LayoutFooterType = 'default' | 'steps' | 'pagination';
export interface LayoutFooterProps extends GetProps<typeof AntLayout.Footer> {
    bordered?: boolean;
    type?: LayoutFooterType;
}
declare const LayoutFooter: React.ForwardRefExoticComponent<Omit<LayoutFooterProps, "ref"> & React.RefAttributes<HTMLElement>>;
export default LayoutFooter;
