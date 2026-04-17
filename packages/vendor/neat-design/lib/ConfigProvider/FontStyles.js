"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _hooks = require("../hooks");
var _react2 = require("@emotion/react");
var _Inter = _interopRequireDefault(require("./style/Inter"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file FontStyles.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks

// Components

// Styles

// Types

var stylesCache = {};
var FontStyles = function FontStyles() {
  var _useLocale = (0, _hooks.useLocale)(),
    locale = _useLocale.locale;
  var localeFontMapping = (0, _hooks.useLocaleFontMapping)();
  var InterStyle = (0, _Inter.default)();

  /**
   * The styles in current locale from localeFontMapping
   */
  var currentLocaleStyles = (0, _react.useMemo)(function () {
    var _localeFontMapping$lo;
    return localeFontMapping === null || localeFontMapping === void 0 || (_localeFontMapping$lo = localeFontMapping[locale]) === null || _localeFontMapping$lo === void 0 ? void 0 : _localeFontMapping$lo.styles;
  }, [locale, localeFontMapping]);

  /**
   * Look up in the `stylesCache` to see if there are styles with the desired name,
   * to determine whether these styles have been loaded before.
   */
  var isCurrentLocaleStylesLoaded = (0, _react.useMemo)(function () {
    return (currentLocaleStyles === null || currentLocaleStyles === void 0 ? void 0 : currentLocaleStyles.name) && Object.prototype.hasOwnProperty.call(stylesCache, currentLocaleStyles.name);
  }, [currentLocaleStyles === null || currentLocaleStyles === void 0 ? void 0 : currentLocaleStyles.name]);

  /**
   * Add the style into `stylesCache` if `currentLocaleStyles` is a new one.
   */
  (0, _react.useEffect)(function () {
    if (!isCurrentLocaleStylesLoaded && currentLocaleStyles !== null && currentLocaleStyles !== void 0 && currentLocaleStyles.name) {
      stylesCache[currentLocaleStyles.name] = currentLocaleStyles;
    }
  }, [currentLocaleStyles === null || currentLocaleStyles === void 0 ? void 0 : currentLocaleStyles.name, currentLocaleStyles, isCurrentLocaleStylesLoaded]);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_react2.Global, {
      styles: InterStyle
    }), Object.values(stylesCache).map(function (styles, index) {
      return (0, _jsxRuntime.jsx)(_react2.Global, {
        styles: styles
      }, index);
    }), !isCurrentLocaleStylesLoaded && (0, _jsxRuntime.jsx)(_react2.Global, {
      styles: currentLocaleStyles
    })]
  });
};
var _default = exports.default = FontStyles;