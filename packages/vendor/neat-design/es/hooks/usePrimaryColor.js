/**
 * @file usePrimaryColor.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useToken from "./useToken";

/**
 * Get primary color
 */
export default (function () {
  var _useToken;
  return (_useToken = useToken()) === null || _useToken === void 0 ? void 0 : _useToken['color-primary'];
});