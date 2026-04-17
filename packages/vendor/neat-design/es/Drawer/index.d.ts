/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import InternalDrawer from './Drawer';
import DrawerFooter from './DrawerFooter';
type InternalDrawerType = typeof InternalDrawer;
type CompoundedComponent = InternalDrawerType & {
    Footer: typeof DrawerFooter;
};
declare const Drawer: CompoundedComponent;
export type { DrawerProps } from './Drawer';
export type { DrawerFooterProps } from './DrawerFooter';
export default Drawer;
