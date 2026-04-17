/**
 * @file AlertToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
export interface AlertToken {
    /**
     * Color
     */
    'alert-color-text': string;
    'alert-color-text-link': string;
    'alert-color-text-link-hover': string;
    'alert-color-text-link-disabled': string;
    'alert-color-icon-info': string;
    'alert-color-icon-success': string;
    'alert-color-icon-warning': string;
    'alert-color-icon-error': string;
    'alert-color-bg-info': string;
    'alert-color-bg-success': string;
    'alert-color-bg-warning': string;
    'alert-color-bg-error': string;
    'alert-color-border-info': string;
    'alert-color-border-success': string;
    'alert-color-border-warning': string;
    'alert-color-border-error': string;
    'alert-color-border-info-hover': string;
    'alert-color-border-success-hover': string;
    'alert-color-border-warning-hover': string;
    'alert-color-border-error-hover': string;
    /**
     * Font Size
     */
    'alert-font-size-title': number;
    'alert-font-size': number;
    'alert-font-size-link': number;
    /**
     * Line Height
     */
    'alert-line-height': string;
    /**
     * Size
     */
    'alert-size-icon': number;
    /**
     * Spacing
     */
    'alert-gap': number;
    'alert-gap-text': number;
    'alert-gap-action': number;
    'alert-padding-v': number;
    'alert-padding-h': number;
    /**
     * Border Radius
     */
    'alert-border-radius': number;
}
