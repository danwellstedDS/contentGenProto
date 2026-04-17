'use client';

import React from 'react';
import classNames from 'classnames';

import Context from './Context';
import ReactIcon from './IconBase';

import type { IconBaseProps } from './Icon';

export interface NeatIconProps extends IconBaseProps { }

export interface IconComponentProps extends NeatIconProps {
  component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface IconBaseComponent<Props> extends React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>> { }

const defaultTwoToneColors = {
  primary: "#06789D",
  secondary: "#58A5BD",
  tertiary: "#B2D5E1",
}, defaultDisabledTwoToneColors = {
  primary: "#ABB8C2",
  secondary: "#CED5DB",
  tertiary: "#DADFE3",
}, defaultInverseTwoToneColors = {
  primary: "#FFFFFF",
  secondary: "#FFFFFF99",
  tertiary: "#B2D5E1",
}


const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
  const {
    // affect outter <i>...</i>
    className,

    // affect inner <svg>...</svg>
    component: Component,
    spin,
    rotate,
    anti = false,

    disabled = false,
    inverse = false,

    isTwoTone = false,

    tabIndex,
    onClick,

    ...restProps
  } = props;

  const {
    prefixCls = 'neaticon',
    rootClassName,
    twoToneColors = defaultTwoToneColors,
    disabledTwoToneColors = defaultDisabledTwoToneColors,
    inverseTwoToneColors = defaultInverseTwoToneColors
  } = React.useContext(Context);

  const { displayName: componentName } = Component || {}

  if (!Component) return null

  const classString = classNames(
    rootClassName,
    prefixCls,
    {
      [`${prefixCls}-${componentName}`]: !!componentName,
      [`${prefixCls}-spin`]: !!spin,
      [`${prefixCls}-spin-anti`]: !!spin && !!anti
    },
    className,
  );

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  const svgStyle = rotate
    ? {
      msTransform: `rotate(${rotate}deg)`,
      transform: `rotate(${rotate}deg)`,
    }
    : undefined,

    computedTwoToneColors = disabled ?
      disabledTwoToneColors
      : inverse ?
        inverseTwoToneColors
        : twoToneColors,

    twoToneProps = isTwoTone ? {
      twoToneColors: computedTwoToneColors
    } : {}

  return (
    <span
      role="img"
      aria-label={componentName}
      {...restProps}
      ref={ref}
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
    >
      <ReactIcon
        icon={Component}
        {...twoToneProps}
        style={svgStyle}
      />
    </span>
  );
}) as IconBaseComponent<IconComponentProps>;

Icon.displayName = 'NeatIcon';

export default Icon;
