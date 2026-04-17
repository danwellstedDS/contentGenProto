"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file feedback.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var inputToken = componentsToken.Input;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-form-item-feedback-icon {\n            width: ", "px;\n            height: ", "px;\n            line-height: ", "px;\n            font-size: ", "px;\n        }\n\n        &.", "-form-small {\n            .", "-form-item-feedback-icon {\n                width: ", "px;\n                height: ", "px;\n                line-height: ", "px;\n                font-size: ", "px;\n            }\n        }\n\n        &.", "-form-large {\n            .", "-form-item-feedback-icon {\n                width: ", "px;\n                height: ", "px;\n                line-height: ", "px;\n                font-size: ", "px;\n            }\n        }\n    "])), prefixCls, inputToken['input-size-icon-medium'], inputToken['input-size-icon-medium'], inputToken['input-size-icon-medium'], inputToken['input-size-icon-medium'], prefixCls, prefixCls, inputToken['input-size-icon-small'], inputToken['input-size-icon-small'], inputToken['input-size-icon-small'], inputToken['input-size-icon-small'], prefixCls, prefixCls, inputToken['input-size-icon-large'], inputToken['input-size-icon-large'], inputToken['input-size-icon-large'], inputToken['input-size-icon-large']);
};