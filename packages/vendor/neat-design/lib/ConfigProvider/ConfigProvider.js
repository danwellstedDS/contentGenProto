"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _NeatConfigContext = _interopRequireDefault(require("./NeatConfigContext"));
var _antd = require("antd");
var _FontStyles = _interopRequireDefault(require("./FontStyles"));
var _GlobalStyles = _interopRequireDefault(require("./GlobalStyles"));
var _NeatConfigProvider = _interopRequireDefault(require("./NeatConfigProvider"));
var _de_DE = _interopRequireDefault(require("antd/locale/de_DE"));
var _en_US = _interopRequireDefault(require("antd/locale/en_US"));
var _es_ES = _interopRequireDefault(require("antd/locale/es_ES"));
var _fr_FR = _interopRequireDefault(require("antd/locale/fr_FR"));
var _ja_JP = _interopRequireDefault(require("antd/locale/ja_JP"));
var _pt_PT = _interopRequireDefault(require("antd/locale/pt_PT"));
var _ru_RU = _interopRequireDefault(require("antd/locale/ru_RU"));
var _zh_CN = _interopRequireDefault(require("antd/locale/zh_CN"));
var _commonCustomizedLocale = _interopRequireDefault(require("./locale/commonCustomizedLocale"));
var _deDECustomizedLocale = _interopRequireDefault(require("./locale/deDECustomizedLocale"));
var _enUSCustomizedLocale = _interopRequireDefault(require("./locale/enUSCustomizedLocale"));
var _esESCustomizedLocale = _interopRequireDefault(require("./locale/esESCustomizedLocale"));
var _frFRCustomizedLocale = _interopRequireDefault(require("./locale/frFRCustomizedLocale"));
var _jaJPCustomizedLocale = _interopRequireDefault(require("./locale/jaJPCustomizedLocale"));
var _ptPTCustomizedLocale = _interopRequireDefault(require("./locale/ptPTCustomizedLocale"));
var _ruRUCustomizedLocale = _interopRequireDefault(require("./locale/ruRUCustomizedLocale"));
var _zhCNCustomizedLocale = _interopRequireDefault(require("./locale/zhCNCustomizedLocale"));
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _theme = require("../theme");
var _NotoSansJP = _interopRequireDefault(require("./style/NotoSansJP"));
var _NotoSansSC = _interopRequireDefault(require("./style/NotoSansSC"));
var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["children", "prefixCls", "locale", "localeFontMapping", "theme", "componentSize"];
/**
 * @file ConfigProvider.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
// Hooks
// Contexts
// Components
// Locale
// Theme
// Vendors
// Types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ConfigProvider = function ConfigProvider(_ref) {
  var children = _ref.children,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'ds' : _ref$prefixCls,
    _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? _en_US.default : _ref$locale,
    localeFontMapping = _ref.localeFontMapping,
    theme = _ref.theme,
    componentSize = _ref.componentSize,
    restProps = _objectWithoutProperties(_ref, _excluded);
  /**
   * Merge props locale and customized locale
   */
  var mergedLocale = (0, _react.useMemo)(function () {
    switch (locale === null || locale === void 0 ? void 0 : locale.locale) {
      case _de_DE.default.locale:
        return (0, _merge.default)(locale, _commonCustomizedLocale.default, _deDECustomizedLocale.default);
      case _en_US.default.locale:
        return (0, _merge.default)(locale, _commonCustomizedLocale.default, _enUSCustomizedLocale.default);
      case _es_ES.default.locale:
        return (0, _merge.default)(locale, _commonCustomizedLocale.default, _esESCustomizedLocale.default);
      case _fr_FR.default.locale:
        return (0, _merge.default)(locale, _commonCustomizedLocale.default, _frFRCustomizedLocale.default);
      case _ja_JP.default.locale:
        return (0, _merge.default)(locale, _commonCustomizedLocale.default, _jaJPCustomizedLocale.default);
      case _pt_PT.default.locale:
        return (0, _merge.default)(locale, _commonCustomizedLocale.default, _ptPTCustomizedLocale.default);
      case _ru_RU.default.locale:
        return (0, _merge.default)(locale, _commonCustomizedLocale.default, _ruRUCustomizedLocale.default);
      case _zh_CN.default.locale:
        return (0, _merge.default)(locale, _commonCustomizedLocale.default, _zhCNCustomizedLocale.default);
      default:
        return (0, _merge.default)(locale, _commonCustomizedLocale.default);
    }
  }, [locale]);

  /**
   * NotoSans font styles
   */
  var NotoSansJPStyle = (0, _NotoSansJP.default)();
  var NotoSansSCStyle = (0, _NotoSansSC.default)();

  /**
   * Default localeFontMapping
   */
  var defaultLocaleFontMapping = (0, _react.useMemo)(function () {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, _de_DE.default.locale, {
      fontFamily: _neatDesignToken.defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), _en_US.default.locale, {
      fontFamily: _neatDesignToken.defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), _es_ES.default.locale, {
      fontFamily: _neatDesignToken.defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), _fr_FR.default.locale, {
      fontFamily: _neatDesignToken.defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), _ja_JP.default.locale, {
      fontFamily: _neatDesignToken.defaultToken['font-family-jp'],
      styles: NotoSansJPStyle
    }), _pt_PT.default.locale, {
      fontFamily: _neatDesignToken.defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), _ru_RU.default.locale, {
      fontFamily: _neatDesignToken.defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), _zh_CN.default.locale, {
      fontFamily: _neatDesignToken.defaultToken['font-family-sc'],
      styles: NotoSansSCStyle
    });
  }, [NotoSansJPStyle, NotoSansSCStyle]);

  /**
   * Merge localeFontMapping
   */
  var mergedLocaleFontMapping = (0, _react.useMemo)(function () {
    return (0, _merge.default)(defaultLocaleFontMapping, localeFontMapping);
  }, [defaultLocaleFontMapping, localeFontMapping]);

  /**
   * Get neat config context
   */
  var neatConfigContext = (0, _react.useContext)(_NeatConfigContext.default);

  /**
   * Whether is it the top-level ConfigProvider
   */
  var isTopConfigContext = (0, _react.useMemo)(function () {
    return neatConfigContext === undefined;
  }, [neatConfigContext]);

  /**
   * Use parent neat theme as default theme in nested ConfigContext
   */
  var parentNeatTheme = (0, _react.useMemo)(function () {
    return (neatConfigContext === null || neatConfigContext === void 0 ? void 0 : neatConfigContext.theme) || _theme.defaultTheme;
  }, [neatConfigContext === null || neatConfigContext === void 0 ? void 0 : neatConfigContext.theme]);

  /**
   * Merge default theme and props theme
   */
  var mergedTheme = (0, _react.useMemo)(function () {
    var _mergedLocaleFontMapp;
    var token = (0, _merge.default)((0, _cloneDeep.default)(parentNeatTheme === null || parentNeatTheme === void 0 ? void 0 : parentNeatTheme.token), mergedLocaleFontMapping !== null && mergedLocaleFontMapping !== void 0 && (_mergedLocaleFontMapp = mergedLocaleFontMapping[mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.locale]) !== null && _mergedLocaleFontMapp !== void 0 && _mergedLocaleFontMapp.fontFamily ? {
      'font-family': mergedLocaleFontMapping[mergedLocale.locale].fontFamily
    } : null, theme === null || theme === void 0 ? void 0 : theme.token);
    return {
      token: token,
      components: (0, _merge.default)((0, _theme.genComponentsToken)(token), theme === null || theme === void 0 ? void 0 : theme.components),
      subComponents: (0, _merge.default)((0, _theme.genSubComponentsToken)(token), theme === null || theme === void 0 ? void 0 : theme.subComponents)
    };
  }, [mergedLocale.locale, mergedLocaleFontMapping, parentNeatTheme === null || parentNeatTheme === void 0 ? void 0 : parentNeatTheme.token, theme === null || theme === void 0 ? void 0 : theme.components, theme === null || theme === void 0 ? void 0 : theme.subComponents, theme === null || theme === void 0 ? void 0 : theme.token]);

  /**
   * Format neat theme to ant theme
   */
  var antTheme = (0, _react.useMemo)(function () {
    return (0, _theme.neatTheme2AntTheme)(mergedTheme);
  }, [mergedTheme]);

  /**
   * Format neat componentSize to ant componentSize
   */
  var computedComponentSize = (0, _react.useMemo)(function () {
    switch (componentSize) {
      case 'medium':
        return 'middle';
      case 'small':
        return 'small';
      case 'large':
        return 'large';
      default:
        return 'middle';
    }
  }, [componentSize]);
  return (0, _jsxRuntime.jsx)(_antd.ConfigProvider, _objectSpread(_objectSpread({}, restProps), {}, {
    prefixCls: prefixCls,
    locale: mergedLocale,
    theme: antTheme,
    componentSize: computedComponentSize,
    children: (0, _jsxRuntime.jsxs)(_NeatConfigProvider.default, {
      theme: mergedTheme,
      localeFontMapping: mergedLocaleFontMapping,
      children: [(0, _jsxRuntime.jsx)(_FontStyles.default, {}), isTopConfigContext && (0, _jsxRuntime.jsx)(_GlobalStyles.default, {}), children]
    })
  }));
};
var _default = exports.default = ConfigProvider;