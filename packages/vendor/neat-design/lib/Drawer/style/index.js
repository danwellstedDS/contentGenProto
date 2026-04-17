"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls,
      token = _ref.token,
      componentsToken = _ref.componentsToken;
    var drawerToken = componentsToken.Drawer;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-drawer {\n                color: ", ";\n\n                .", "-drawer-content-wrapper {\n                    box-shadow: ", ";\n                }\n\n                .", "-drawer-content {\n                    background: ", ";\n                }\n\n                .", "-drawer-header {\n                    padding: 0;\n                    border-bottom-color: ", ";\n                }\n\n                .", "-drawer-header-title {\n                    height: 55px;\n                    flex-direction: row-reverse;\n                }\n\n                .", "-drawer-title {\n                    padding-inline: ", "px;\n                    font-weight: ", ";\n                    font-size: ", "px;\n                    line-height: ", ";\n                }\n\n                .", "-drawer-close {\n                    width: ", "px;\n                    height: ", "px;\n                    padding: 0;\n                    margin: 0;\n                    border-radius: 0;\n\n                    .", "-close-btn {\n                        width: 24px;\n                        height: 24px;\n                        font-size: 24px;\n                    }\n                }\n\n                .", "-drawer-body {\n                    padding: ", "px;\n                }\n\n                .", "-drawer-footer {\n                    height: 80px;\n                    padding: 0;\n                    border-top: none;\n                }\n            }\n        "])), prefixCls, drawerToken['drawer-color-text'], prefixCls, token['shadow-4'], prefixCls, drawerToken['drawer-color-bg'], prefixCls, drawerToken['drawer-color-border'], prefixCls, prefixCls, drawerToken['drawer-padding'], token['font-weight-medium'], drawerToken['drawer-font-size-title'], token['line-height-static-32'], prefixCls, drawerToken['drawer-size-close-btn'], drawerToken['drawer-size-close-btn'], prefixCls, prefixCls, drawerToken['drawer-padding'], prefixCls);
  });
};
var _default = exports.default = useStyle;