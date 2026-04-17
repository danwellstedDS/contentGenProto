"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file inline.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var menuToken = componentsToken.Menu;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-menu-inline {\n            padding: ", "px 0;\n\n            .", "-menu-item, .", "-menu-submenu-title {\n                display: flex;\n                align-items: center;\n\n                .", "-menu-item-icon {\n                    > * {\n                        line-height: 0;\n                    }\n                }\n\n                .", "-menu-item-label {\n                    flex: 1;\n                }\n            }\n\n            .", "-menu-submenu-expand-icon {\n                width: ", "px;\n                font-size: ", "px;\n            }\n\n            .", "-menu-submenu-open {\n                & > .", "-menu-submenu-title {\n                    .", "-menu-submenu-expand-icon {\n                        transform: translateY(-50%) rotate(180deg);\n                    }\n                }\n            }\n\n            &.", "-menu-root {\n                border-inline-end: none;\n            }\n        }\n    "])), prefixCls, menuToken['menu-padding-h'] - menuToken['menu-gap'], prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, menuToken['menu-size-arrow'], menuToken['menu-size-arrow'], prefixCls, prefixCls, prefixCls, prefixCls);
};