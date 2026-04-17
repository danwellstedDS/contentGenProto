"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file nowButton.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var buttonToken = componentsToken.Button;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-picker-now-btn {\n            display: block;\n            min-width: 88px;\n            height: 32px;\n            padding: 0 ", "px;\n            border-radius: ", "px;\n            line-height: 32px;\n            text-align: center;\n            color: ", ";\n            transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n            &:hover {\n                background-color: ", ";\n            }\n        }\n    "])), prefixCls, buttonToken['button-padding-h-small'], buttonToken['button-border-radius-small'], buttonToken['button-color-text-tertiary'], buttonToken['button-color-bg-tertiary-hover']);
};