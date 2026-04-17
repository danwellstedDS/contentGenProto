function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file useCreateStyles.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useContext } from 'react';
import useComponetsToken from "./useComponetsToken";
import usePrefixCls from "./usePrefixCls";
import useSubComponetsToken from "./useSubComponetsToken";
import useTheme from "./useTheme";
import useToken from "./useToken";

// Contexts
import styleContext from '@ant-design/cssinjs/lib/StyleContext';

// Statics
import { ladderColor } from '@derbysoft/neat-design-token';

// Vendors
import { createInstance } from 'antd-style';

// Types
var CIJ_KEY_ENUM = /*#__PURE__*/function (CIJ_KEY_ENUM) {
  CIJ_KEY_ENUM["DEFAULT"] = "css";
  CIJ_KEY_ENUM["HIGH"] = "css-high-priority";
  return CIJ_KEY_ENUM;
}(CIJ_KEY_ENUM || {});
var CIJ_PRIORITY_ENUM = /*#__PURE__*/function (CIJ_PRIORITY_ENUM) {
  CIJ_PRIORITY_ENUM["DEFAULT"] = "low";
  CIJ_PRIORITY_ENUM["HIGH"] = "high";
  return CIJ_PRIORITY_ENUM;
}(CIJ_PRIORITY_ENUM || {});
export var CIJ_HIGH_PRIORITY_CONFIG = {
  key: CIJ_KEY_ENUM.HIGH,
  hashPriority: CIJ_PRIORITY_ENUM.HIGH
};
export var useInternalCreateStyles = function useInternalCreateStyles(options) {
  var prefixCls = usePrefixCls();
  var _useContext = useContext(styleContext),
    hashPriority = _useContext.hashPriority;
  var _createInstance = createInstance(_objectSpread({
      key: CIJ_KEY_ENUM.DEFAULT,
      hashPriority: hashPriority,
      prefixCls: prefixCls
    }, options)),
    createStyles = _createInstance.createStyles;
  return createStyles;
};
export default (function (options) {
  var theme = useTheme();
  var token = useToken();
  var componentsToken = useComponetsToken();
  var subComponentsToken = useSubComponetsToken();
  var createStyles = useInternalCreateStyles(options);
  return function (fn) {
    var returnStyles = function returnStyles(fn) {
      return createStyles(function (utils) {
        return fn === null || fn === void 0 ? void 0 : fn(_objectSpread(_objectSpread({}, utils), {}, {
          ladderColor: ladderColor,
          theme: theme,
          token: token,
          componentsToken: componentsToken,
          subComponentsToken: subComponentsToken
        }));
      })();
    };
    return _objectSpread(_objectSpread({}, returnStyles(fn)), {}, {
      ladderColor: ladderColor,
      theme: theme,
      token: token,
      componentsToken: componentsToken,
      subComponentsToken: subComponentsToken
    });
  };
});