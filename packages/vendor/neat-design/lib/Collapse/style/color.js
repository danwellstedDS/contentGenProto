"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file color.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var collapseToken = componentsToken.Collapse;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        border-color: ", ";\n\n        .", "-collapse-content {\n            border-color: ", ";\n        }\n\n        > .", "-collapse-item {\n            border-color: ", ";\n\n            &:not(.", "-collapse-item-disabled) {\n                > .", "-collapse-header {\n                    .", "-collapse-extra {\n                        color: ", ";\n                    }\n\n                    &:hover {\n                        background: ", ";\n                    }\n\n                    &:active {\n                        background: ", ";\n                    }\n                }\n            }\n\n            &.", "-collapse-item-disabled {\n                > .", "-collapse-header {\n                    background: ", ";\n                }\n            }\n        }\n    "])), collapseToken['collapse-color-border'], prefixCls, collapseToken['collapse-color-border'], prefixCls, collapseToken['collapse-color-border'], prefixCls, prefixCls, prefixCls, collapseToken['collapse-color-text-additional'], collapseToken['collapse-color-bg-hover'], collapseToken['collapse-color-bg-press'], prefixCls, prefixCls, collapseToken['collapse-color-bg-disabled']);
};