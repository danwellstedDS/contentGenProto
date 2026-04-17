/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

import InternalDrawer from "./Drawer";
import DrawerFooter from "./DrawerFooter";
var Drawer = InternalDrawer;
Drawer.Footer = DrawerFooter;
export default Drawer;