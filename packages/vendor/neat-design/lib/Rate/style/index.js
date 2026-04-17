"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _useConvertSize = require("../../hooks/useConvertSize");
var _templateObject;
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author rzh(peter.rao@derbysoft.net)
 */
//Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Types

var useStyle = function useStyle(_ref) {
  var size = _ref.size;
  var cSize = (0, _useConvertSize.rigorousNeatSize)(size);
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref2) {
    var css = _ref2.css,
      componentsToken = _ref2.componentsToken,
      prefixCls = _ref2.prefixCls;
    var rateToken = componentsToken.Rate;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-rate {\n                font-size: ", "px;\n            }\n        "])), prefixCls, rateToken["rate-size-".concat(cSize)]);
  }).styles;
};
var _default = exports.default = useStyle;