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
  var stepsToken = theme.components.Steps;
  return {
    customIconFontSize: stepsToken['steps-size-icon-medium'],
    customIconSize: stepsToken['steps-size-icon-medium'],
    // customIconTop: 0,
    descriptionMaxWidth: 240,
    dotCurrentSize: stepsToken['steps-size-dot'],
    dotSize: stepsToken['steps-size-dot'],
    iconFontSize: theme.token['font-size-body-large'],
    iconSize: stepsToken['steps-size-icon-medium'],
    iconSizeSM: stepsToken['steps-size-icon-small'],
    // iconTop: -0.5,
    // navArrowColor: 'rgba(0,0,0,0.25)',
    // navContentMaxWidth: 'unset',
    titleLineHeight: stepsToken['steps-size-title-medium']
  };
}