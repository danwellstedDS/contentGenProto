"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInternalCreateStyles = exports.default = exports.CIJ_HIGH_PRIORITY_CONFIG = void 0;
var _react = require("react");
var _useComponetsToken = _interopRequireDefault(require("./useComponetsToken"));
var _usePrefixCls = _interopRequireDefault(require("./usePrefixCls"));
var _useSubComponetsToken = _interopRequireDefault(require("./useSubComponetsToken"));
var _useTheme = _interopRequireDefault(require("./useTheme"));
var _useToken = _interopRequireDefault(require("./useToken"));
var _StyleContext = _interopRequireDefault(require("@ant-design/cssinjs/lib/StyleContext"));
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _antdStyle = require("antd-style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @file useCreateStyles.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */ // Hooks
// Contexts
// Statics
// Vendors
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
var CIJ_HIGH_PRIORITY_CONFIG = exports.CIJ_HIGH_PRIORITY_CONFIG = {
  key: CIJ_KEY_ENUM.HIGH,
  hashPriority: CIJ_PRIORITY_ENUM.HIGH
};
var useInternalCreateStyles = exports.useInternalCreateStyles = function useInternalCreateStyles(options) {
  var prefixCls = (0, _usePrefixCls.default)();
  var _useContext = (0, _react.useContext)(_StyleContext.default),
    hashPriority = _useContext.hashPriority;
  var _createInstance = (0, _antdStyle.createInstance)(_objectSpread({
      key: CIJ_KEY_ENUM.DEFAULT,
      hashPriority: hashPriority,
      prefixCls: prefixCls
    }, options)),
    createStyles = _createInstance.createStyles;
  return createStyles;
};
var _default = exports.default = function _default(options) {
  var theme = (0, _useTheme.default)();
  var token = (0, _useToken.default)();
  var componentsToken = (0, _useComponetsToken.default)();
  var subComponentsToken = (0, _useSubComponetsToken.default)();
  var createStyles = useInternalCreateStyles(options);
  return function (fn) {
    var returnStyles = function returnStyles(fn) {
      return createStyles(function (utils) {
        return fn === null || fn === void 0 ? void 0 : fn(_objectSpread(_objectSpread({}, utils), {}, {
          ladderColor: _neatDesignToken.ladderColor,
          theme: theme,
          token: token,
          componentsToken: componentsToken,
          subComponentsToken: subComponentsToken
        }));
      })();
    };
    return _objectSpread(_objectSpread({}, returnStyles(fn)), {}, {
      ladderColor: _neatDesignToken.ladderColor,
      theme: theme,
      token: token,
      componentsToken: componentsToken,
      subComponentsToken: subComponentsToken
    });
  };
};