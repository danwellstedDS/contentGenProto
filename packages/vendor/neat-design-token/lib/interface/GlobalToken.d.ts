/**
 * @file GlobalToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type LadderColor from './LadderColor';
export default interface GlobalToken extends LadderColor {
    /**
     * Font Family
     */
    'font-family': string;
    'font-family-code': string;
    'font-family-number': string;
    'font-family-sc': string;
    'font-family-jp': string;
    /**
     * Font Size
     */
    'font-size-header-1': number;
    'font-size-header-2': number;
    'font-size-header-3': number;
    'font-size-header-4': number;
    'font-size-header-5': number;
    'font-size-body-extra-large': number;
    'font-size-body-large': number;
    'font-size-body-medium': number;
    'font-size-body-small': number;
    'font-size-footnote': number;
    /**
     * Font Weight
     */
    'font-weight-thin': number;
    'font-weight-extralight': number;
    'font-weight-light': number;
    'font-weight-regular': number;
    'font-weight-medium': number;
    'font-weight-semibold': number;
    'font-weight-bold': number;
    'font-weight-extrabold': number;
    'font-weight-black': number;
    /**
     * Line Height
     */
    'line-height-tight': number;
    'line-height-slightly-tight': number;
    'line-height-normal': number;
    'line-height-slightly-loose': number;
    'line-height-loose': number;
    'line-height-static-12': string;
    'line-height-static-14': string;
    'line-height-static-16': string;
    'line-height-static-20': string;
    'line-height-static-24': string;
    'line-height-static-28': string;
    'line-height-static-32': string;
    'line-height-static-36': string;
    'line-height-static-40': string;
    'line-height-static-44': string;
    /**
     * Border-Radius
     */
    'border-radius-none': number;
    'border-radius-small': number;
    'border-radius-base': number;
    'border-radius-circle': string;
    /**
     * Opacity
     */
    'opacity-0': number;
    'opacity-1': number;
    'opacity-2': number;
    'opacity-3': number;
    'opacity-4': number;
    'opacity-5': number;
    'opacity-6': number;
    'opacity-7': number;
    'opacity-8': number;
    'opacity-9': number;
    /**
     * Size
     */
    'size-none': number;
    'size-static-1': number;
    'size-static-2': number;
    'size-static-4': number;
    'size-static-6': number;
    'size-static-10': number;
    'size-static-12': number;
    'size-static-14': number;
    'size-static-18': number;
    'size-static-20': number;
    'size-static-28': number;
    'size-static-36': number;
    'size-base': number;
    'size-2x': number;
    'size-3x': number;
    'size-4x': number;
    'size-5x': number;
    'size-6x': number;
    'size-7x': number;
    'size-8x': number;
    'size-9x': number;
    'size-10x': number;
    'size-13x': number;
    'size-15x': number;
    'size-16x': number;
    'size-17x': number;
    'size-22x': number;
    'size-32x': number;
    'size-40x': number;
    'size-50x': number;
    'size-60x': number;
    'size-70x': number;
    'size-75x': number;
    'size-120x': number;
    'size-full': string;
    /**
     * Spacing
     */
    'spacing-none': number;
    'spacing-static-1': number;
    'spacing-super-tight': number;
    'spacing-static-3': number;
    'spacing-extra-tight': number;
    'spacing-slightly-tight': number;
    'spacing-tight': number;
    'spacing-static-10': number;
    'spacing-base-tight': number;
    'spacing-static-14': number;
    'spacing-base': number;
    'spacing-base-loose': number;
    'spacing-loose': number;
    'spacing-slightly-loose': number;
    'spacing-extra-loose': number;
    'spacing-static-36': number;
    'spacing-super-loose': number;
    'spacing-static-48': number;
    /**
     * Motion
     */
    'motion-easing': string;
    'motion-easing-decelerated': string;
    'motion-easing-accelerated': string;
    'motion-duration-tiny': number;
    'motion-duration-short': number;
    'motion-duration': number;
    'motion-duration-middle': number;
    'motion-duration-long': number;
    'motion-duration-extra-long': number;
    /**
     * Shadow
     */
    'shadow-0': string;
    'shadow-1': string;
    'shadow-2': string;
    'shadow-3': string;
    'shadow-4': string;
    'shadow-focus': string;
    'shadow-focus-negative': string;
}
