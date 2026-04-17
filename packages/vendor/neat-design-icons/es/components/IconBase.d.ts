import * as React from 'react';
import { TwoToneColorsTypes } from '.';
export interface IconProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    twoToneColors?: TwoToneColorsTypes;
    className?: string;
    onClick?: React.MouseEventHandler<SVGSVGElement>;
    style?: React.CSSProperties;
    focusable?: 'true' | 'false' | "auto";
}
interface IconBaseComponent<P> extends React.FC<P> {
}
declare const IconBase: IconBaseComponent<IconProps>;
export default IconBase;
