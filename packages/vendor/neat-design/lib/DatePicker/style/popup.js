"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _datePickerPopup = _interopRequireDefault(require("./datePickerPopup"));
var _decadePickerPopup = _interopRequireDefault(require("./decadePickerPopup"));
var _monthPickerPopup = _interopRequireDefault(require("./monthPickerPopup"));
var _quarterPickerPopup = _interopRequireDefault(require("./quarterPickerPopup"));
var _rangePickerPopup = _interopRequireDefault(require("./rangePickerPopup"));
var _timePickerPopup = _interopRequireDefault(require("./timePickerPopup"));
var _yearPickerPopup = _interopRequireDefault(require("./yearPickerPopup"));
var _templateObject;
/**
 * @file popup.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Styles
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-picker-dropdown {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), prefixCls, (0, _datePickerPopup.default)(utils), (0, _decadePickerPopup.default)(utils), (0, _monthPickerPopup.default)(utils), (0, _quarterPickerPopup.default)(utils), (0, _rangePickerPopup.default)(utils), (0, _yearPickerPopup.default)(utils), (0, _timePickerPopup.default)(utils));
  });
};
var _default = exports.default = useStyle;