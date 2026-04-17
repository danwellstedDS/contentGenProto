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
  var popoverToken = theme.components.Popover;
  return {
    titleMinWidth: 284
    // zIndexPopup: number;
    // innerPadding: number;
    // titlePadding: number | string;
    // titleMarginBottom: number;
    // titleBorderBottom: string;
    // innerContentPadding: number | string;
  };
}