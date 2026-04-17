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
  var progressToken = theme.components.Progress;
  return {
    defaultColor: progressToken['progress-color-bg-filled'],
    remainingColor: progressToken['progress-color-bg-empty'],
    circleTextColor: progressToken['progress-color-text'],
    // lineBorderRadius: number;
    circleTextFontSize: "".concat(progressToken['progress-font-size-medium'], "px"),
    circleIconFontSize: "".concat(progressToken['progress-size-label-v-medium'], "px")
  };
}