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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-layout {\n            }\n        "])), prefixCls);
  });
};
var _default = exports.default = useStyle;