"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genToken;
/**
 * @file genToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Types

function genToken(token) {
  return {
    /**
     * Color
     */
    'breadcrumbs-color-text': token['color-text-secondary'],
    'breadcrumbs-color-text-active': token['color-text-primary'],
    'breadcrumbs-color-text-hover': token['color-text-link'],
    'breadcrumbs-color-text-press': token['color-text-link-press'],
    'breadcrumbs-color-text-disabled': token['color-text-disabled'],
    'breadcrumbs-color-icon': token['color-icon'],
    'breadcrumbs-color-icon-active': token['color-icon-enhance'],
    'breadcrumbs-color-icon-hover': token['color-info'],
    'breadcrumbs-color-icon-press': token['color-info-press'],
    'breadcrumbs-color-icon-disabled': token['color-icon-disabled'],
    /**
     * Font Size
     */
    'breadcrumbs-font-size': token['font-size-body-medium'],
    /**
     * Line Height
     */
    'breadcrumbs-line-height': token['line-height-static-20'],
    /**
     * Size
     */
    'breadcrumb-size-icon': token['size-static-12'],
    /**
     * Spacing
     */
    'breadcrumbs-gap': token['spacing-tight']
  };
}