"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBarMaxWidth = void 0;
var _position = require("./position");
/**
 * @file size.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Vendors

// Types

var getBarMaxWidth = exports.getBarMaxWidth = function getBarMaxWidth(boundSize, boundsGap) {
  var boundsGapArr = (0, _position.formatBoundsGap)(boundsGap);
  return boundSize.offsetWidth - boundsGapArr[1] - boundsGapArr[3];
};