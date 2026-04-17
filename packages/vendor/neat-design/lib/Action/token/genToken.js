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
    'action-color-border': token['color-border-divider'],
    'action-footer-gap': token['spacing-base'],
    'action-footer-padding-h': token['spacing-loose'],
    'action-footer-padding-v': token['spacing-base-loose'],
    'action-picker-gap': token['spacing-tight'],
    'action-picker-padding-h': token['spacing-base-tight'],
    'action-picker-padding-v': token['spacing-tight']
  };
}