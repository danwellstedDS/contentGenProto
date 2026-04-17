"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file index.ts
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
      subComponentsToken = _ref.subComponentsToken;
    var actionToken = subComponentsToken.Action;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-action {\n                box-sizing: border-box;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                gap: ", "px;\n                width: 100%;\n                height: 100%;\n                padding: ", "px\n                    ", "px;\n                background: ", ";\n\n                .", "-action-info, .", "-action-btns {\n                    display: flex;\n                    align-items: center;\n                    gap: ", "px;\n                }\n\n                .", "-action-btns {\n                    flex: 1;\n                }\n\n                .", "-action-ok-btn, .", "-action-cancel-btn {\n                    min-width: 136px;\n                }\n\n                &.", "-action-picker {\n                    gap: ", "px;\n                    padding: ", "px\n                        ", "px;\n\n                    .", "-action-ok-btn,\n                        .", "-action-cancel-btn {\n                        min-width: unset;\n                    }\n                }\n\n                &.", "-action-r2l {\n                    flex-direction: row-reverse;\n\n                    .", "-action-info, .", "-action-btns {\n                        flex-direction: row-reverse;\n                    }\n                }\n\n                &.", "-action-bordered {\n                    border-top: 1px solid ", ";\n                }\n            }\n        "])), prefixCls, actionToken['action-footer-gap'], actionToken['action-footer-padding-v'], actionToken['action-footer-padding-h'], token['color-bg'], prefixCls, prefixCls, actionToken['action-footer-gap'], prefixCls, prefixCls, prefixCls, prefixCls, actionToken['action-picker-gap'], actionToken['action-picker-padding-v'], actionToken['action-picker-padding-h'], prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, actionToken['action-color-border']);
  });
};
var _default = exports.default = useStyle;