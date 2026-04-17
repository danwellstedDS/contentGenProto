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
    'arrow-icon-color': token['color-icon'],
    'arrow-icon-color-hover': token['color-primary'],
    'arrow-icon-color-press': token['color-primary-press'],
    'arrow-icon-color-disabled': token['color-icon-disabled'],
    'arrow-icon-size': token['size-2x']
  };
}