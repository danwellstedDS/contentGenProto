/**
 * @file LayoutTitleBar.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { HTMLAttributes, ReactNode } from 'react';
import type { BreadcrumbProps, TabsProps } from '../';
export type LayoutSiderRef = HTMLDivElement;
export interface LayoutTitleBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: ReactNode;
    breadcrumb?: BreadcrumbProps;
    showBack?: boolean;
    backType?: 'default' | 'secondary';
    tabs?: TabsProps;
    onBack?: () => void;
}
declare const LayoutTitleBar: React.ForwardRefExoticComponent<LayoutTitleBarProps & React.RefAttributes<HTMLDivElement>>;
export default LayoutTitleBar;
