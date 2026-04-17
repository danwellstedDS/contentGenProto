import * as React from 'react';
import { useInsertStyles } from '../utils';
import { TwoToneColorsTypes } from '.';

export interface IconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  twoToneColors?: TwoToneColorsTypes;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
  focusable?: 'true' | 'false' | "auto";
}

interface IconBaseComponent<P> extends React.FC<P> { }

const IconBase: IconBaseComponent<IconProps> = (props) => {
  const { icon: Icon, className, onClick, style, twoToneColors, ...restProps } = props;

  const svgRef = React.useRef<SVGSVGElement>();

  useInsertStyles(svgRef);

  return <Icon
    className={className}
    onClick={onClick}
    style={style}
    width='1em'
    height='1em'
    fill='currentColor'
    aria-hidden='true'
    {...restProps}
    {...twoToneColors}
    ref={svgRef}
  />
};

IconBase.displayName = 'IconReact';

export default IconBase;
