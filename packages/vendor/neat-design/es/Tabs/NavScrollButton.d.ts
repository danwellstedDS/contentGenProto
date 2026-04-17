/**
 * @file NavScrollButton.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { ButtonProps } from '../';
export interface NavScrollButtonProps extends ButtonProps {
    scrollEl?: HTMLElement;
    direction: 'left' | 'right';
}
declare const NavScrollButton: FC<NavScrollButtonProps>;
export default NavScrollButton;
