function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "type", "direction", "bordered", "info", "extraButtons", "okButton", "okButtonProps", "okText", "okType", "cancelButton", "cancelButtonProps", "cancelText", "cancelType", "buttonsRender", "actionRender", "onOk", "onCancel"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Action.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCallback, useMemo } from 'react';
import { useLocale } from "../hooks";

// Components
import Button from "../Button";

// Vendors
import classNames from 'classnames';

// Styles
import useStyle from "./style";

// Types

// Export props type
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var Action = function Action(_ref) {
  var className = _ref.className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'footer' : _ref$type,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'r2l' : _ref$direction,
    _ref$bordered = _ref.bordered,
    bordered = _ref$bordered === void 0 ? true : _ref$bordered,
    info = _ref.info,
    extraButtons = _ref.extraButtons,
    _ref$okButton = _ref.okButton,
    okButton = _ref$okButton === void 0 ? true : _ref$okButton,
    okButtonProps = _ref.okButtonProps,
    okText = _ref.okText,
    _ref$okType = _ref.okType,
    okType = _ref$okType === void 0 ? 'primary' : _ref$okType,
    _ref$cancelButton = _ref.cancelButton,
    cancelButton = _ref$cancelButton === void 0 ? true : _ref$cancelButton,
    cancelButtonProps = _ref.cancelButtonProps,
    cancelText = _ref.cancelText,
    _ref$cancelType = _ref.cancelType,
    cancelType = _ref$cancelType === void 0 ? 'secondary' : _ref$cancelType,
    buttonsRender = _ref.buttonsRender,
    actionRender = _ref.actionRender,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel,
    restProps = _objectWithoutProperties(_ref, _excluded);
  /**
   * Get action locale data
   */
  var _useLocale = useLocale(),
    actionLocale = _useLocale.Action;

  /**
   * Action styles
   */
  var _useStyle = useStyle(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;

  /**
   * Handle OK button click event
   */
  var handleOK = useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    onOk === null || onOk === void 0 || onOk.apply(void 0, args);
  }, [onOk]);

  /**
   * Handle cancel button click event
   */
  var handleCancel = useCallback(function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    onCancel === null || onCancel === void 0 || onCancel.apply(void 0, args);
  }, [onCancel]);

  /**
   * Origin Action buttons
   */
  var originBtns = useMemo(function () {
    var size = type === 'picker' ? 'small' : undefined;
    return _jsxs(_Fragment, {
      children: [okButton && _jsx(Button, _objectSpread(_objectSpread({
        size: size
      }, okButtonProps), {}, {
        type: okType,
        className: classNames("".concat(prefixCls, "-action-ok-btn"), okButtonProps === null || okButtonProps === void 0 ? void 0 : okButtonProps.className),
        onClick: handleOK,
        children: okText || actionLocale.okText
      })), cancelButton && _jsx(Button, _objectSpread(_objectSpread({
        size: size
      }, cancelButtonProps), {}, {
        className: classNames("".concat(prefixCls, "-action-cancel-btn"), cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.className),
        type: cancelType,
        onClick: handleCancel,
        children: cancelText || actionLocale.cancelText
      })), extraButtons]
    });
  }, [actionLocale.cancelText, actionLocale.okText, cancelButton, cancelButtonProps, cancelText, cancelType, extraButtons, handleCancel, handleOK, okButton, okButtonProps, okText, okType, prefixCls, type]);

  /**
   * Merged Action buttons by `buttonsRender`.
   */
  var mergedButtons = useMemo(function () {
    return !buttonsRender ? originBtns : buttonsRender(originBtns);
  }, [buttonsRender, originBtns]);

  /**
   * Origin Action content
   */
  var originAction = useMemo(function () {
    return _jsxs(_Fragment, {
      children: [_jsx("div", {
        className: "".concat(prefixCls, "-action-btns"),
        children: mergedButtons
      }), info && _jsx("div", {
        className: "".concat(prefixCls, "-action-info"),
        children: info
      })]
    });
  }, [info, mergedButtons, prefixCls]);

  /**
   * Merged Action content by `actionRender`.
   */
  var mergedAction = useMemo(function () {
    return !actionRender ? originAction : actionRender(originAction);
  }, [actionRender, originAction]);
  return _jsx("div", _objectSpread(_objectSpread({}, restProps), {}, {
    className: classNames("".concat(prefixCls, "-action"), "".concat(prefixCls, "-action-").concat(type), "".concat(prefixCls, "-action-").concat(direction), _defineProperty({}, "".concat(prefixCls, "-action-bordered"), bordered), styles, className),
    children: mergedAction
  }));
};
export default Action;