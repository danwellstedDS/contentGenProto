"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InternalSkeletonNotification = void 0;
var _SkeletonAvatar = require("./SkeletonAvatar");
var _SkeletonButton = require("./SkeletonButton");
var _SkeletonItem = _interopRequireDefault(require("./SkeletonItem"));
var _SkeletonParagraph = require("./SkeletonParagraph");
var _SkeletonTitleBox = require("./SkeletonTitleBox");
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _notification = _interopRequireDefault(require("./style/notification"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "style", "size", "avatar", "titleBox", "paragraph", "button"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); } /**
 * @file SkeletonNotification.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */ // Components
// Vendors
// Styles
// Types
function getComponentProps(prop) {
  if (prop && _typeof(prop) === 'object') {
    return prop;
  }
  return {};
}
var InternalSkeletonNotification = exports.InternalSkeletonNotification = function InternalSkeletonNotification(_ref) {
  var className = _ref.className,
    style = _ref.style,
    size = _ref.size,
    _ref$avatar = _ref.avatar,
    avatar = _ref$avatar === void 0 ? true : _ref$avatar,
    _ref$titleBox = _ref.titleBox,
    titleBox = _ref$titleBox === void 0 ? true : _ref$titleBox,
    _ref$paragraph = _ref.paragraph,
    paragraph = _ref$paragraph === void 0 ? true : _ref$paragraph,
    _ref$button = _ref.button,
    button = _ref$button === void 0 ? true : _ref$button,
    restprops = _objectWithoutProperties(_ref, _excluded);
  var _useStyle = (0, _notification.default)(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;
  return (0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-skeleton-notification"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-skeleton-notification-small"), size === 'small'), "".concat(prefixCls, "-skeleton-notification-large"), size === 'large'), styles, className),
    style: style,
    children: [avatar && (0, _jsxRuntime.jsx)(_SkeletonAvatar.InternalSkeletonAvatar, _objectSpread(_objectSpread({}, restprops), {}, {
      size: size
    }, getComponentProps(avatar))), (0, _jsxRuntime.jsxs)("div", {
      className: "".concat(prefixCls, "-skeleton-notification-content"),
      children: [titleBox && (0, _jsxRuntime.jsx)(_SkeletonTitleBox.InternalSkeletonTitleBox, _objectSpread(_objectSpread({}, restprops), {}, {
        size: size
      }, getComponentProps(titleBox))), paragraph && (0, _jsxRuntime.jsx)(_SkeletonParagraph.InternalSkeletonParagraph, _objectSpread(_objectSpread({}, restprops), {}, {
        size: size
      }, getComponentProps(paragraph))), button && (0, _jsxRuntime.jsx)(_SkeletonButton.InternalSkeletonButton, _objectSpread(_objectSpread({}, restprops), {}, {
        size: size
      }, getComponentProps(button)))]
    })]
  });
};
var SkeletonNotification = function SkeletonNotification(props) {
  return (0, _jsxRuntime.jsx)(_SkeletonItem.default, _objectSpread(_objectSpread({}, (0, _omit.default)(props, ['avatar', 'titleBox', 'paragraph', 'button'])), {}, {
    className: props === null || props === void 0 ? void 0 : props.rootClassName,
    loadingPlaceholder: (0, _jsxRuntime.jsx)(InternalSkeletonNotification, _objectSpread({}, props)),
    block: true
  }));
};
var _default = exports.default = SkeletonNotification;