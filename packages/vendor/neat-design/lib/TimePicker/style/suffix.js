"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file suffix.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var selectToken = componentsToken.Select;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-picker-suffix {\n            margin-left: ", "px;\n            font-size: ", "px;\n            color: ", ";\n        }\n\n        &.", "-picker-small {\n            .", "-picker-suffix {\n                font-size: ", "px;\n            }\n        }\n\n        &.", "-picker-large {\n            .", "-picker-suffix {\n                font-size: ", "px;\n            }\n        }\n\n        &:not(.", "-picker-disabled) {\n            &:hover,\n            &:focus,\n            &.", "-picker-focused {\n                .", "-picker-suffix {\n                    color: ", ";\n                }\n            }\n        }\n\n        &.", "-picker-disabled {\n            .", "-picker-suffix {\n                color: ", ";\n            }\n        }\n    "])), prefixCls, selectToken['select-gap'], selectToken['select-size-icon-medium'], selectToken['select-color-icon'], prefixCls, prefixCls, selectToken['select-size-icon-small'], prefixCls, prefixCls, selectToken['select-size-icon-large'], prefixCls, prefixCls, prefixCls, selectToken['select-color-icon-hover'], prefixCls, prefixCls, selectToken['select-color-icon-disabled']);
};