"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useConfigContext2 = _interopRequireDefault(require("./useConfigContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file usePrefixCls.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
/**
 * Get prefixCls
 */
var _default = exports.default = function _default(suffixCls, customizePrefixCls) {
  var _useConfigContext, _useConfigContext$get;
  return (_useConfigContext = (0, _useConfigContext2.default)()) === null || _useConfigContext === void 0 || (_useConfigContext$get = _useConfigContext.getPrefixCls) === null || _useConfigContext$get === void 0 ? void 0 : _useConfigContext$get.call(_useConfigContext, suffixCls, customizePrefixCls);
};