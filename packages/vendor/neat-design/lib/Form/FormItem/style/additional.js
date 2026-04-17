"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file additional.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    token = _ref.token,
    componentsToken = _ref.componentsToken;
  var formToken = componentsToken.Form;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-form-item-additional {\n            padding-top: ", "px;\n            padding-bottom: ", "px;\n        }\n\n        .", "-form-item-explain {\n            line-height: ", ";\n            font-size: ", "px;\n            color: ", ";\n        }\n\n        .", "-form-item-explain-error {\n            color: ", ";\n        }\n    "])), prefixCls, formToken['form-item-gap'], formToken['form-gap-v-medium'], prefixCls, formToken['form-item-line-height-medium'], formToken['form-item-font-size-medium'], token['color-text-secondary'], prefixCls, token['color-negative']);
};