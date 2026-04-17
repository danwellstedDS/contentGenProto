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
    'label-color-text': token['color-text-secondary'],
    'label-color-text-required': token['color-text-negative'],
    'label-color-text-optional': token['color-text-placeholder'],
    'label-color-icon': token['color-icon-secondary'],
    'label-font-size-small': token['font-size-body-small'],
    'label-font-size-medium': token['font-size-body-medium'],
    'label-font-size-large': token['font-size-body-large'],
    'label-line-height-small': token['line-height-static-16'],
    'label-line-height-medium': token['line-height-static-20'],
    'label-line-height-large': token['line-height-static-24'],
    'label-size-icon-small': token['size-2x'],
    'label-size-icon-medium': token['size-2x'],
    'label-size-icon-large': token['size-static-20'],
    'label-gap-item': token['spacing-extra-tight']
  };
}