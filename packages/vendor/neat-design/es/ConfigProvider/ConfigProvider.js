function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children", "prefixCls", "locale", "localeFontMapping", "theme", "componentSize"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file ConfigProvider.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { useContext, useMemo } from 'react';

// Contexts
import NeatConfigContext from "./NeatConfigContext";

// Components
import { ConfigProvider as AntConfigProvider } from 'antd';
import FontStyles from "./FontStyles";
import GlobalStyles from "./GlobalStyles";
import NeatConfigProvider from "./NeatConfigProvider";

// Locale
import deDE from 'antd/locale/de_DE';
import enUS from 'antd/locale/en_US';
import esES from 'antd/locale/es_ES';
import frFR from 'antd/locale/fr_FR';
import jaJP from 'antd/locale/ja_JP';
import ptPT from 'antd/locale/pt_PT';
import ruRU from 'antd/locale/ru_RU';
import zhCN from 'antd/locale/zh_CN';
import commonCustomizedLocale from "./locale/commonCustomizedLocale";
import deDECustomizedLocale from "./locale/deDECustomizedLocale";
import enUSCustomizedLocale from "./locale/enUSCustomizedLocale";
import esESCustomizedLocale from "./locale/esESCustomizedLocale";
import frFRCustomizedLocale from "./locale/frFRCustomizedLocale";
import jaJPCustomizedLocale from "./locale/jaJPCustomizedLocale";
import ptPTCustomizedLocale from "./locale/ptPTCustomizedLocale";
import ruRUCustomizedLocale from "./locale/ruRUCustomizedLocale";
import zhCNCustomizedLocale from "./locale/zhCNCustomizedLocale";

// Theme
import { defaultToken } from '@derbysoft/neat-design-token';
import { defaultTheme } from "../theme";
import useNotoSansJPStyle from "./style/NotoSansJP";
import useNotoSansSCStyle from "./style/NotoSansSC";

// Vendors
import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import { genComponentsToken, genSubComponentsToken, neatTheme2AntTheme } from "../theme";

// Types
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var ConfigProvider = function ConfigProvider(_ref) {
  var children = _ref.children,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'ds' : _ref$prefixCls,
    _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? enUS : _ref$locale,
    localeFontMapping = _ref.localeFontMapping,
    theme = _ref.theme,
    componentSize = _ref.componentSize,
    restProps = _objectWithoutProperties(_ref, _excluded);
  /**
   * Merge props locale and customized locale
   */
  var mergedLocale = useMemo(function () {
    switch (locale === null || locale === void 0 ? void 0 : locale.locale) {
      case deDE.locale:
        return merge(locale, commonCustomizedLocale, deDECustomizedLocale);
      case enUS.locale:
        return merge(locale, commonCustomizedLocale, enUSCustomizedLocale);
      case esES.locale:
        return merge(locale, commonCustomizedLocale, esESCustomizedLocale);
      case frFR.locale:
        return merge(locale, commonCustomizedLocale, frFRCustomizedLocale);
      case jaJP.locale:
        return merge(locale, commonCustomizedLocale, jaJPCustomizedLocale);
      case ptPT.locale:
        return merge(locale, commonCustomizedLocale, ptPTCustomizedLocale);
      case ruRU.locale:
        return merge(locale, commonCustomizedLocale, ruRUCustomizedLocale);
      case zhCN.locale:
        return merge(locale, commonCustomizedLocale, zhCNCustomizedLocale);
      default:
        return merge(locale, commonCustomizedLocale);
    }
  }, [locale]);

  /**
   * NotoSans font styles
   */
  var NotoSansJPStyle = useNotoSansJPStyle();
  var NotoSansSCStyle = useNotoSansSCStyle();

  /**
   * Default localeFontMapping
   */
  var defaultLocaleFontMapping = useMemo(function () {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, deDE.locale, {
      fontFamily: defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), enUS.locale, {
      fontFamily: defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), esES.locale, {
      fontFamily: defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), frFR.locale, {
      fontFamily: defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), jaJP.locale, {
      fontFamily: defaultToken['font-family-jp'],
      styles: NotoSansJPStyle
    }), ptPT.locale, {
      fontFamily: defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), ruRU.locale, {
      fontFamily: defaultToken['font-family'],
      styles: NotoSansSCStyle
    }), zhCN.locale, {
      fontFamily: defaultToken['font-family-sc'],
      styles: NotoSansSCStyle
    });
  }, [NotoSansJPStyle, NotoSansSCStyle]);

  /**
   * Merge localeFontMapping
   */
  var mergedLocaleFontMapping = useMemo(function () {
    return merge(defaultLocaleFontMapping, localeFontMapping);
  }, [defaultLocaleFontMapping, localeFontMapping]);

  /**
   * Get neat config context
   */
  var neatConfigContext = useContext(NeatConfigContext);

  /**
   * Whether is it the top-level ConfigProvider
   */
  var isTopConfigContext = useMemo(function () {
    return neatConfigContext === undefined;
  }, [neatConfigContext]);

  /**
   * Use parent neat theme as default theme in nested ConfigContext
   */
  var parentNeatTheme = useMemo(function () {
    return (neatConfigContext === null || neatConfigContext === void 0 ? void 0 : neatConfigContext.theme) || defaultTheme;
  }, [neatConfigContext === null || neatConfigContext === void 0 ? void 0 : neatConfigContext.theme]);

  /**
   * Merge default theme and props theme
   */
  var mergedTheme = useMemo(function () {
    var _mergedLocaleFontMapp;
    var token = merge(cloneDeep(parentNeatTheme === null || parentNeatTheme === void 0 ? void 0 : parentNeatTheme.token), mergedLocaleFontMapping !== null && mergedLocaleFontMapping !== void 0 && (_mergedLocaleFontMapp = mergedLocaleFontMapping[mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.locale]) !== null && _mergedLocaleFontMapp !== void 0 && _mergedLocaleFontMapp.fontFamily ? {
      'font-family': mergedLocaleFontMapping[mergedLocale.locale].fontFamily
    } : null, theme === null || theme === void 0 ? void 0 : theme.token);
    return {
      token: token,
      components: merge(genComponentsToken(token), theme === null || theme === void 0 ? void 0 : theme.components),
      subComponents: merge(genSubComponentsToken(token), theme === null || theme === void 0 ? void 0 : theme.subComponents)
    };
  }, [mergedLocale.locale, mergedLocaleFontMapping, parentNeatTheme === null || parentNeatTheme === void 0 ? void 0 : parentNeatTheme.token, theme === null || theme === void 0 ? void 0 : theme.components, theme === null || theme === void 0 ? void 0 : theme.subComponents, theme === null || theme === void 0 ? void 0 : theme.token]);

  /**
   * Format neat theme to ant theme
   */
  var antTheme = useMemo(function () {
    return neatTheme2AntTheme(mergedTheme);
  }, [mergedTheme]);

  /**
   * Format neat componentSize to ant componentSize
   */
  var computedComponentSize = useMemo(function () {
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
  return _jsx(AntConfigProvider, _objectSpread(_objectSpread({}, restProps), {}, {
    prefixCls: prefixCls,
    locale: mergedLocale,
    theme: antTheme,
    componentSize: computedComponentSize,
    children: _jsxs(NeatConfigProvider, {
      theme: mergedTheme,
      localeFontMapping: mergedLocaleFontMapping,
      children: [_jsx(FontStyles, {}), isTopConfigContext && _jsx(GlobalStyles, {}), children]
    })
  }));
};
export default ConfigProvider;