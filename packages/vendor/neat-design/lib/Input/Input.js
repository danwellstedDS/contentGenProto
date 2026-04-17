"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CloseCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/CloseCircleFilled"));
var _useConvertSize = require("../hooks/useConvertSize");
var _usePrefixCls = _interopRequireDefault(require("../hooks/usePrefixCls"));
var _style = _interopRequireDefault(require("./style"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = require("react");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["allowClear", "size"];
/**
 * @file Input.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Components
// Icons
// Vendors
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
var Input = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
    size = _ref.size,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var readOnly = restProps.readOnly,
    customCls = restProps.className;
  var prefixCls = (0, _usePrefixCls.default)();
  var cSize = (0, _useConvertSize.useConvertSizeMediumAsMiddle)(size);
  var styles = (0, _style.default)({
    size: size
  });
  var cls = (0, _classnames.default)(_defineProperty({}, "".concat(prefixCls, "-input-readonly"), readOnly), customCls, styles);
  var computedAllowClear = allowClear === true ? {
    clearIcon: (0, _jsxRuntime.jsx)(_CloseCircleFilled2.default, {})
  } : allowClear;
  return (0, _jsxRuntime.jsx)(_antd.Input, _objectSpread(_objectSpread({
    allowClear: computedAllowClear
  }, restProps), {}, {
    className: cls,
    ref: ref,
    size: cSize
  }));
});
if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input';
}
var _default = exports.default = Input;