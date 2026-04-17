"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neatToken2AntToken;
/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function neatToken2AntToken(theme) {
  var token = theme.components.Pagination;
  return {
    /**
     * Color
     */
    itemActiveBg: token['pagination-color-bg-active'],
    itemActiveBgDisabled: 'transparent',
    itemActiveColorDisabled: token['pagination-color-text-disabled'],
    itemBg: 'transparent',
    itemInputBg: '#ffffff',
    itemLinkBg: '#ffffff',
    /**
     * Size
     */
    itemSize: token['pagination-size-medium'],
    itemSizeSM: token['pagination-size-small']
  };
}