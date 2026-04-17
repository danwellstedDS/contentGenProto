"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genToken;
/**
 * @file genToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function genToken(token) {
  return {
    /**
     * Color
     */
    'tabs-color-text': token['neutral-23'],
    'tabs-color-text-hover': token['color-primary'],
    'tabs-color-text-active': token['color-primary'],
    'tabs-color-text-press': token['color-primary-press'],
    'tabs-color-text-disabled': token['color-text-disabled'],
    'tabs-color-icon': token['color-icon'],
    'tabs-color-icon-hover': token['color-primary'],
    'tabs-color-icon-active': token['color-primary'],
    'tabs-color-icon-press': token['color-primary-press'],
    'tabs-color-icon-disabled': token['color-icon-disabled'],
    'tabs-color-bg': token['color-bg'],
    'tabs-color-bg-item': token['color-bg-raised'],
    'tabs-color-bg-item-hover': token['color-bg-hover'],
    'tabs-color-bg-item-press': token['color-bg-press'],
    'tabs-color-bg-item-active': token['color-bg'],
    'tabs-color-bg-item-disabled': token['color-bg-disabled'],
    'tabs-color-border': token['color-border-divider'],
    'tabs-color-border-active': token['color-primary'],
    /**
     * Font Size
     */
    'tabs-font-size-small': token['font-size-body-small'],
    'tabs-font-size-medium': token['font-size-body-medium'],
    'tabs-font-size-large': token['font-size-body-large'],
    /**
     * Line Height
     */
    'tabs-line-height-small': token['line-height-static-16'],
    'tabs-line-height-medium': token['line-height-static-20'],
    'tabs-line-height-large': token['line-height-static-24'],
    /**
     * Size
     */
    'tabs-size-small': token['size-4x'],
    'tabs-size-medium': token['size-5x'],
    'tabs-size-large': token['size-6x'],
    'tabs-size-icon-small': token['size-static-12'],
    'tabs-size-icon-medium': token['size-2x'],
    'tabs-size-icon-large': token['size-static-20'],
    'tabs-size-arrow-small': token['size-static-12'],
    'tabs-size-arrow-medium': token['size-2x'],
    'tabs-size-arrow-large': token['size-static-20'],
    /**
     * Spacing
     */
    'tabs-gap': token['spacing-base'],
    'tabs-gap-item': token['spacing-tight'],
    'tabs-padding-arrow-small': token['spacing-tight'],
    'tabs-padding-arrow-medium': token['spacing-tight'],
    'tabs-padding-arrow-large': token['spacing-base'],
    'tabs-padding-small': token['spacing-base'],
    'tabs-padding-medium': token['spacing-loose'],
    'tabs-padding-large': token['spacing-extra-loose'],
    /**
     * Border Radius
     */
    'tabs-border-radius-small': token['border-radius-small'],
    'tabs-border-radius-medium': token['border-radius-base'],
    'tabs-border-radius-large': token['border-radius-base']
  };
}