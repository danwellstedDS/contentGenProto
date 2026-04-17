"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _InputNumber = _interopRequireDefault(require("./InputNumber"));
var _InputStepper = _interopRequireDefault(require("./InputStepper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var InputNumber = _InputNumber.default;
InputNumber.Stepper = _InputStepper.default;
var _default = exports.default = InputNumber;