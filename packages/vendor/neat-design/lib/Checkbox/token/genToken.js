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
    'checkbox-color-bg-unselected': token['color-bg'],
    'checkbox-color-bg-unselected-disabled': token['color-bg-disabled'],
    'checkbox-color-bg-selected': token['color-primary'],
    'checkbox-color-bg-selected-hover': token['color-primary-hover'],
    'checkbox-color-bg-selected-press': token['color-primary-press'],
    'checkbox-color-bg-selected-disabled': token['color-bg-disabled'],
    'checkbox-color-border-unselected': token['color-border-enhance'],
    'checkbox-color-border-unselected-hover': token['color-primary'],
    'checkbox-color-border-unselected-press': token['color-primary-press'],
    'checkbox-color-border-unselected-disabled': token['color-border-disabled'],
    'checkbox-color-border-danger': token['color-negative'],
    'checkbox-color-icon-selected': token['color-icon-inverse'],
    'checkbox-color-icon-selected-disabled': token['color-icon-disabled'],
    'checkbox-color-icon-selected-danger': token['color-negative'],
    'checkbox-color-text': token['color-text-primary'],
    'checkbox-color-text-disabled': token['color-text-disabled'],
    /**
     * Font Size
     */
    'checkbox-font-size-small': token['font-size-body-small'],
    'checkbox-font-size-medium': token['font-size-body-medium'],
    'checkbox-font-size-large': token['font-size-body-large'],
    /**
     * Line Height
     */
    'checkbox-line-height-small': token['line-height-static-16'],
    'checkbox-line-height-medium': token['line-height-static-20'],
    'checkbox-line-height-large': token['line-height-static-24'],
    /**
     * Size
     */
    'checkbox-size-small': token['size-static-14'],
    'checkbox-size-medium': token['size-2x'],
    'checkbox-size-large': token['size-static-20'],
    'checkbox-size-group-small': token['size-4x'],
    'checkbox-size-group-medium': token['size-5x'],
    'checkbox-size-group-large': token['size-6x'],
    /**
     * Spacing
     */
    'checkbox-gap': token['spacing-tight'],
    'checkbox-gap-group-h-small': token['spacing-super-loose'],
    'checkbox-gap-group-v-small': token['spacing-base'],
    'checkbox-gap-group-h-medium': token['spacing-super-loose'],
    'checkbox-gap-group-v-medium': token['spacing-base-loose'],
    'checkbox-gap-group-h-large': token['spacing-super-loose'],
    'checkbox-gap-group-v-large': token['spacing-loose'],
    'checkbox-padding-group-v-small': token['spacing-tight'],
    'checkbox-padding-group-v-medium': token['spacing-static-10'],
    'checkbox-padding-group-v-large': token['spacing-base-tight']
  };
}