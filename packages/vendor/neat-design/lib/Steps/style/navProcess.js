"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file navProcess.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var stepsToken = componentsToken.Steps;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-steps-item.", "-steps-item-process {\n            background: ", ";\n\n            &::before,\n            &::after {\n                background: ", ";\n            }\n\n            &:hover {\n                background: ", ";\n\n                &::before,\n                &::after {\n                    background: ", ";\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, stepsToken['steps-color-bg'], stepsToken['steps-color-bg'], stepsToken['steps-color-bg-hover'], stepsToken['steps-color-bg-hover']);
};