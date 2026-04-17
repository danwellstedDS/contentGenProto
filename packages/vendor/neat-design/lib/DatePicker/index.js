"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TimePicker = _interopRequireDefault(require("../TimePicker"));
var _DatePicker = _interopRequireDefault(require("./DatePicker"));
var _MonthPicker = _interopRequireDefault(require("./MonthPicker"));
var _QuarterPicker = _interopRequireDefault(require("./QuarterPicker"));
var _RangePicker = _interopRequireDefault(require("./RangePicker"));
var _YearPicker = _interopRequireDefault(require("./YearPicker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var DatePicker = _DatePicker.default;
DatePicker.MonthPicker = _MonthPicker.default;
DatePicker.TimePicker = _TimePicker.default;
DatePicker.YearPicker = _YearPicker.default;
DatePicker.QuarterPicker = _QuarterPicker.default;
DatePicker.RangePicker = _RangePicker.default;
var _default = exports.default = DatePicker;