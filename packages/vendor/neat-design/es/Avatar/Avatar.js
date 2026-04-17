function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["size"],
  _excluded2 = ["children", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// Components
import { Avatar as AntAvatar } from 'antd';

// Vendors
import classNames from 'classnames';
import { forwardRef } from 'react';

// Styles
import useStyle from "./style";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Avatar = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className;
  var _useStyle = useStyle(),
    avatarStyle = _useStyle.avatarStyle;
  var size = props.size,
    restProps = _objectWithoutProperties(props, _excluded);
  var cSize = size === 'medium' ? 'default' : size;
  var cls = classNames(className, avatarStyle);
  return _jsx(AntAvatar, _objectSpread(_objectSpread({}, restProps), {}, {
    size: cSize,
    ref: ref,
    className: cls
  }));
});
var AvatarGroup = function AvatarGroup(props) {
  var _props$className2 = props.className,
    className = _props$className2 === void 0 ? '' : _props$className2;
  var children = props.children,
    size = props.size,
    res = _objectWithoutProperties(props, _excluded2);
  var _useStyle2 = useStyle({
      father: '& '
    }),
    groupStyle = _useStyle2.groupStyle;
  var cSize = size === 'medium' ? 'default' : size;
  var cls = classNames(className, groupStyle);
  return _jsx(AntAvatar.Group, _objectSpread(_objectSpread({}, res), {}, {
    size: cSize,
    className: cls,
    children: children
  }));
};
Avatar.Group = AvatarGroup;
if (process.env.NODE_ENV !== 'production') {
  Avatar.displayName = 'Avatar';
}
export default Avatar;