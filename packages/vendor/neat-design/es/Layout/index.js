/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components
import InternalLayout from "./Layout";
import LayoutContent from "./LayoutContent";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import LayoutSider from "./LayoutSider";
import LayoutTitleBar from "./LayoutTitleBar";
var Layout = InternalLayout;
Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
Layout.Footer = LayoutFooter;
Layout.Sider = LayoutSider;
Layout.TitleBar = LayoutTitleBar;
export default Layout;