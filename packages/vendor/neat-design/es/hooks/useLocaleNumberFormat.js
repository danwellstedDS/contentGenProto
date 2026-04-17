/**
 * @file useLocaleNumberFormat.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useCurrentLocale from "./useCurrentLocale";

/**
 * Get locale
 */
export default (function () {
  var currentLocale = useCurrentLocale();
  return new Intl.NumberFormat(currentLocale).format;
});