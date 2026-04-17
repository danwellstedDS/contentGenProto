import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';
import { getShadowRoot } from 'rc-util/lib/Dom/shadow';
import warn from 'rc-util/lib/warning';
import React, { useContext, useEffect } from 'react';
import type { CSSProperties, MouseEventHandler, MutableRefObject, ReactNode } from 'react'
import IconContext from './components/Context';

function camelCase(input: string) {
  return input.replace(/-(.)/g, (match, g) => g.toUpperCase());
}

export function warning(valid: boolean, message: string) {
  warn(valid, `[@neat-design/icons] ${message}`);
}

export function normalizeAttrs(attrs: Attrs = {}): Attrs {
  return Object.keys(attrs).reduce((acc: Attrs, key) => {
    const val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}

export type Attrs = Record<string, string>;
interface RootProps {
  onClick: MouseEventHandler<Element>;
  style: CSSProperties;
  ref: MutableRefObject<any>
  [props: string]: string | number | ReactNode | MouseEventHandler<Element> | CSSProperties | MutableRefObject<any>
}

export function normalizeTwoToneColors(
  twoToneColor: string | [string, string] | undefined,
): string[] {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false',
};

export const iconStyles = `
.neaticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.neaticon > * {
  line-height: 1;
}

.neaticon svg {
  display: inline-block;
}

.neaticon::before {
  display: none;
}

.neaticon .neaticon-icon {
  display: block;
}

.neaticon[tabindex] {
  cursor: pointer;
}

.neaticon-spin::before,
.neaticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.neaticon-spin-anti::before,
.neaticon-spin-anti {
  display: inline-block;
  -webkit-animation: loadingCircleAnti 1s infinite linear;
  animation: loadingCircleAnti 1s infinite linear;
}

@-webkit-keyframes loadingCircleAnti {
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes loadingCircleAnti {
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
`;

export const useInsertStyles = (eleRef: React.RefObject<SVGSVGElement | HTMLElement>) => {
  const { csp, prefixCls } = useContext(IconContext);
  let mergedStyleStr = iconStyles;

  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/neaticon/g, prefixCls);
  }

  useEffect(() => {
    const ele = eleRef.current;
    const shadowRoot = getShadowRoot(ele);

    updateCSS(mergedStyleStr, '@neat-design-icons', {
      prepend: true,
      csp,
      attachTo: shadowRoot,
    });
  }, []);
};
