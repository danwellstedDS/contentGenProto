"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file editable.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var tabsToken = componentsToken.Tabs;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-tabs-editable-line {\n            & > .", "-tabs-nav {\n                .", "-tabs-tab {\n                    background: transparent;\n                    border: none;\n\n                    &:hover {\n                        background: ", ";\n                    }\n\n                    &:active {\n                        background: ", ";\n                    }\n\n                    &.", "-tabs-tab-active {\n                        background: transparent;\n\n                        &:hover {\n                            background: transparent;\n                        }\n\n                        &:active {\n                            background: transparent;\n                        }\n                    }\n\n                    &.", "-tabs-tab-disabled {\n                        background: transparent;\n\n                        &:hover {\n                            background: transparent;\n                        }\n\n                        &:active {\n                            background: transparent;\n                        }\n                    }\n                }\n\n                .", "-tabs-ink-bar {\n                    visibility: visible;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, tabsToken['tabs-color-bg-item-hover'], tabsToken['tabs-color-bg-item-press'], prefixCls, prefixCls, prefixCls);
};