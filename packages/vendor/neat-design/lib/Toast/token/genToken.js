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
    'toast-color-text': token['color-text-primary'],
    'toast-color-text-link': token['color-text-link'],
    'toast-color-text-link-hover': token['color-text-link-hover'],
    'toast-color-text-link-press': token['color-text-link-press'],
    'toast-color-text-link-disabled': token['color-text-link-disabled'],
    'toast-color-icon-info': token['color-info'],
    'toast-color-icon-success': token['color-positive'],
    'toast-color-icon-warning': token['color-notice'],
    'toast-color-icon-error': token['color-negative'],
    'toast-color-bg-info': token['color-info-sunken'],
    'toast-color-bg-success': token['color-positive-sunken'],
    'toast-color-bg-warning': token['color-notice-sunken'],
    'toast-color-bg-error': token['color-negative-sunken'],
    /**
     * Font Size
     */
    'toast-font-size': token['font-size-body-medium'],
    'toast-font-size-link': token['font-size-body-small'],
    /**
     * Line Height
     */
    'toast-line-height': token['line-height-static-20'],
    /**
     * Size
     */
    'toast-size-icon': token['size-static-20'],
    /**
     * Spacing
     */
    'toast-gap': token['spacing-base-tight'],
    'toast-padding-v': token['spacing-base-tight'],
    'toast-padding-h': token['spacing-base'],
    /**
     * Border Radius
     */
    'toast-border-radius': token['border-radius-base']
  };
}