/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import InternalLayout from './Layout';
import LayoutContent from './LayoutContent';
import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';
import LayoutSider from './LayoutSider';
import LayoutTitleBar from './LayoutTitleBar';
type InternalLayoutType = typeof InternalLayout;
type CompoundedComponent = InternalLayoutType & {
    Header: typeof LayoutHeader;
    Content: typeof LayoutContent;
    Footer: typeof LayoutFooter;
    Sider: typeof LayoutSider;
    TitleBar: typeof LayoutTitleBar;
};
declare const Layout: CompoundedComponent;
export type { LayoutProps } from './Layout';
export type { LayoutContentProps } from './LayoutContent';
export type { LayoutFooterProps, LayoutFooterRef, LayoutFooterType, } from './LayoutFooter';
export type { LayoutHeaderProps } from './LayoutHeader';
export type { LayoutSiderProps } from './LayoutSider';
export type { LayoutTitleBarProps } from './LayoutTitleBar';
export default Layout;
