"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls,
      subComponentsToken = _ref.subComponentsToken;
    var ArrowIcon = subComponentsToken.ArrowIcon;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-arrow-icon {\n                width: ", "px;\n                height: ", "px;\n                font-size: ", "px;\n                line-height: 1;\n                color: ", ";\n                transition: all 0.2s ease;\n\n                &:hover {\n                    color: ", ";\n                }\n\n                &:active {\n                    color: ", ";\n                }\n\n                &.disabled {\n                    color: ", ";\n                }\n            }\n        "])), prefixCls, ArrowIcon['arrow-icon-size'], ArrowIcon['arrow-icon-size'], ArrowIcon['arrow-icon-size'], ArrowIcon['arrow-icon-color'], ArrowIcon['arrow-icon-color-hover'], ArrowIcon['arrow-icon-color-press'], ArrowIcon['arrow-icon-color-disabled']);
  });
};
var _default = exports.default = useStyle;