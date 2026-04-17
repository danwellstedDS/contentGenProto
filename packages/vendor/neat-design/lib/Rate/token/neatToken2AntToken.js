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
  var token = theme.components.Rate;
  return {
    starColor: token['rate-color-selected'],
    starBg: token['rate-color-default'],
    starHoverScale: 'scale(1.2)'
  };
}