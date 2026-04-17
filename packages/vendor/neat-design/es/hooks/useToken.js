/**
 * @file useToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useTheme from "./useTheme";

// Types

/**
 * Get theme token
 */
export default (function () {
  return useTheme().token;
});