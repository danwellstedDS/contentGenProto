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
  var token = theme.token;
  var modalToken = theme.components.Modal;
  return {
    contentBg: modalToken['modal-color-bg'],
    titleColor: modalToken['modal-color-text'],
    titleFontSize: token['font-size-header-5'],
    titleLineHeight: token['line-height-static-28']
  };
}