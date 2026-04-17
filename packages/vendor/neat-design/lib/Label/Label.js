"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _HelpCircleOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/HelpCircleOutlined"));
var _style = _interopRequireDefault(require("./style"));
var _Tooltip = _interopRequireDefault(require("../Tooltip"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["children", "className", "size", "optional", "required", "tooltips"];
/**
 * @file Label.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Components
// Icons
// Vendors
// Types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Label = function Label(_ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$optional = _ref.optional,
    optional = _ref$optional === void 0 ? false : _ref$optional,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    tooltips = _ref.tooltips,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyle = (0, _style.default)(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;
  return (0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, restProps), {}, {
    className: (0, _classnames.default)(styles, "".concat(prefixCls, "-label"), "".concat(prefixCls, "-label-size-").concat(size), _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-label-optional"), optional), "".concat(prefixCls, "-label-required"), required), "".concat(prefixCls, "-label-tooltips"), tooltips), className),
    children: [children, required && (0, _jsxRuntime.jsx)("span", {
      className: "".concat(prefixCls, "-label-required-mark"),
      children: "*"
    }), tooltips && (0, _jsxRuntime.jsx)(_Tooltip.default, {
      title: tooltips,
      children: (0, _jsxRuntime.jsx)("span", {
        className: "".concat(prefixCls, "-label-tooltips-icon"),
        children: (0, _jsxRuntime.jsx)(_HelpCircleOutlined2.default, {})
      })
    }), optional && (0, _jsxRuntime.jsx)("span", {
      className: "".concat(prefixCls, "-label-optional-text"),
      children: "(Optional)"
    })]
  }));
};
var _default = exports.default = Label;