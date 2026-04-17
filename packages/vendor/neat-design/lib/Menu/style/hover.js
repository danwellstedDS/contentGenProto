"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file hover.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var menuToken = componentsToken.Menu;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-menu-submenu-title:hover {\n            color: ", ";\n        }\n    "])), prefixCls, menuToken === null || menuToken === void 0 ? void 0 : menuToken['menu-color-text-hover']);
};