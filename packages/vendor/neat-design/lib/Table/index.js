"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EmptyText", {
  enumerable: true,
  get: function get() {
    return _EmptyText.default;
  }
});
exports.default = void 0;
var _antd = require("antd");
var _Table = _interopRequireDefault(require("./Table"));
var _TableAvatar = _interopRequireDefault(require("./TableAvatar"));
var _TableAvatarGroup = _interopRequireDefault(require("./TableAvatarGroup"));
var _TableBadge = _interopRequireDefault(require("./TableBadge"));
var _TableButton = _interopRequireDefault(require("./TableButton"));
var _TableDatePicker = _interopRequireDefault(require("./TableDatePicker"));
var _TableInput = _interopRequireDefault(require("./TableInput"));
var _TableInputNumber = _interopRequireDefault(require("./TableInputNumber"));
var _TableMonthPicker = _interopRequireDefault(require("./TableMonthPicker"));
var _TableQuarterPicker = _interopRequireDefault(require("./TableQuarterPicker"));
var _TableRangePicker = _interopRequireDefault(require("./TableRangePicker"));
var _TableSelect = _interopRequireDefault(require("./TableSelect"));
var _TableSwitch = _interopRequireDefault(require("./TableSwitch"));
var _TableTag = _interopRequireDefault(require("./TableTag"));
var _TableTimePicker = _interopRequireDefault(require("./TableTimePicker"));
var _TableYearPicker = _interopRequireDefault(require("./TableYearPicker"));
var _EmptyText = _interopRequireDefault(require("./EmptyText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Components

/**
 * Avatar
 */

var TableAvatar = _TableAvatar.default;
TableAvatar.Group = _TableAvatarGroup.default;

/**
 * DatePicker
 */

var TableDatePicker = _TableDatePicker.default;
TableDatePicker.MonthPicker = _TableMonthPicker.default;
TableDatePicker.TimePicker = _TableTimePicker.default;
TableDatePicker.YearPicker = _TableYearPicker.default;
TableDatePicker.QuarterPicker = _TableQuarterPicker.default;
TableDatePicker.RangePicker = _TableRangePicker.default;

/**
 * Table
 */

var Table = _Table.default;
Table.SELECTION_COLUMN = _antd.Table.SELECTION_COLUMN;
Table.EXPAND_COLUMN = _antd.Table.EXPAND_COLUMN;
Table.SELECTION_ALL = _antd.Table.SELECTION_ALL;
Table.SELECTION_INVERT = _antd.Table.SELECTION_INVERT;
Table.SELECTION_NONE = _antd.Table.SELECTION_NONE;
Table.Column = _antd.Table.Column;
Table.ColumnGroup = _antd.Table.ColumnGroup;
Table.Summary = _antd.Table.Summary;
Table.Button = _TableButton.default;
Table.Tag = _TableTag.default;
Table.Badge = _TableBadge.default;
Table.Input = _TableInput.default;
Table.InputNumber = _TableInputNumber.default;
Table.Select = _TableSelect.default;
Table.Avatar = TableAvatar;
Table.Switch = _TableSwitch.default;
Table.DatePicker = TableDatePicker;
var _default = exports.default = Table;