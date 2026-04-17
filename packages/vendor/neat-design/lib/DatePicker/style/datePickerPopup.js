"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pickerHeader = _interopRequireDefault(require("./pickerHeader"));
var _templateObject;
/**
 * @file datePickerPopup.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Styles
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Types
var _default = exports.default = function _default(utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    token = utils.token;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-picker-date-panel {\n            width: 280px;\n\n            .", "-picker-header {\n                ", "\n\n                .", "-picker-header-super-prev-btn,\n                        .", "-picker-header-super-next-btn {\n                    display: none;\n                }\n            }\n\n            .", "-picker-body {\n                padding: 0 14px 12px;\n\n                .", "-picker-content {\n                    th {\n                        width: 36px;\n                        height: 40px;\n                        padding: 0 2px 4px;\n                    }\n\n                    td {\n                        padding: 4px 0;\n                    }\n                }\n            }\n        }\n\n        .", "-picker-footer {\n            .", "-picker-now-btn {\n                color: ", ";\n            }\n        }\n    "])), prefixCls, prefixCls, (0, _pickerHeader.default)(utils), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, token['color-primary']);
};