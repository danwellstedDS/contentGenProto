"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neatToken2AntToken;
/**
 * @file neatToken2AntToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Types

function neatToken2AntToken(theme) {
  var token = theme.components.Radio;
  return {
    buttonBg: token['radio-color-bg-off'],
    wireframe: false,
    dotSize: 6,
    radioSize: token['radio-size-medium']
  };
}