"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file default.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken,
      token = utils.token;
    var stepsToken = componentsToken.Steps;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-steps.", "-steps-layout-default {\n                .", "-steps-item-content {\n                    margin-top: 8px;\n                }\n\n                .", "-steps-item-title {\n                    font-weight: ", ";\n                    line-height: ", ";\n                }\n\n                .", "-steps-item-description {\n                    font-size: ", "px;\n                    font-weight: ", ";\n                    color: ", ";\n                }\n\n                &.", "-steps-small {\n                    .", "-steps-item-tail {\n                        top: 12px;\n                    }\n\n                    .", "-steps-item-title {\n                        line-height: ", ";\n                    }\n\n                    .", "-steps-item-description {\n                        font-size: ", "px;\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, prefixCls, token['font-weight-medium'], token['line-height-static-24'], prefixCls, token['font-size-body-medium'], token['font-weight-regular'], stepsToken['steps-color-text-disabled'], prefixCls, prefixCls, prefixCls, token['line-height-static-20'], prefixCls, token['font-size-body-small']);
  });
};
var _default = exports.default = useStyle;