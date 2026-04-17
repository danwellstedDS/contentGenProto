function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file Title.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCallback, useMemo } from 'react';

// Components
import CloseButton from "../CloseButton";

// Vendors
import classNames from 'classnames';

// Styles
import useTitleStyle from "./style/title";

// Types
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var Title = function Title(_ref) {
  var title = _ref.title,
    icon = _ref.icon,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? true : _ref$closable,
    closeButtonProps = _ref.closeButtonProps,
    close = _ref.close,
    onCancel = _ref.onCancel;
  var _useTitleStyle = useTitleStyle(),
    prefixCls = _useTitleStyle.prefixCls,
    styles = _useTitleStyle.styles;

  /**
   * Handle the different type of `title` prop
   */
  var mergedTitle = useMemo(function () {
    return typeof title === 'function' ? title() : title;
  }, [title]);

  /**
   * Handle close button clicked.
   */
  var handleClose = useCallback(function (e) {
    close();
    onCancel === null || onCancel === void 0 || onCancel(e);
  }, [close, onCancel]);
  return _jsxs("div", {
    className: classNames("".concat(prefixCls, "-popover-title-inner"), styles),
    children: [icon && _jsx("div", {
      className: "".concat(prefixCls, "-popover-icon"),
      children: icon
    }), _jsx("span", {
      children: mergedTitle
    }), closable && _jsx(CloseButton, _objectSpread(_objectSpread({
      size: 20
    }, closeButtonProps), {}, {
      className: classNames("".concat(prefixCls, "-popover-close-x"), closeButtonProps === null || closeButtonProps === void 0 ? void 0 : closeButtonProps.className),
      onClick: handleClose
    }))]
  });
};
export default Title;