"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("./style"));
var _useConvertSize = _interopRequireDefault(require("../hooks/useConvertSize"));
var _hooks = require("../hooks");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _defaultIndicatorHolder = require("./defaultIndicatorHolder");
var _Success = _interopRequireDefault(require("./Success"));
var _Error = _interopRequireDefault(require("./Error"));
var _classnames = _interopRequireDefault(require("classnames"));
var _InternalLoading = _interopRequireDefault(require("./InternalLoading"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["children", "indicator", "size", "tipPlacement", "mode", "className"];
/**
 * @file Spinner.tsx
 * @author pipi(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Components
// Vendors
// Types
// Icons
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
var Spinner = function Spinner(_ref) {
  var _ref2;
  var children = _ref.children,
    indicator = _ref.indicator,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$tipPlacement = _ref.tipPlacement,
    tipPlacement = _ref$tipPlacement === void 0 ? 'below' : _ref$tipPlacement,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'default' : _ref$mode,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var styles = (0, _style.default)(tipPlacement);
  var _restProps$spinning = restProps.spinning,
    spinning = _restProps$spinning === void 0 ? true : _restProps$spinning;
  var _useComponetsToken = (0, _hooks.useComponetsToken)(),
    spinnerToken = _useComponetsToken.Spinner;
  var cSize = (0, _useConvertSize.default)(size);
  var color = (0, _react.useMemo)(function () {
    switch (mode) {
      case 'black':
        return spinnerToken["spinner-color-icon-black"];
      case 'inverse':
        return spinnerToken["spinner-color-icon-inverse"];
      default:
        return spinnerToken["spinner-color-icon"];
    }
  }, [mode, spinnerToken]);
  var iconProps = (0, _react.useMemo)(function () {
    switch (size) {
      case 'small':
        return {
          size: spinnerToken["spinner-size-small"],
          circleThickness: 2
        };
      case 'large':
        return {
          size: spinnerToken["spinner-size-large"],
          circleThickness: 4
        };
      default:
        return {
          size: spinnerToken["spinner-size-medium"],
          circleThickness: 3
        };
    }
  }, [size, spinnerToken]);
  var GlobalIndicator = (0, _defaultIndicatorHolder.getHolder)();
  var DefaultIndicator = (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement(_InternalLoading.default, _objectSpread(_objectSpread({}, iconProps), {}, {
      as: 'span',
      spinning: spinning,
      color: color
    }));
  }, [color, iconProps, spinning]);
  var Indicator = (0, _react.useMemo)(function () {
    if (GlobalIndicator) return null;
    if (indicator) {
      return indicator;
    } else {
      return DefaultIndicator;
    }
  }, [DefaultIndicator, GlobalIndicator, indicator]);
  var cls = (0, _classnames.default)(styles, className);
  return (0, _jsxRuntime.jsx)(_antd.Spin, _objectSpread(_objectSpread({}, restProps), {}, {
    size: cSize,
    indicator: (_ref2 = Indicator !== null && Indicator !== void 0 ? Indicator : GlobalIndicator) !== null && _ref2 !== void 0 ? _ref2 : DefaultIndicator,
    className: cls,
    children: children
  }));
};
Spinner.setDefaultIndicator = function (indicator) {
  _antd.Spin.setDefaultIndicator(indicator);
  (0, _defaultIndicatorHolder.setHolder)(indicator);
};
Spinner.Success = _Success.default;
Spinner.Error = _Error.default;
if (process.env.NODE_ENV !== 'production') {
  Spinner.displayName = 'Spinner';
}
var _default = exports.default = Spinner;