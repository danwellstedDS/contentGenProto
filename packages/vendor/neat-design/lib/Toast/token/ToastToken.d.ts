/**
 * @file ToastToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
export interface ToastToken {
    /**
     * Color
     */
    'toast-color-text': string;
    'toast-color-text-link': string;
    'toast-color-text-link-hover': string;
    'toast-color-text-link-press': string;
    'toast-color-text-link-disabled': string;
    'toast-color-icon-info': string;
    'toast-color-icon-success': string;
    'toast-color-icon-warning': string;
    'toast-color-icon-error': string;
    'toast-color-bg-info': string;
    'toast-color-bg-success': string;
    'toast-color-bg-warning': string;
    'toast-color-bg-error': string;
    /**
     * Font Size
     */
    'toast-font-size': number;
    'toast-font-size-link': number;
    /**
     * Line Height
     */
    'toast-line-height': string;
    /**
     * Size
     */
    'toast-size-icon': number;
    /**
     * Spacing
     */
    'toast-gap': number;
    'toast-padding-v': number;
    'toast-padding-h': number;
    /**
     * Border-Radius
     */
    'toast-border-radius': number;
}
