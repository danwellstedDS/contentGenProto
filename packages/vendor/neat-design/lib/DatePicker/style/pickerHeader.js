"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file pickerHeader.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    ladderColor = _ref.ladderColor;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        padding: 0 16px;\n        border-bottom: none;\n\n        .", "-picker-header-view {\n            font-weight: 500;\n            color: ", ";\n        }\n\n        .", "-picker-header-prev-btn,\n            .", "-picker-header-next-btn,\n            .", "-picker-header-super-prev-btn,\n            .", "-picker-header-super-next-btn {\n            width: 16px;\n            min-width: unset;\n            font-size: 16px;\n        }\n    "])), prefixCls, ladderColor['neutral-21'], prefixCls, prefixCls, prefixCls, prefixCls);
};