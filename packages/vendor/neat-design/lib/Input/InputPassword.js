"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _HideOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/HideOutlined"));
var _ViewFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ViewFilled"));
var _CloseCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/CloseCircleFilled"));
var _LockOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/LockOutlined"));
var _usePrefixCls = _interopRequireDefault(require("../hooks/usePrefixCls"));
var _style = _interopRequireWildcard(require("./style"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = require("react");
var _useConvertSize = require("../hooks/useConvertSize");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["allowClear", "prefix", "size"];
/**
 * @file InputPassword.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Components
// Types
// Vendors
// Types
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var InputPassword = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
    _ref$prefix = _ref.prefix,
    prefix = _ref$prefix === void 0 ? (0, _jsxRuntime.jsx)(_LockOutlined2.default, {}) : _ref$prefix,
    size = _ref.size,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var readOnly = restProps.readOnly,
    customCls = restProps.className;
  var prefixCls = (0, _usePrefixCls.default)();
  var cSize = (0, _useConvertSize.useConvertSizeMediumAsMiddle)(size);
  var commonStyles = (0, _style.default)({
    size: size
  });
  var passwordStyles = (0, _style.usePasswordStyle)({
    size: size
  });
  var cls = (0, _classnames.default)(_defineProperty({}, "".concat(prefixCls, "-input-readonly"), readOnly), customCls, commonStyles, passwordStyles);
  var computedAllowClear = allowClear === true ? {
    clearIcon: (0, _jsxRuntime.jsx)(_CloseCircleFilled2.default, {})
  } : allowClear;
  return (0, _jsxRuntime.jsx)(_antd.Input.Password, _objectSpread(_objectSpread({
    iconRender: function iconRender(visible) {
      return visible ? (0, _jsxRuntime.jsx)(_ViewFilled2.default, {}) : (0, _jsxRuntime.jsx)(_HideOutlined2.default, {});
    },
    allowClear: computedAllowClear
  }, restProps), {}, {
    className: cls,
    ref: ref,
    prefix: prefix,
    size: cSize
  }));
});
if (process.env.NODE_ENV !== 'production') {
  InputPassword.displayName = 'Input Password';
}
var _default = exports.default = InputPassword;