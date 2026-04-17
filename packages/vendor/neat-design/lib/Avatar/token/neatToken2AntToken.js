"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neatToken2AntToken;
/**
 * @file neatToken2AntToken.ts
 * @author Peter(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function neatToken2AntToken(theme) {
  var token = theme.components.Avatar;
  return {
    containerSize: token['avatar-size-medium'],
    containerSizeLG: token['avatar-size-large'],
    containerSizeSM: token['avatar-size-small'],
    groupBorderColor: token['avatar-color-border'],
    groupOverlapping: token['avatar-group-gap'],
    textFontSize: token['avatar-font-size-medium'],
    textFontSizeLG: token['avatar-font-size-large'],
    textFontSizeSM: token['avatar-font-size-small']
  };
}