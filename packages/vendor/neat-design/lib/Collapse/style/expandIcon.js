"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file expandIcon.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    token = _ref.token;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        > .", "-collapse-item\n            > .", "-collapse-header\n            .", "-collapse-arrow {\n            color: ", ";\n\n            > * {\n                line-height: 0;\n            }\n\n            &.activated {\n                transform: rotate(90deg);\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, token['color-icon']);
};