/**
 * @file LayoutContent.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
/// <reference types="react" />
import { Layout as AntLayout } from 'antd';
import type { GetProps, GetRef } from 'antd';
export type LayoutContentRef = GetRef<typeof AntLayout.Content>;
export interface LayoutContentProps extends GetProps<typeof AntLayout.Content> {
}
declare const LayoutContent: React.ForwardRefExoticComponent<Omit<LayoutContentProps, "ref"> & React.RefAttributes<HTMLElement>>;
export default LayoutContent;
