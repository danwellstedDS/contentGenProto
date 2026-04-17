"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file EmptyText.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            padding: 80px 0 76px;\n\n            .", "-empty-image {\n                display: inline-flex;\n                align-items: center;\n                height: 48px;\n                font-size: 48px;\n                color: #94a2ad;\n            }\n\n            .", "-empty-text {\n                margin-top: 16px;\n                color: #41484c;\n            }\n\n            .", "-empty-description {\n                margin-top: 4px;\n                font-size: 12px;\n                color: #94a2ad;\n            }\n        "])), prefixCls, prefixCls, prefixCls);
  });
};
var _default = exports.default = useStyle;