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
    'alert-color-text': token['color-text-primary'],
    'alert-color-text-link': token['color-text-link'],
    'alert-color-text-link-hover': token['color-text-link-hover'],
    'alert-color-text-link-disabled': token['color-text-link-disabled'],
    'alert-color-icon-info': token['color-info'],
    'alert-color-icon-success': token['color-positive'],
    'alert-color-icon-warning': token['color-notice'],
    'alert-color-icon-error': token['color-negative'],
    'alert-color-bg-info': token['color-info-sunken'],
    'alert-color-bg-success': token['color-positive-sunken'],
    'alert-color-bg-warning': token['color-notice-sunken'],
    'alert-color-bg-error': token['color-negative-sunken'],
    'alert-color-border-info': token['color-info-enhance'],
    'alert-color-border-success': token['color-positive-enhance'],
    'alert-color-border-warning': token['color-notice-enhance'],
    'alert-color-border-error': token['color-negative-enhance'],
    'alert-color-border-info-hover': token['color-info'],
    'alert-color-border-success-hover': token['color-positive'],
    'alert-color-border-warning-hover': token['color-notice'],
    'alert-color-border-error-hover': token['color-negative'],
    /**
     * Font Size
     */
    'alert-font-size-title': token['font-size-body-large'],
    'alert-font-size': token['font-size-body-medium'],
    'alert-font-size-link': token['font-size-body-small'],
    /**
     * Line Height
     */
    'alert-line-height': token['line-height-static-20'],
    /**
     * Size
     */
    'alert-size-icon': token['size-static-20'],
    /**
     * Spacing
     */
    'alert-gap': token['spacing-base'],
    'alert-gap-text': token['spacing-extra-tight'],
    'alert-gap-action': token['spacing-loose'],
    'alert-padding-v': token['spacing-base'],
    'alert-padding-h': token['spacing-base'],
    /**
     * Border Radius
     */
    'alert-border-radius': token['border-radius-base']
  };
}