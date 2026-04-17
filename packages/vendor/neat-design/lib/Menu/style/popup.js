"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _hover = _interopRequireDefault(require("./hover"));
var _selected = _interopRequireDefault(require("./selected"));
var _templateObject;
/**
 * @file popup.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Styles
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var menuToken = componentsToken.Menu;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-menu-submenu-popup {\n                ", "\n                ", "\n\n                .", "-menu.", "-menu-vertical {\n                    max-width: ", "px;\n                    padding: ", "px\n                        0;\n\n                    .", "-menu-item, .", "-menu-submenu-title {\n                        display: flex;\n                        padding: 0\n                            ", "px\n                            0 ", "px;\n\n                        .", "-menu-submenu-expand-icon {\n                            width: ", "px;\n                            font-size: ", "px;\n                            transform: rotate(-90deg) translateX(50%);\n                        }\n                    }\n\n                    .", "-menu-title-content {\n                        width: 100%;\n                        overflow: hidden;\n                    }\n                }\n            }\n        "])), prefixCls, (0, _hover.default)(utils), (0, _selected.default)(utils), prefixCls, prefixCls, menuToken === null || menuToken === void 0 ? void 0 : menuToken['menu-size-h-expand'], menuToken['menu-padding-h'] - menuToken['menu-gap'], prefixCls, prefixCls,
    // expand arrow icon "width" + expand arrow icon "inset-inline-end" + extra padding
    menuToken['menu-size-arrow'] + 16 + 8, menuToken['menu-padding-item'], prefixCls, menuToken['menu-size-arrow'], menuToken['menu-size-arrow'], prefixCls);
  });
};
var _default = exports.default = useStyle;