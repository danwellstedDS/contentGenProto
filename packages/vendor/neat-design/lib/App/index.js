"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _useModal3 = _interopRequireDefault(require("../Modal/hooks/useModal"));
var _context = _interopRequireWildcard(require("./context"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _Notification = _interopRequireDefault(require("../Notification"));
var _Toast = _interopRequireDefault(require("../Toast"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Hooks
// Contexts
// Components
// Vendors
// Styles
// Types
var useToast = _Toast.default.useToast;
var useNotification = _Notification.default.useNotification;
var useApp = function useApp() {
  return (0, _react.useContext)(_context.default);
};
var App = function App(props) {
  var customizePrefixCls = props.prefixCls,
    children = props.children,
    className = props.className,
    rootClassName = props.rootClassName,
    toast = props.toast,
    notification = props.notification,
    style = props.style,
    _props$component = props.component,
    component = _props$component === void 0 ? 'div' : _props$component;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('app', customizePrefixCls);
  var _useStyle = (0, _style.default)(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var customClassName = (0, _classnames.default)(hashId, prefixCls, className, rootClassName);
  var appConfig = (0, _react.useContext)(_context.AppConfigContext);
  var mergedAppConfig = (0, _react.useMemo)(function () {
    return {
      /**
       * @deprecated please use "toast" instead
       */
      message: _objectSpread(_objectSpread({}, appConfig.toast), toast),
      toast: _objectSpread(_objectSpread({}, appConfig.toast), toast),
      notification: _objectSpread(_objectSpread({}, appConfig.notification), notification)
    };
  }, [toast, notification, appConfig.toast, appConfig.notification]);
  var _useToast = useToast(mergedAppConfig.toast),
    _useToast2 = _slicedToArray(_useToast, 2),
    toastApi = _useToast2[0],
    toastContextHolder = _useToast2[1];
  var _useNotification = useNotification(mergedAppConfig.notification),
    _useNotification2 = _slicedToArray(_useNotification, 2),
    notificationApi = _useNotification2[0],
    notificationContextHolder = _useNotification2[1];
  var _useModal = (0, _useModal3.default)(),
    _useModal2 = _slicedToArray(_useModal, 2),
    modalApi = _useModal2[0],
    modalContextHolder = _useModal2[1];
  var memoizedContextValue = (0, _react.useMemo)(function () {
    return {
      /**
       * @deprecated please use "toast" instead
       */
      message: toastApi,
      toast: toastApi,
      notification: notificationApi,
      modal: modalApi
    };
  }, [toastApi, notificationApi, modalApi]);

  // ============================ Render ============================
  var Component = component === false ? _react.Fragment : component;
  var rootProps = {
    className: customClassName,
    style: style
  };
  return wrapSSR((0, _jsxRuntime.jsx)(_context.default.Provider, {
    value: memoizedContextValue,
    children: (0, _jsxRuntime.jsx)(_context.AppConfigContext.Provider, {
      value: mergedAppConfig,
      children: (0, _jsxRuntime.jsxs)(Component, _objectSpread(_objectSpread({}, component === false ? undefined : rootProps), {}, {
        children: [modalContextHolder, toastContextHolder, notificationContextHolder, children]
      }))
    })
  }));
};
if (process.env.NODE_ENV !== 'production') {
  App.displayName = 'App';
}
App.useApp = useApp;
var _default = exports.default = App;