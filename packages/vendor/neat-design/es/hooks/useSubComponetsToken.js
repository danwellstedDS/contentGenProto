/**
 * @file useSubComponetsToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useTheme from "./useTheme";

// Types

/**
 * Get theme components token
 */
export default (function () {
  return useTheme().subComponents;
});