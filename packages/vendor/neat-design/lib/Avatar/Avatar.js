"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = require("react");
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["size"],
  _excluded2 = ["children", "size"]; // Components
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
var Avatar = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className;
  var _useStyle = (0, _style.default)(),
    avatarStyle = _useStyle.avatarStyle;
  var size = props.size,
    restProps = _objectWithoutProperties(props, _excluded);
  var cSize = size === 'medium' ? 'default' : size;
  var cls = (0, _classnames.default)(className, avatarStyle);
  return (0, _jsxRuntime.jsx)(_antd.Avatar, _objectSpread(_objectSpread({}, restProps), {}, {
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
  var _useStyle2 = (0, _style.default)({
      father: '& '
    }),
    groupStyle = _useStyle2.groupStyle;
  var cSize = size === 'medium' ? 'default' : size;
  var cls = (0, _classnames.default)(className, groupStyle);
  return (0, _jsxRuntime.jsx)(_antd.Avatar.Group, _objectSpread(_objectSpread({}, res), {}, {
    size: cSize,
    className: cls,
    children: children
  }));
};
Avatar.Group = AvatarGroup;
if (process.env.NODE_ENV !== 'production') {
  Avatar.displayName = 'Avatar';
}
var _default = exports.default = Avatar;