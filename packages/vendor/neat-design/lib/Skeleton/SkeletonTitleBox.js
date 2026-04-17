"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InternalSkeletonTitleBox = void 0;
var _SkeletonBar = require("./SkeletonBar");
var _SkeletonIcon = require("./SkeletonIcon");
var _SkeletonItem = _interopRequireDefault(require("./SkeletonItem"));
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _titleBox = _interopRequireDefault(require("./style/title-box"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "style", "size", "icon"];
/**
 * @file SkeletonTitleBox.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Components
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
var InternalSkeletonTitleBox = exports.InternalSkeletonTitleBox = function InternalSkeletonTitleBox(_ref) {
  var className = _ref.className,
    style = _ref.style,
    size = _ref.size,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? true : _ref$icon,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyle = (0, _titleBox.default)(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;
  return (0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-skeleton-title-box"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-skeleton-title-box-small"), size === 'small'), "".concat(prefixCls, "-skeleton-title-box-large"), size === 'large'), styles.element, className),
    style: style,
    children: [icon && (0, _jsxRuntime.jsx)(_SkeletonIcon.InternalSkeletonIcon, _objectSpread(_objectSpread({}, restProps), {}, {
      size: size
    })), (0, _jsxRuntime.jsx)(_SkeletonBar.InternalSkeletonBar, _objectSpread(_objectSpread({}, restProps), {}, {
      size: size
    }))]
  });
};
var SkeletonTitleBox = function SkeletonTitleBox(props) {
  return (0, _jsxRuntime.jsx)(_SkeletonItem.default, _objectSpread(_objectSpread({}, (0, _omit.default)(props, ['icon'])), {}, {
    className: props === null || props === void 0 ? void 0 : props.rootClassName,
    loadingPlaceholder: (0, _jsxRuntime.jsx)(InternalSkeletonTitleBox, _objectSpread({}, props)),
    block: true
  }));
};
var _default = exports.default = SkeletonTitleBox;