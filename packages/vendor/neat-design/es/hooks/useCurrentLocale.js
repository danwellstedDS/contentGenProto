/**
 * @file useCurrentLocale.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useLocale from "./useLocale";

// Types

/**
 * Get locale
 */
export default (function () {
  var _useLocale;
  return (_useLocale = useLocale()) === null || _useLocale === void 0 ? void 0 : _useLocale.locale;
});