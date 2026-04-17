/**
 * @file useLocaleFontMapping.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useConfigContext from "./useConfigContext";

// Types

/**
 * Get localeFontMapping
 */
export default (function () {
  var _useConfigContext;
  return (_useConfigContext = useConfigContext()) === null || _useConfigContext === void 0 ? void 0 : _useConfigContext.localeFontMapping;
});