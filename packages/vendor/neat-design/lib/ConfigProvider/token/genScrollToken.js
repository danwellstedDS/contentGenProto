"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genScrollToken;
/**
 * @file genScrollToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function genScrollToken(token) {
  return {
    /**
     * Size
     */
    'scroll-size': token['size-static-6'],
    /**
     * Spacing
     */
    'scroll-padding': token['spacing-extra-tight'],
    /**
     * Border Radius
     */
    'scroll-border-radius': token['border-radius-circle']
  };
}