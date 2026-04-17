"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _footer = _interopRequireDefault(require("./footer"));
var _panel = _interopRequireDefault(require("./panel"));
var _templateObject;
/**
 * @file rangePopup.ts
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
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var timePickerToken = componentsToken.TimePicker;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-picker-dropdown.", "-time-range-picker-dropdown {\n                ", ";\n                ", ";\n                padding: 0;\n\n                .", "-picker-range-arrow {\n                    display: none;\n                }\n\n                .", "-picker-panel-layout {\n                    > div {\n                        &:not(:first-child) {\n                            .", "-picker-panel {\n                                border-left: 1px solid\n                                    ", ";\n                            }\n                        }\n\n                        &:not(:last-child) .", "-picker-footer > * {\n                            display: none;\n                        }\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, (0, _panel.default)(utils), (0, _footer.default)(utils), prefixCls, prefixCls, prefixCls, timePickerToken['timepicker-color-divider'], prefixCls);
  });
};
var _default = exports.default = useStyle;