/**
 * @file ArrowIcon.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC, HTMLAttributes } from 'react';
export type Type = 'arrow-down' | 'arrow-up' | 'arrow-right' | 'arrow-left' | 'search';
export interface ArrowIconProps extends HTMLAttributes<HTMLDivElement> {
    type?: Type;
    disabled?: boolean;
}
declare const ArrowIcon: FC<ArrowIconProps>;
export default ArrowIcon;
