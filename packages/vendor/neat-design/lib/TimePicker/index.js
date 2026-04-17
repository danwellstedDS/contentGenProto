"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _RangePicker = _interopRequireDefault(require("./RangePicker"));
var _TimePicker = _interopRequireDefault(require("./TimePicker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var TimePicker = _TimePicker.default;
TimePicker.RangePicker = _RangePicker.default;
var _default = exports.default = TimePicker;