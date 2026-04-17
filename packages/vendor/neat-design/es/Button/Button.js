function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["dropdown"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Button.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import usePrefixCls from "../hooks/usePrefixCls";
import useDropdown from "./useDropdown";
import usePress from "./usePress";

// Components
import { Button as AntButton } from 'antd';

// Vendors
import classNames from 'classnames';
import { forwardRef } from 'react';
import { neatButtonProps2AntButtonProps } from "./util";

// Styles
import useStyle from "./style";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var InternalButton = function InternalButton(_ref, ref) {
  var dropdown = _ref.dropdown,
    props = _objectWithoutProperties(_ref, _excluded);
  var prefixCls = usePrefixCls();
  var _useStyle = useStyle(),
    styles = _useStyle.styles;
  var className = props.className,
    _props$type = props.type,
    type = _props$type === void 0 ? 'secondary' : _props$type,
    originChildren = props.children,
    originOnMouseDown = props.onMouseDown,
    originOnMouseUP = props.onMouseUp,
    originOnMouseOut = props.onMouseOut;
  var _usePress = usePress({
      onMouseDown: originOnMouseDown,
      onMouseUp: originOnMouseUP,
      onMouseOut: originOnMouseOut
    }),
    pressStatus = _usePress.pressStatus,
    onMouseDown = _usePress.onMouseDown,
    onMouseUp = _usePress.onMouseUp,
    onMouseOut = _usePress.onMouseOut;
  var children = useDropdown({
    dropdown: dropdown,
    children: originChildren
  });
  var mergedProps = neatButtonProps2AntButtonProps(props);
  return _jsx(AntButton, _objectSpread(_objectSpread({}, mergedProps), {}, {
    ref: ref,
    className: classNames(styles, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-btn-has-icon"), !!(mergedProps !== null && mergedProps !== void 0 && mergedProps.icon)), "".concat(prefixCls, "-btn-tertiary"), type === 'tertiary'), "".concat(prefixCls, "-btn-tertiary-inline"), type === 'tertiaryInline'), "".concat(prefixCls, "-btn-press"), pressStatus), className),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseOut: onMouseOut,
    children: children
  }));
};
var Button = /*#__PURE__*/forwardRef(InternalButton);
Button.Group = AntButton.Group;
if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}
export default Button;