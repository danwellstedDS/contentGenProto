/**
 * @file FontStyles.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useEffect, useMemo } from 'react';
import { useLocale, useLocaleFontMapping } from "../hooks";

// Components
import { Global } from '@emotion/react';

// Styles
import useInterStyle from "./style/Inter";

// Types
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var stylesCache = {};
var FontStyles = function FontStyles() {
  var _useLocale = useLocale(),
    locale = _useLocale.locale;
  var localeFontMapping = useLocaleFontMapping();
  var InterStyle = useInterStyle();

  /**
   * The styles in current locale from localeFontMapping
   */
  var currentLocaleStyles = useMemo(function () {
    var _localeFontMapping$lo;
    return localeFontMapping === null || localeFontMapping === void 0 || (_localeFontMapping$lo = localeFontMapping[locale]) === null || _localeFontMapping$lo === void 0 ? void 0 : _localeFontMapping$lo.styles;
  }, [locale, localeFontMapping]);

  /**
   * Look up in the `stylesCache` to see if there are styles with the desired name,
   * to determine whether these styles have been loaded before.
   */
  var isCurrentLocaleStylesLoaded = useMemo(function () {
    return (currentLocaleStyles === null || currentLocaleStyles === void 0 ? void 0 : currentLocaleStyles.name) && Object.prototype.hasOwnProperty.call(stylesCache, currentLocaleStyles.name);
  }, [currentLocaleStyles === null || currentLocaleStyles === void 0 ? void 0 : currentLocaleStyles.name]);

  /**
   * Add the style into `stylesCache` if `currentLocaleStyles` is a new one.
   */
  useEffect(function () {
    if (!isCurrentLocaleStylesLoaded && currentLocaleStyles !== null && currentLocaleStyles !== void 0 && currentLocaleStyles.name) {
      stylesCache[currentLocaleStyles.name] = currentLocaleStyles;
    }
  }, [currentLocaleStyles === null || currentLocaleStyles === void 0 ? void 0 : currentLocaleStyles.name, currentLocaleStyles, isCurrentLocaleStylesLoaded]);
  return _jsxs(_Fragment, {
    children: [_jsx(Global, {
      styles: InterStyle
    }), Object.values(stylesCache).map(function (styles, index) {
      return _jsx(Global, {
        styles: styles
      }, index);
    }), !isCurrentLocaleStylesLoaded && _jsx(Global, {
      styles: currentLocaleStyles
    })]
  });
};
export default FontStyles;