"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file baseSize.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken,
    token = _ref.token;
  var stepsToken = componentsToken.Steps;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-steps-item {\n            > .", "-steps-item-container {\n                > .", "-steps-item-icon {\n                    width: ", "px;\n                    height: ", "px;\n                }\n            }\n        }\n\n        .", "-steps-item-description {\n            line-height: ", ";\n        }\n\n        &.", "-steps-small {\n            .", "-steps-item {\n                > .", "-steps-item-container {\n                    > .", "-steps-item-icon {\n                        width: ", "px;\n                        height: ", "px;\n                    }\n                }\n            }\n\n            .", "-steps-item-description {\n                font-size: ", "px;\n                line-height: ", ";\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, stepsToken['steps-size-icon-medium'], stepsToken['steps-size-icon-medium'], prefixCls, token['line-height-static-20'], prefixCls, prefixCls, prefixCls, prefixCls, stepsToken['steps-size-icon-small'], stepsToken['steps-size-icon-small'], prefixCls, token['font-size-body-small'], token['line-height-static-16']);
};