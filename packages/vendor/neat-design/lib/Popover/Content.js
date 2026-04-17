"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Action = _interopRequireDefault(require("../Action"));
var _classnames = _interopRequireDefault(require("classnames"));
var _content = _interopRequireDefault(require("./style/content"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @file Content.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */ // Hooks
// Components
// Vendors
// Styles
// Types
var Content = function Content(_ref) {
  var icon = _ref.icon,
    content = _ref.content,
    _ref$okButton = _ref.okButton,
    okButton = _ref$okButton === void 0 ? false : _ref$okButton,
    okText = _ref.okText,
    okType = _ref.okType,
    okButtonProps = _ref.okButtonProps,
    _ref$cancelButton = _ref.cancelButton,
    cancelButton = _ref$cancelButton === void 0 ? false : _ref$cancelButton,
    cancelButtonProps = _ref.cancelButtonProps,
    cancelText = _ref.cancelText,
    cancelType = _ref.cancelType,
    close = _ref.close,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel;
  var _useContentStyle = (0, _content.default)(),
    prefixCls = _useContentStyle.prefixCls,
    styles = _useContentStyle.styles;

  /**
   * Whether there is any action or not.
   */
  var hasAction = (0, _react.useMemo)(function () {
    return okButton || cancelButton;
  }, [cancelButton, okButton]);

  /**
   * Handle the different type of `content` prop
   */
  var mergedContent = (0, _react.useMemo)(function () {
    return typeof content === 'function' ? content() : content;
  }, [content]);

  /**
   * Handle OK button clicked.
   */
  var handleOkClick = (0, _react.useCallback)(function (e) {
    var _okButtonProps$onClic;
    close();
    onOk === null || onOk === void 0 || onOk(e);
    okButtonProps === null || okButtonProps === void 0 || (_okButtonProps$onClic = okButtonProps.onClick) === null || _okButtonProps$onClic === void 0 || _okButtonProps$onClic.call(okButtonProps, e);
  }, [close, okButtonProps, onOk]);

  /**
   * Handle cancel button clicked.
   */
  var handleCancelClick = (0, _react.useCallback)(function (e) {
    var _cancelButtonProps$on;
    close();
    onCancel === null || onCancel === void 0 || onCancel(e);
    cancelButtonProps === null || cancelButtonProps === void 0 || (_cancelButtonProps$on = cancelButtonProps.onClick) === null || _cancelButtonProps$on === void 0 || _cancelButtonProps$on.call(cancelButtonProps, e);
  }, [close, cancelButtonProps, onCancel]);
  return (0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-popover-inner-content-inner"), {
      'has-icon': icon
    }, styles),
    children: [mergedContent, hasAction && (0, _jsxRuntime.jsx)(_Action.default, {
      className: "".concat(prefixCls, "-popover-action"),
      bordered: false,
      okButton: okButton,
      okButtonProps: _objectSpread({
        size: 'small'
      }, okButtonProps),
      okText: okText,
      okType: okType,
      cancelButton: cancelButton,
      cancelButtonProps: _objectSpread({
        size: 'small'
      }, cancelButtonProps),
      cancelText: cancelText,
      cancelType: cancelType,
      onOk: handleOkClick,
      onCancel: handleCancelClick
    })]
  });
};
var _default = exports.default = Content;