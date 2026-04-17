"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file nested.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-table-tbody\n            > tr\n            > td\n            .", "-table-wrapper:only-child\n            .", "-table\n            .", "-table-tbody\n            > tr:last-child\n            > td {\n            border-bottom: 0;\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls);
};