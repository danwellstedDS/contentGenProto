"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file disabled.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var CheckboxToken = componentsToken.Checkbox;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-checkbox.", "-checkbox-disabled {\n            .", "-checkbox-inner {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: none;\n            }\n\n            &.", "-checkbox-checked,\n                &.", "-checkbox-indeterminate {\n                .", "-checkbox-inner {\n                    background-color: ", " !important;\n                    border-color: ", " !important;\n                }\n            }\n        }\n\n        &:hover,\n        &:active {\n            .", "-checkbox {\n                &.", "-checkbox-checked,\n                    &.", "-checkbox-indeterminate {\n                    &.", "-checkbox-disabled {\n                        .", "-checkbox-inner {\n                            background-color: ", " !important;\n                            border-color: ", " !important;\n                            box-shadow: none;\n                        }\n                    }\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-unselected-disabled'], CheckboxToken['checkbox-color-border-unselected-disabled'], prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-selected-disabled'], CheckboxToken['checkbox-color-bg-selected-disabled'], prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-selected-disabled'], CheckboxToken['checkbox-color-bg-selected-disabled']);
};