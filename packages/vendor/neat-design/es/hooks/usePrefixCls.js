/**
 * @file usePrefixCls.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useConfigContext from "./useConfigContext";

/**
 * Get prefixCls
 */
export default (function (suffixCls, customizePrefixCls) {
  var _useConfigContext, _useConfigContext$get;
  return (_useConfigContext = useConfigContext()) === null || _useConfigContext === void 0 || (_useConfigContext$get = _useConfigContext.getPrefixCls) === null || _useConfigContext$get === void 0 ? void 0 : _useConfigContext$get.call(_useConfigContext, suffixCls, customizePrefixCls);
});