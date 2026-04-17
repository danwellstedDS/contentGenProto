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
  var token = theme.components.Table;
  return {
    /**
     * Color
     */
    bodySortBg: token['table-color-bg'],
    borderColor: token['table-color-border'],
    fixedHeaderSortActiveBg: token['table-color-bg-header'],
    footerBg: token['table-color-bg-footer'],
    footerColor: token['table-color-text'],
    headerBg: token['table-color-bg-header'],
    headerColor: token['table-color-text'],
    headerFilterHoverBg: token['table-color-bg-header-hover'],
    headerSortActiveBg: token['table-color-bg-header'],
    headerSortHoverBg: token['table-color-bg-header-hover'],
    headerSplitColor: token['table-color-bg-header'],
    rowExpandedBg: token['table-color-bg'],
    rowHoverBg: token['table-color-bg-hover'],
    // rowSelectedBg: token['table-color-bg-active'],
    rowSelectedBg: undefined,
    rowSelectedHoverBg: token['table-color-bg-hover'],
    /**
     * Size
     */
    cellFontSize: token['table-font-size-large'],
    cellFontSizeMD: token['table-font-size-medium'],
    cellFontSizeSM: token['table-font-size-small'],
    cellPaddingInline: token['table-padding-h'],
    cellPaddingInlineMD: token['table-padding-h'],
    cellPaddingInlineSM: token['table-padding-h']
  };
}