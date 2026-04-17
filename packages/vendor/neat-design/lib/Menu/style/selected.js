"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file selected.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var menuToken = componentsToken.Menu;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-menu-submenu-selected {\n            & > .", "-menu-submenu-title {\n                font-weight: 500;\n            }\n        }\n\n        .", "-menu-item-selected {\n            font-weight: 500;\n        }\n\n        &.", "-menu-inline-collapsed {\n            .", "-menu-submenu-selected {\n                & > .", "-menu-submenu-title {\n                    background: ", ";\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, menuToken['menu-color-bg-active']);
};