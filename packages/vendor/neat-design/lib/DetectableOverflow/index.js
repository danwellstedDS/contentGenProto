"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactDetectableOverflow = require("react-detectable-overflow");
var _DetectableOverflow = _interopRequireDefault(require("./DetectableOverflow"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var DetectableOverflow = _DetectableOverflow.default;
DetectableOverflow.useOverflowDetector = _reactDetectableOverflow.useOverflowDetector;
var _default = exports.default = DetectableOverflow;