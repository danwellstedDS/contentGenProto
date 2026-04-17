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
      componentsToken = _ref.componentsToken;
    var dividerToken = componentsToken.Divider;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-divider {\n                &.", "-divider-horizontal {\n                    border-block-start-color: ", ";\n                }\n\n                &.", "-divider-vertical {\n                    border-inline-start-color: ", ";\n                }\n\n                &.", "-divider-large {\n                    &.", "-divider-horizontal {\n                        border-block-start-width: 2px;\n                    }\n\n                    &.", "-divider-vertical {\n                        border-inline-start-width: 2px;\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, dividerToken['divider-color-border'], prefixCls, dividerToken['divider-color-border'], prefixCls, prefixCls, prefixCls);
  });
};
var _default = exports.default = useStyle;