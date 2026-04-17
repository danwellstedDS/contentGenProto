/**
 * @file Menu.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { MenuProps as AntMenuProps } from 'antd';
export interface MenuProps extends Omit<AntMenuProps, 'mode'> {
    mode?: 'inline' | 'horizontal';
}
declare const Menu: ({ className, mode, inlineCollapsed, items, selectable, multiple, disabled, inlineIndent, expandIcon, ...restProps }: MenuProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Menu;
