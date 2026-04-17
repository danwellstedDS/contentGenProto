"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file baseIconOutlined.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var stepsToken = componentsToken.Steps;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-steps-item.", "-steps-item-icon-outlined:not(.", "-steps-item-custom) {\n            &.", "-steps-item-process {\n                .", "-steps-item-icon {\n                    background-color: transparent;\n\n                    .", "-steps-icon {\n                        color: ", ";\n                    }\n                }\n            }\n\n            &.", "-steps-item-wait {\n                .", "-steps-item-icon {\n                    background-color: transparent;\n                    border: 1px solid ", ";\n\n                    .", "-steps-icon {\n                        color: ", ";\n                    }\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, stepsToken['steps-color-default'], prefixCls, prefixCls, stepsToken['steps-color-disabled'], prefixCls, stepsToken['steps-color-disabled']);
};