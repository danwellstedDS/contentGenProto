/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
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