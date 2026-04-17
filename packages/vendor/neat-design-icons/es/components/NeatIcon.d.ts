import React from 'react';
import type { IconBaseProps } from './Icon';
export interface NeatIconProps extends IconBaseProps {
}
export interface IconComponentProps extends NeatIconProps {
    component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
interface IconBaseComponent<Props> extends React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>> {
}
declare const Icon: IconBaseComponent<IconComponentProps>;
export default Icon;
