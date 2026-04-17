"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file content.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var popoverToken = componentsToken.Popover;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-popover-inner-content-inner {\n                display: flex;\n                flex-direction: column;\n                gap: ", "px;\n\n                .", "-popover-action {\n                    gap: ", "px;\n                    padding: 0;\n\n                    .", "-btn {\n                        min-width: unset;\n                    }\n                }\n\n                &.has-icon {\n                    padding-left: ", "px;\n                }\n            }\n        "])), prefixCls, popoverToken['popover-gap-action'], prefixCls, popoverToken['popover-gap'], prefixCls, popoverToken['popover-size-icon'] + popoverToken['popover-gap']);
  });
};
var _default = exports.default = useStyle;