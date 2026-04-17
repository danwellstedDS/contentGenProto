/**
 * @file DrawerContext.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import type { DrawerProps } from './Drawer';
interface Context {
    placement?: DrawerProps['placement'];
    onClose?: DrawerProps['onClose'];
}
declare const DrawerContext: React.Context<Context>;
export default DrawerContext;
