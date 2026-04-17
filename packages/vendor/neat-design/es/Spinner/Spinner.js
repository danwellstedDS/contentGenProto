function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children", "indicator", "size", "tipPlacement", "mode", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Spinner.tsx
 * @author pipi(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useStyle from "./style";
import useConvertSize from "../hooks/useConvertSize";
import { useComponetsToken } from "../hooks";

// Components
import { Spin as AntSpin } from 'antd';
import React, { useMemo } from 'react';
import { getHolder, setHolder } from "./defaultIndicatorHolder";
import SpinnerSuccess from "./Success";
import SpinnerError from "./Error";

// Vendors
import classNames from 'classnames';

// Types

import InternalLoading from "./InternalLoading";

// Icons
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
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
  var styles = useStyle(tipPlacement);
  var _restProps$spinning = restProps.spinning,
    spinning = _restProps$spinning === void 0 ? true : _restProps$spinning;
  var _useComponetsToken = useComponetsToken(),
    spinnerToken = _useComponetsToken.Spinner;
  var cSize = useConvertSize(size);
  var color = useMemo(function () {
    switch (mode) {
      case 'black':
        return spinnerToken["spinner-color-icon-black"];
      case 'inverse':
        return spinnerToken["spinner-color-icon-inverse"];
      default:
        return spinnerToken["spinner-color-icon"];
    }
  }, [mode, spinnerToken]);
  var iconProps = useMemo(function () {
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
  var GlobalIndicator = getHolder();
  var DefaultIndicator = useMemo(function () {
    return /*#__PURE__*/React.createElement(InternalLoading, _objectSpread(_objectSpread({}, iconProps), {}, {
      as: 'span',
      spinning: spinning,
      color: color
    }));
  }, [color, iconProps, spinning]);
  var Indicator = useMemo(function () {
    if (GlobalIndicator) return null;
    if (indicator) {
      return indicator;
    } else {
      return DefaultIndicator;
    }
  }, [DefaultIndicator, GlobalIndicator, indicator]);
  var cls = classNames(styles, className);
  return _jsx(AntSpin, _objectSpread(_objectSpread({}, restProps), {}, {
    size: cSize,
    indicator: (_ref2 = Indicator !== null && Indicator !== void 0 ? Indicator : GlobalIndicator) !== null && _ref2 !== void 0 ? _ref2 : DefaultIndicator,
    className: cls,
    children: children
  }));
};
Spinner.setDefaultIndicator = function (indicator) {
  AntSpin.setDefaultIndicator(indicator);
  setHolder(indicator);
};
Spinner.Success = SpinnerSuccess;
Spinner.Error = SpinnerError;
if (process.env.NODE_ENV !== 'production') {
  Spinner.displayName = 'Spinner';
}
export default Spinner;