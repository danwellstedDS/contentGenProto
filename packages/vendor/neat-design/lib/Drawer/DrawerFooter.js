"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _hooks = require("../hooks");
var _DrawerContext = _interopRequireDefault(require("./DrawerContext"));
var _Action = _interopRequireDefault(require("../Action"));
var _classnames = _interopRequireDefault(require("classnames"));
var _drawerFooter = _interopRequireDefault(require("./style/drawerFooter"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "direction", "okButtonProps", "okText", "okType", "cancelButtonProps", "cancelText", "cancelType", "info", "extraButtons", "onOk", "onCancel"];
/**
 * @file DrawerFooter.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Contexts
// Components
// Vendors
// Styles
// Types
// Export props type
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DrawerFooter = function DrawerFooter(_ref) {
  var className = _ref.className,
    direction = _ref.direction,
    okButtonProps = _ref.okButtonProps,
    okText = _ref.okText,
    _ref$okType = _ref.okType,
    okType = _ref$okType === void 0 ? 'primary' : _ref$okType,
    cancelButtonProps = _ref.cancelButtonProps,
    cancelText = _ref.cancelText,
    _ref$cancelType = _ref.cancelType,
    cancelType = _ref$cancelType === void 0 ? 'tertiary' : _ref$cancelType,
    info = _ref.info,
    extraButtons = _ref.extraButtons,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyle = (0, _drawerFooter.default)(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;
  var _useLocale = (0, _hooks.useLocale)(),
    drawerLocale = _useLocale.Drawer;
  var _useContext = (0, _react.useContext)(_DrawerContext.default),
    placement = _useContext.placement,
    onClose = _useContext.onClose;

  /**
   * Compute alignment according to Drawer placement
   */
  var mergedDirection = (0, _react.useMemo)(function () {
    if (direction) {
      return direction;
    }
    return placement === 'right' ? 'l2r' : 'r2l';
  }, [direction, placement]);

  /**
   * Handle save button click event
   */
  var handleSave = (0, _react.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    onOk === null || onOk === void 0 || onOk.apply(void 0, args.concat([onClose]));
  }, [onClose, onOk]);

  /**
   * Handle cancel button click event
   */
  var handleCancel = (0, _react.useCallback)(function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    onClose === null || onClose === void 0 || onClose.apply(void 0, args);
    onCancel === null || onCancel === void 0 || onCancel.apply(void 0, args);
  }, [onCancel, onClose]);
  return (0, _jsxRuntime.jsx)(_Action.default, _objectSpread(_objectSpread({}, restProps), {}, {
    className: (0, _classnames.default)(styles, "".concat(prefixCls, "-drawer-footer-content"), className),
    direction: mergedDirection,
    okText: okText || drawerLocale.okText,
    okType: okType,
    okButtonProps: okButtonProps,
    cancelText: cancelText || drawerLocale.cancelText,
    cancelType: cancelType,
    cancelButtonProps: cancelButtonProps,
    info: info,
    extraButtons: extraButtons,
    onOk: handleSave,
    onCancel: handleCancel
  }));
};
var _default = exports.default = DrawerFooter;