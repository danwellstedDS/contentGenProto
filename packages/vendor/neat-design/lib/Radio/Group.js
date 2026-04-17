"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _RadioGroupContext = _interopRequireDefault(require("./RadioGroupContext"));
var _antd = require("antd");
var _ = _interopRequireDefault(require("."));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["size", "state", "options"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // hooks
// Contexts
// Components
// Types
function applyRadiosByOptions(options) {
  return options.map(function (option, idx) {
    if (typeof option === 'string' || typeof option === 'number') {
      return (0, _jsxRuntime.jsx)(_.default, {
        value: option,
        children: option
      }, option + '');
    } else {
      return (0, _jsxRuntime.jsx)(_.default, _objectSpread(_objectSpread({}, option), {}, {
        children: (option === null || option === void 0 ? void 0 : option.label) || ''
      }), idx + '');
    }
  });
}
var RadioGroup = function RadioGroup(props) {
  var size = props.size,
    state = props.state,
    options = props.options,
    restProps = _objectWithoutProperties(props, _excluded);
  var radiosRender = (0, _react.useMemo)(function () {
    if (options !== null && options !== void 0 && options.length) {
      var radiosArrRender = applyRadiosByOptions(options);
      return (0, _jsxRuntime.jsx)(_antd.Radio.Group, _objectSpread(_objectSpread({}, restProps), {}, {
        children: radiosArrRender
      }));
    } else {
      return (0, _jsxRuntime.jsx)(_antd.Radio.Group, _objectSpread({}, restProps));
    }
  }, [options, restProps]);
  return (0, _jsxRuntime.jsx)(_RadioGroupContext.default.Provider, {
    value: {
      size: size,
      state: state
    },
    children: radiosRender
  });
};
var _default = exports.default = RadioGroup;