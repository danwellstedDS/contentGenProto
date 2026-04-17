/**
 * @file ButtonToken.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
export interface ButtonToken {
    /**
     * Color
     */
    'button-color-bg-primary': string;
    'button-color-bg-primary-hover': string;
    'button-color-bg-primary-press': string;
    'button-color-bg-primary-focus': string;
    'button-color-bg-primary-active': string;
    'button-color-bg-primary-disabled': string;
    'button-color-bg-primary-danger': string;
    'button-color-bg-primary-danger-hover': string;
    'button-color-bg-primary-danger-press': string;
    'button-color-bg-primary-danger-focus': string;
    'button-color-bg-primary-danger-active': string;
    'button-color-bg-secondary': string;
    'button-color-bg-secondary-hover': string;
    'button-color-bg-secondary-press': string;
    'button-color-bg-secondary-focus': string;
    'button-color-bg-secondary-active': string;
    'button-color-bg-secondary-danger': string;
    'button-color-bg-secondary-danger-hover': string;
    'button-color-bg-secondary-danger-press': string;
    'button-color-bg-secondary-danger-focus': string;
    'button-color-bg-secondary-danger-active': string;
    'button-color-bg-tertiary-hover': string;
    'button-color-bg-tertiary-press': string;
    'button-color-bg-tertiary-focus': string;
    'button-color-bg-tertiary-active': string;
    'button-color-bg-tertiary-danger-hover': string;
    'button-color-bg-tertiary-danger-press': string;
    'button-color-bg-tertiary-danger-focus': string;
    'button-color-bg-tertiary-danger-active': string;
    'button-color-border-secondary': string;
    'button-color-border-secondary-press': string;
    'button-color-border-secondary-focus': string;
    'button-color-border-secondary-active': string;
    'button-color-border-secondary-disabled': string;
    'button-color-border-secondary-danger': string;
    'button-color-border-secondary-danger-press': string;
    'button-color-border-secondary-danger-focus': string;
    'button-color-border-secondary-danger-active': string;
    'button-color-icon-disabled': string;
    'button-color-icon-primary': string;
    'button-color-icon-secondary': string;
    'button-color-icon-secondary-press': string;
    'button-color-icon-secondary-focus': string;
    'button-color-icon-secondary-active': string;
    'button-color-icon-secondary-danger': string;
    'button-color-icon-secondary-danger-press': string;
    'button-color-icon-secondary-danger-focus': string;
    'button-color-icon-secondary-danger-active': string;
    'button-color-icon-tertiary': string;
    'button-color-icon-tertiary-press': string;
    'button-color-icon-tertiary-focus': string;
    'button-color-icon-tertiary-active': string;
    'button-color-icon-tertiary-danger': string;
    'button-color-icon-tertiary-danger-press': string;
    'button-color-icon-tertiary-danger-focus': string;
    'button-color-icon-tertiary-danger-active': string;
    'button-color-icon-tertiary-inline': string;
    'button-color-icon-tertiary-inline-focus': string;
    'button-color-icon-tertiary-inline-press': string;
    'button-color-icon-tertiary-inline-active': string;
    'button-color-text-disabled': string;
    'button-color-text-primary': string;
    'button-color-text-secondary': string;
    'button-color-text-secondary-press': string;
    'button-color-text-secondary-focus': string;
    'button-color-text-secondary-active': string;
    'button-color-text-secondary-danger': string;
    'button-color-text-secondary-danger-press': string;
    'button-color-text-secondary-danger-focus': string;
    'button-color-text-secondary-danger-active': string;
    'button-color-text-tertiary': string;
    'button-color-text-tertiary-press': string;
    'button-color-text-tertiary-focus': string;
    'button-color-text-tertiary-active': string;
    'button-color-text-inline': string;
    'button-color-text-inline-press': string;
    'button-color-text-inline-focus': string;
    'button-color-text-inline-active': string;
    'button-color-text-tertiary-inline': string;
    'button-color-text-tertiary-inline-focus': string;
    'button-color-text-tertiary-inline-press': string;
    'button-color-text-tertiary-inline-active': string;
    'button-color-text-tertiary-danger': string;
    'button-color-text-tertiary-danger-press': string;
    'button-color-text-tertiary-danger-focus': string;
    'button-color-text-tertiary-danger-active': string;
    'button-color-text-link': string;
    'button-color-text-link-hover': string;
    'button-color-text-link-focus': string;
    'button-color-text-link-press': string;
    /**
     * Font
     */
    'button-font-link-small': number;
    'button-font-link-medium': number;
    'button-font-link-large': number;
    'button-font-small': number;
    'button-font-medium': number;
    'button-font-large': number;
    /**
     * Line Height
     */
    'button-line-height-small': string;
    'button-line-height-medium': string;
    'button-line-height-large': string;
    /**
     * Size
     */
    'button-size-small': number;
    'button-size-medium': number;
    'button-size-large': number;
    'button-size-inline-small': number;
    'button-size-inline-medium': number;
    'button-size-inline-large': number;
    'button-size-icon-small': number;
    'button-size-icon-medium': number;
    'button-size-icon-large': number;
    'button-size-icon-only-small': number;
    'button-size-icon-only-medium': number;
    'button-size-icon-only-large': number;
    'button-size-icon-inline-small': number;
    'button-size-icon-inline-medium': number;
    'button-size-icon-inline-large': number;
    'button-size-load-inline-small': number;
    'button-size-load-inline-medium': number;
    'button-size-load-inline-large': number;
    'button-size-load-small': number;
    'button-size-load-medium': number;
    'button-size-load-large': number;
    'button-size-load-only-small': number;
    'button-size-load-only-medium': number;
    'button-size-load-only-large': number;
    /**
     * Border Radius
     */
    'button-border-radius-small': number;
    'button-border-radius-medium': number;
    'button-border-radius-large': number;
    'button-border-radius-inline-small': number;
    'button-border-radius-inline-medium': number;
    'button-border-radius-inline-large': number;
    /**
     * Spacing
     */
    'button-padding-h-small': number;
    'button-padding-h-medium': number;
    'button-padding-h-large': number;
    'button-padding-inline-h-small': number;
    'button-padding-inline-h-medium': number;
    'button-padding-inline-h-large': number;
    'button-gap': number;
}
