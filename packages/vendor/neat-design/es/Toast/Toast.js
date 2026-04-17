function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _CloseCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/CloseCircleFilled";
import _WarningCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/WarningCircleFilled";
import _SuccessCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/SuccessCircleFilled";
import _InfoCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/InfoCircleFilled";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components
import Spinner from "../Spinner";

// Icons

// Vendors
import { message as AntMessage } from 'antd';

// Types
import { jsx as _jsx, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
/**
 * Get useMessage and restProps from Ant Message
 */
var useMessage = AntMessage.useMessage,
  restProps = _objectWithoutProperties(AntMessage, ["useMessage"]);

/**
 * Customized Toast icon mapping
 */
var IconMapping = {
  info: _jsx(_InfoCircleFilled, {}),
  success: _jsx(_SuccessCircleFilled, {}),
  warning: _jsx(_WarningCircleFilled, {}),
  error: _jsx(_CloseCircleFilled, {})
};

/**
 * Handle "icon" argument to custom Toast icon
 * @param args
 */
var parseIcon = function parseIcon(args) {
  if (args.icon) {
    return args.icon;
  } else if (args.icon === false || args.icon === null) {
    return _jsx(_Fragment, {});
  } else if (args.loading === true) {
    return _jsx(Spinner, {
      size: "small"
    });
  } else {
    return IconMapping[args.type];
  }
};

/**
 * Whether the "content" is ToastArgsProps type or not
 * @param content
 */
var isToastArgs = function isToastArgs(content) {
  return Object.prototype.hasOwnProperty.call(content, 'content');
};

/**
 * Return Toast info static function
 * @param messageApi
 */
var info = function info(messageApi) {
  return function (content, duration, onClose) {
    return !isToastArgs(content) ? messageApi.info(content, duration, onClose) : messageApi.info(_objectSpread(_objectSpread({}, content), {}, {
      icon: parseIcon(content)
    }), duration, onClose);
  };
};

/**
 * Return Toast success static function
 * @param messageApi
 */
var success = function success(messageApi) {
  return function (content, duration, onClose) {
    return !isToastArgs(content) ? messageApi.success(content, duration, onClose) : messageApi.success(_objectSpread(_objectSpread({}, content), {}, {
      icon: parseIcon(content)
    }), duration, onClose);
  };
};

/**
 * Return Toast warning static function
 * @param messageApi
 */
var warning = function warning(messageApi) {
  return function (content, duration, onClose) {
    return !isToastArgs(content) ? messageApi.warning(content, duration, onClose) : messageApi.warning(_objectSpread(_objectSpread({}, content), {}, {
      icon: parseIcon(content)
    }), duration, onClose);
  };
};

/**
 * Return Toast error static function
 * @param messageApi
 */
var error = function error(messageApi) {
  return function (content, duration, onClose) {
    return !isToastArgs(content) ? messageApi.error(content, duration, onClose) : messageApi.error(_objectSpread(_objectSpread({}, content), {}, {
      icon: parseIcon(content)
    }), duration, onClose);
  };
};

/**
 * Return Toast open static function
 * @param messageApi
 */
var open = function open(messageApi) {
  return function (args) {
    return messageApi.open(_objectSpread(_objectSpread({}, args), {}, {
      icon: parseIcon(args)
    }));
  };
};

/**
 * "useToast" hook for Toast
 * @param toastConfig
 */
var useToast = function useToast(toastConfig) {
  var _useMessage = useMessage(toastConfig),
    _useMessage2 = _slicedToArray(_useMessage, 2),
    messageApi = _useMessage2[0],
    contextHolder = _useMessage2[1];
  return [_objectSpread(_objectSpread({}, messageApi), {}, {
    info: info(messageApi),
    success: success(messageApi),
    warning: warning(messageApi),
    error: error(messageApi),
    open: open(messageApi)
  }), contextHolder];
};
var toast = _objectSpread(_objectSpread({}, restProps), {}, {
  useToast: useToast
});
export default toast;