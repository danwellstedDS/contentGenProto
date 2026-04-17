"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file horizontal.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var menuToken = componentsToken.Menu;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-menu-mode-horizontal {\n            padding: ", "px 0;\n\n            .", "-menu-item, .", "-menu-submenu-title {\n                display: flex;\n                padding: 0\n                    ", "px\n                    0 ", "px;\n\n                .", "-menu-submenu-expand-icon {\n                    width: ", "px;\n                    font-size: ", "px;\n                    transform: rotate(-90deg) translateX(50%);\n                }\n            }\n\n            .", "-menu-title-content {\n                width: 100%;\n                overflow: hidden;\n            }\n\n            &.", "-menu-root {\n                border-inline-end: none;\n            }\n        }\n    "])), prefixCls, menuToken['menu-padding-h'] - menuToken['menu-gap'], prefixCls, prefixCls,
  // expand arrow icon "width" + expand arrow icon "inset-inline-end" + extra padding
  menuToken['menu-size-arrow'] + 16 + 8, menuToken['menu-padding-item'], prefixCls, menuToken['menu-size-arrow'], menuToken['menu-size-arrow'], prefixCls, prefixCls);
};