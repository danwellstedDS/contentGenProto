/**
 * @file useDefaultPaginationShowTotal.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useConfigContext from "./useConfigContext";

// Types

/**
 * Get default Pagination showTotal function
 */
export default (function () {
  var _useConfigContext;
  return (_useConfigContext = useConfigContext()) === null || _useConfigContext === void 0 || (_useConfigContext = _useConfigContext.locale) === null || _useConfigContext === void 0 || (_useConfigContext = _useConfigContext.Pagination) === null || _useConfigContext === void 0 ? void 0 : _useConfigContext.showTotal;
});