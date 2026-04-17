function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _WarningCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/WarningCircleFilled";
import _InfoCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/InfoCircleFilled";
import _SuccessCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/SuccessCircleFilled";
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
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; } /**
 * @file index.ts
 * @author pipi(peter.rao@derbysoft.net)
 */ // Icons
// Vendors
import { notification as AntNotification } from 'antd';
import classNames from 'classnames';

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var useAntNotification = AntNotification.useNotification,
  restProps = _objectWithoutProperties(AntNotification, ["useNotification"]);
function applyIconProps(method) {
  return {
    className: "notice-icon-".concat(method)
  };
}
function applyIcon(method) {
  var props = applyIconProps(method);
  switch (method) {
    case 'success':
      return _jsx(_SuccessCircleFilled, _objectSpread({}, props));
    case 'info':
      return _jsx(_InfoCircleFilled, _objectSpread({}, props));
    case 'warning':
      return _jsx(_WarningCircleFilled, _objectSpread({}, props));
    case 'error':
      return _jsx(_WarningCircleFilled, _objectSpread({}, props));
    default:
      return _jsx(_InfoCircleFilled, _objectSpread({}, props));
  }
}
var applyAntNotification = function applyAntNotification(scope, method) {
  return function (config) {
    var _scope$method;
    var cls = classNames({
      'notice-hide-icon': (config === null || config === void 0 ? void 0 : config.icon) === null
    }, config === null || config === void 0 ? void 0 : config.className);
    var neatDefaultConfig = _objectSpread(_objectSpread({
      icon: applyIcon(method)
    }, config), {}, {
      className: cls
    });
    scope === null || scope === void 0 || (_scope$method = scope[method]) === null || _scope$method === void 0 || _scope$method.call(scope, neatDefaultConfig);
  };
};
var applyUseAntNotification = function applyUseAntNotification(config) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useAntNotification = useAntNotification(config || {}),
    _useAntNotification2 = _slicedToArray(_useAntNotification, 2),
    notification = _useAntNotification2[0],
    context = _useAntNotification2[1];
  var neatNotification = _objectSpread(_objectSpread({}, notification), {}, {
    success: applyAntNotification(notification, 'success'),
    info: applyAntNotification(notification, 'info'),
    warning: applyAntNotification(notification, 'warning'),
    error: applyAntNotification(notification, 'error'),
    open: applyAntNotification(notification, 'info')
  });
  return [neatNotification, context];
};
var notification = _objectSpread(_objectSpread({}, restProps), {}, {
  useNotification: applyUseAntNotification,
  success: applyAntNotification(AntNotification, 'success'),
  info: applyAntNotification(AntNotification, 'info'),
  warning: applyAntNotification(AntNotification, 'warning'),
  error: applyAntNotification(AntNotification, 'error'),
  open: applyAntNotification(AntNotification, 'info')
});
export default notification;