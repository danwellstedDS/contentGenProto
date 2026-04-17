function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["size", "state"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Radio.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author pipi(peter.rao@derbysoft.net)
 */

// Hooks
import { useContext } from 'react';
import useConfig from "../ConfigProvider/useConfig";

// Contexts
import RadioGroupContext from "./RadioGroupContext";

// Components
import { Radio as AntRadio } from 'antd';

// Vendors
import { forwardRef } from 'react';

// Styles
import useStyle from "./style";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Radio = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref3, _ref4, _ref5;
  var size = _ref.size,
    state = _ref.state,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _ref2 = useContext(RadioGroupContext) || {},
    contextSize = _ref2.size,
    contextState = _ref2.state;
  var _useConfig = useConfig(),
    componentSize = _useConfig.componentSize;
  var computedSize = (_ref3 = (_ref4 = size !== null && size !== void 0 ? size : contextSize) !== null && _ref4 !== void 0 ? _ref4 : componentSize) !== null && _ref3 !== void 0 ? _ref3 : 'medium';
  var computedState = (_ref5 = state !== null && state !== void 0 ? state : contextState) !== null && _ref5 !== void 0 ? _ref5 : void 0;
  var css = useStyle({
    father: '&',
    size: computedSize,
    state: computedState
  });
  return _jsx(AntRadio, _objectSpread(_objectSpread({}, restProps), {}, {
    css: css,
    ref: ref
  }));
});
export default Radio;