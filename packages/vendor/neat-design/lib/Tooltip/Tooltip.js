"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../hooks");
var _antd = require("antd");
var _react = require("react");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["styles", "mode"];
/**
 * @file Tooltip.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author rzh(peter.rao@derbysoft.net)
 */
// Hooks
// Components
// Vendors
// Types
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tooltip = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var styles = _ref.styles,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'dark' : _ref$mode,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var color = restProps.color;
  var _useComponetsToken = (0, _hooks.useComponetsToken)(),
    tooltipToken = _useComponetsToken.Tooltip;
  return (0, _jsxRuntime.jsx)(_antd.Tooltip, _objectSpread(_objectSpread({
    color: color || (mode === 'light' ? tooltipToken['tooltip-color-bg-light'] : tooltipToken['tooltip-color-bg-dark']),
    styles: _objectSpread({
      body: {
        color: mode === 'light' ? tooltipToken['tooltip-color-text-light'] : tooltipToken['tooltip-color-text-dark']
      }
    }, styles)
  }, restProps), {}, {
    ref: ref
  }));
});
var _default = exports.default = Tooltip;