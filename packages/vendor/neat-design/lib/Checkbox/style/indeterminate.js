"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file indeterminate.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var CheckboxToken = componentsToken.Checkbox;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-checkbox.", "-checkbox-indeterminate {\n            .", "-checkbox-inner {\n                background-color: ", " !important;\n                border-color: ", " !important;\n            }\n        }\n\n        &:hover {\n            .", "-checkbox.", "-checkbox-indeterminate {\n                .", "-checkbox-inner {\n                    background-color: ", " !important;\n                    border-color: ", " !important;\n                }\n            }\n        }\n\n        &:active {\n            .", "-checkbox.", "-checkbox-indeterminate {\n                .", "-checkbox-inner {\n                    background-color: ", " !important;\n                    border-color: ", " !important;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-selected'], CheckboxToken['checkbox-color-bg-selected'], prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-selected-hover'], CheckboxToken['checkbox-color-bg-selected-hover'], prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-selected-press'], CheckboxToken['checkbox-color-bg-selected-press']);
};