"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file overlayer.ts
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
    var popoverToken = componentsToken.Popover;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-popover {\n                max-width: 368px;\n\n                .", "-popover-inner {\n                    padding: ", "px\n                        ", "px;\n                    border-radius: ", "px;\n                    box-shadow: ", ";\n                }\n\n                .", "-popover-title {\n                    margin-bottom: ", "px;\n                    line-height: ", ";\n                    font-size: ", "px;\n                    font-weight: ", ";\n                }\n\n                .", "-popover-inner-content {\n                    line-height: ", ";\n                    font-size: ", "px;\n                    font-weight: ", ";\n                }\n            }\n        "])), prefixCls, prefixCls, popoverToken['popover-padding-v'], popoverToken['popover-padding-h'], popoverToken['popver-border-radius'], token['shadow-3'], prefixCls, popoverToken['popover-gap-text'], popoverToken['popover-line-height-title'], popoverToken['popover-font-size-title'], token['font-weight-medium'], prefixCls, popoverToken['popover-line-height'], popoverToken['popover-font-size'], token['font-weight-regular']);
  });
};
var _default = exports.default = useStyle;