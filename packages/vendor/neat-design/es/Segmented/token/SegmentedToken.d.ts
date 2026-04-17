/**
 * @file SegmentedToken.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
export interface SegmentedToken {
    /**
     * Color
     */
    'segmented-color-text': string;
    'segmented-color-text-hover': string;
    'segmented-color-text-active': string;
    'segmented-color-text-press': string;
    'segmented-color-text-disabled': string;
    'segmented-color-icon': string;
    'segmented-color-icon-hover': string;
    'segmented-color-icon-active': string;
    'segmented-color-icon-press': string;
    'segmented-color-icon-disabled': string;
    'segmented-color-bg': string;
    'segmented-color-bg-disabled': string;
    'segmented-color-bg-item-hover': string;
    'segmented-color-bg-item-press': string;
    'segmented-color-bg-item-active': string;
    /**
     * Font Size
     */
    'segmented-font-size-small': number;
    'segmented-font-size-medium': number;
    'segmented-font-size-large': number;
    /**
     * Line Height
     */
    /**
     * @deprecated
     * antd 需要靠line height 居中。所以不设置。
     */
    'segmented-line-height-small': string;
    /**
     * antd 需要靠line height 居中。所以不设置。
     * @deprecated
     */
    'segmented-line-height-medium': string;
    /**
     * antd 需要靠line height 居中。所以不设置。
     * @deprecated
     */
    'segmented-line-height-large': string;
    /**
     * Size
     */
    'segmented-size-small': number;
    'segmented-size-medium': number;
    'segmented-size-large': number;
    'segmented-size-icon-small': number;
    'segmented-size-icon-medium': number;
    'segmented-size-icon-large': number;
    /**
     * Spacing
     */
    /** 选项外 */
    'segmented-gap-item-small': number;
    'segmented-gap-item-medium': number;
    'segmented-gap-item-large': number;
    'segmented-padding-item': number;
    /** 选项内 */
    'segmented-gap': number;
    'segmented-padding-small': number;
    'segmented-padding-medium': number;
    'segmented-padding-large': number;
    'segmented-padding-icon-small': number;
    'segmented-padding-icon-medium': number;
    'segmented-padding-icon-large': number;
    /**
     * Borem Height
     */
    'segmented-border-radius-small': number;
    'segmented-border-radius-medium': number;
    'segmented-border-radius-large': number;
}
