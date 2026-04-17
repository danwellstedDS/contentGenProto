"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file medium.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken,
    token = _ref.token;
  var tabsToken = componentsToken.Tabs;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-tabs-middle {\n            & > .", "-tabs-nav .", "-tabs-nav-wrap {\n                &::before {\n                    left: 32px;\n                }\n\n                &::after {\n                    right: 32px;\n                }\n\n                .", "-tabs-nav-list {\n                    &::before {\n                        content: '';\n                        width: ", "px;\n                    }\n\n                    &::after {\n                        content: '';\n                        width: ", "px;\n                    }\n                }\n            }\n\n            .", "-tabs-tab {\n                height: ", "px;\n                border-top-left-radius: ", "px;\n                border-top-right-radius: ", "px;\n            }\n\n            .", "-tabs-tab-btn {\n                line-height: ", ";\n                font-size: ", "px;\n\n                .", "-tabs-tab-icon {\n                    width: ", "px;\n                    height: ", "px;\n                    font-size: ", "px;\n\n                    &:not(:last-child) {\n                        margin-inline-end: ", "px;\n                    }\n                }\n            }\n\n            .", "-tabs-extra-content {\n                height: ", "px;\n\n                .", "-tabs-extra-content-inner {\n                    height: ", "px;\n                    padding: 0 16px 0 ", "px;\n                }\n            }\n\n            .", "-tabs-nav-scroll-btn {\n                width: 32px;\n                height: ", "px;\n\n                &.", "-tabs-nav-scroll-left-btn {\n                    right: -32px;\n                }\n\n                &.", "-tabs-nav-scroll-right-btn {\n                    left: -32px;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, tabsToken['tabs-padding-medium'], tabsToken['tabs-padding-medium'], prefixCls, tabsToken['tabs-size-medium'], tabsToken['tabs-border-radius-medium'], tabsToken['tabs-border-radius-medium'], prefixCls, tabsToken['tabs-line-height-medium'], tabsToken['tabs-font-size-medium'], prefixCls, tabsToken['tabs-size-icon-medium'], tabsToken['tabs-size-icon-medium'], tabsToken['tabs-size-icon-medium'], tabsToken['tabs-gap-item'], prefixCls, tabsToken['tabs-size-medium'], prefixCls, tabsToken['tabs-size-medium'], tabsToken['tabs-padding-medium'], prefixCls, tabsToken['tabs-size-medium'], prefixCls, prefixCls);
};