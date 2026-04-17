"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neatToken2AntToken;
/**
 * @file neatToken2AntToken.ts
 * @author rzh(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function neatToken2AntToken(theme) {
  var token = theme.components.Switch;
  return {
    handleBg: token['switch-color-fill-off'],
    handleSize: token['switch-size-fill-medium'],
    handleSizeSM: token['switch-size-fill-small'],
    trackHeight: token['switch-size-v-medium'],
    trackHeightSM: token['switch-size-v-small'],
    trackMinWidth: token['switch-size-h-medium'],
    trackMinWidthSM: token['switch-size-h-small'],
    colorPrimary: token['switch-color-bg-on'],
    colorPrimaryHover: token['switch-color-bg-on-hover'],
    colorTextQuaternary: token['switch-color-bg-off'],
    colorTextTertiary: token['switch-color-bg-off-hover']
  };
}