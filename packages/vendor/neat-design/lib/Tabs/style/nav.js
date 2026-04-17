"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file nav.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var tabsToken = componentsToken.Tabs;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        & > .", "-tabs-nav {\n            overflow: hidden;\n\n            .", "-tabs-nav-wrap {\n                &::before {\n                    box-shadow:\n                        inset 2.25px 0 3.6px -3.6px rgba(0, 0, 0, 0.1),\n                        inset 9px 0 14.4px -14.4px rgba(0, 0, 0, 0.13);\n                }\n\n                &::after {\n                    box-shadow:\n                        inset -2.25px 0 3.6px -3.6px rgba(0, 0, 0, 0.1),\n                        inset -9px 0 14.4px -14.4px rgba(0, 0, 0, 0.13);\n                }\n            }\n\n            .", "-tabs-nav-operations {\n                display: none;\n            }\n\n            &::before {\n                border-bottom-color: ", ";\n            }\n        }\n\n        .", "-tabs-tab-btn {\n            .", "-tabs-tab-icon {\n                color: ", ";\n            }\n        }\n\n        .", "-tabs-tab {\n            border-bottom: 1px solid ", ";\n\n            &:hover {\n                background: ", ";\n            }\n\n            &:active {\n                background: ", ";\n            }\n\n            &.", "-tabs-tab-active {\n                .", "-tabs-tab-btn {\n                    color: ", ";\n\n                    .", "-tabs-tab-icon {\n                        color: ", ";\n                    }\n                }\n\n                &:hover {\n                    background: transparent;\n                }\n\n                &:active {\n                    background: transparent;\n                }\n            }\n\n            &.", "-tabs-tab-disabled {\n                background: transparent;\n                color: ", ";\n\n                &:hover {\n                    background: transparent;\n                }\n\n                &:active {\n                    background: transparent;\n                }\n            }\n        }\n\n        .", "-tabs-extra-content {\n            position: relative;\n            display: flex;\n            align-items: center;\n\n            .", "-tabs-extra-content-inner {\n                display: flex;\n                align-items: center;\n                gap: 16px;\n            }\n\n            .", "-tabs-nav-scroll-btn {\n                position: absolute;\n                top: 0;\n                z-index: 1;\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, tabsToken['tabs-color-border'], prefixCls, prefixCls, tabsToken['tabs-color-icon'], prefixCls, tabsToken['tabs-color-border'], tabsToken['tabs-color-bg-item-hover'], tabsToken['tabs-color-bg-item-press'], prefixCls, prefixCls, tabsToken['tabs-color-text-active'], prefixCls, tabsToken['tabs-color-icon-active'], prefixCls, tabsToken['tabs-color-text-disabled'], prefixCls, prefixCls, prefixCls);
};