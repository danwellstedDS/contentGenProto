/**
 * @file useTheme.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useConfigContext from "./useConfigContext";

// Statics
import { defaultTheme } from "../theme";

// Types

/**
 * Get theme
 */
export default (function () {
  var _useConfigContext;
  return ((_useConfigContext = useConfigContext()) === null || _useConfigContext === void 0 ? void 0 : _useConfigContext.theme) || defaultTheme;
});