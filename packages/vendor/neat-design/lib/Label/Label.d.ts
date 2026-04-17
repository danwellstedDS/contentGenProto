/**
 * @file Label.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC, HTMLAttributes, ReactNode } from 'react';
export type Type = 'arrow-down' | 'arrow-up' | 'arrow-right' | 'arrow-left' | 'search';
export type Size = 'small' | 'medium' | 'large';
export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    size?: Size;
    optional?: boolean;
    required?: boolean;
    tooltips?: ReactNode;
}
declare const Label: FC<LabelProps>;
export default Label;
