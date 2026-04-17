"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _WarningCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/WarningCircleFilled"));
var _InfoCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/InfoCircleFilled"));
var _SuccessCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/SuccessCircleFilled"));
var _react = require("react");
var _antd = require("antd");
var _CloseButton = _interopRequireDefault(require("../CloseButton"));
var _classnames = _interopRequireDefault(require("classnames"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "type", "message", "description", "action", "icon", "closable"];
/**
 * @file Alert.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Components
// Icons
// Vendors
// Styles
// Types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Alert = function Alert(_ref) {
  var className = _ref.className,
    type = _ref.type,
    message = _ref.message,
    description = _ref.description,
    action = _ref.action,
    icon = _ref.icon,
    closable = _ref.closable,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyle = (0, _style.default)(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles,
    componentsToken = _useStyle.componentsToken;
  var alertToken = componentsToken.Alert;
  var mergedIcon = (0, _react.useMemo)(function () {
    if (icon) {
      return icon;
    }
    switch (type) {
      case 'success':
        return (0, _jsxRuntime.jsx)(_SuccessCircleFilled2.default, {});
      case 'info':
        return (0, _jsxRuntime.jsx)(_InfoCircleFilled2.default, {});
      case 'warning':
        return (0, _jsxRuntime.jsx)(_WarningCircleFilled2.default, {});
      case 'error':
        return (0, _jsxRuntime.jsx)(_WarningCircleFilled2.default, {});
      default:
        return icon !== null && icon !== void 0 ? icon : (0, _jsxRuntime.jsx)(_InfoCircleFilled2.default, {});
    }
  }, [type, icon]);
  var mergedClosable = (0, _react.useMemo)(function () {
    if (!closable || closable !== null && closable !== void 0 && closable.closeIcon) {
      return closable;
    }
    return {
      closeIcon: (0, _jsxRuntime.jsx)(_CloseButton.default, {
        tagName: "span",
        size: alertToken['alert-size-icon']
      })
    };
  }, [alertToken, closable]);
  return (0, _jsxRuntime.jsx)(_antd.Alert, _objectSpread(_objectSpread({}, restProps), {}, {
    className: (0, _classnames.default)(styles, className),
    type: type,
    message: message && !description && action ? (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [message, (0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-alert-message-action"),
        children: action
      })]
    }) : message,
    description: description && action ? (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [description, (0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-alert-description-action"),
        children: action
      })]
    }) : description,
    icon: (0, _jsxRuntime.jsx)("div", {
      children: mergedIcon
    }),
    closable: mergedClosable
  }));
};
var _default = exports.default = Alert;