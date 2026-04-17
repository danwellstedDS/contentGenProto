"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genToken;
/**
 * @file genToken.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Types

function genToken(token) {
  return {
    /**
     * Color
     */
    'segmented-color-text': token['neutral-23'],
    'segmented-color-text-hover': token['color-primary'],
    'segmented-color-text-active': token['color-primary'],
    'segmented-color-text-press': token['color-primary-press'],
    'segmented-color-text-disabled': token['color-text-disabled'],
    'segmented-color-icon': token['color-icon'],
    'segmented-color-icon-hover': token['color-primary'],
    'segmented-color-icon-active': token['color-primary'],
    'segmented-color-icon-press': token['color-primary-press'],
    'segmented-color-icon-disabled': token['color-icon-disabled'],
    'segmented-color-bg': token['color-bg-raised'],
    'segmented-color-bg-disabled': token['color-bg-disabled'],
    'segmented-color-bg-item-hover': token['neutral-1'],
    'segmented-color-bg-item-press': token['neutral-2'],
    'segmented-color-bg-item-active': token['color-bg'],
    /**
     * Font Size
     */
    'segmented-font-size-small': token['font-size-body-small'],
    'segmented-font-size-medium': token['font-size-body-medium'],
    'segmented-font-size-large': token['font-size-body-large'],
    /**
     * Line Height
     */
    'segmented-line-height-small': token['line-height-static-16'],
    'segmented-line-height-medium': token['line-height-static-20'],
    'segmented-line-height-large': token['line-height-static-24'],
    /**
     * Size
     */
    'segmented-size-small': token['size-4x'],
    'segmented-size-medium': token['size-5x'],
    'segmented-size-large': token['size-6x'],
    'segmented-size-icon-small': token['size-static-12'],
    'segmented-size-icon-medium': token['size-2x'],
    'segmented-size-icon-large': token['size-static-20'],
    /**
     * Spacing
     */
    /** 选项外 */
    'segmented-gap-item-small': token['spacing-super-tight'],
    'segmented-gap-item-medium': token['spacing-extra-tight'],
    'segmented-gap-item-large': token['spacing-slightly-tight'],
    'segmented-padding-item': token['spacing-extra-tight'],
    /** 选项内 */
    'segmented-gap': token['spacing-tight'],
    'segmented-padding-small': token['spacing-base'],
    'segmented-padding-medium': token['spacing-loose'],
    'segmented-padding-large': token['spacing-extra-loose'],
    'segmented-padding-icon-small': token['spacing-base-tight'],
    'segmented-padding-icon-medium': token['spacing-base'],
    'segmented-padding-icon-large': token['spacing-base-loose'],
    /**
     * Border Height
     */
    'segmented-border-radius-small': token['border-radius-small'],
    'segmented-border-radius-medium': token['border-radius-base'],
    'segmented-border-radius-large': token['border-radius-base']
  };
}