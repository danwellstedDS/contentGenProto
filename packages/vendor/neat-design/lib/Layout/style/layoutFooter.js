"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file layoutFooter.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls,
      token = _ref.token;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-layout-footer {\n                box-sizing: border-box;\n                display: flex;\n                align-items: center;\n                gap: 40px;\n                min-height: 57px;\n\n                &.", "-layout-footer-pagination {\n                    padding: 0 24px;\n\n                    .", "-pagination {\n                        flex: 1;\n                    }\n\n                    .", "-action {\n                        flex: 0;\n                        padding-inline: 0;\n                    }\n                }\n\n                &.", "-layout-footer-bordered {\n                    border-top: 1px solid ", ";\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, token['color-border-divider']);
  });
};
var _default = exports.default = useStyle;