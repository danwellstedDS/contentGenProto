function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _HideOutlined from "@derbysoft/neat-design-icons/lib/icons-react/HideOutlined";
import _ViewFilled from "@derbysoft/neat-design-icons/lib/icons-react/ViewFilled";
import _CloseCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/CloseCircleFilled";
import _LockOutlined from "@derbysoft/neat-design-icons/lib/icons-react/LockOutlined";
var _excluded = ["allowClear", "prefix", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file InputPassword.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import usePrefixCls from "../hooks/usePrefixCls";
import useStyle, { usePasswordStyle } from "./style";

// Components

import { Input as AntInput } from 'antd';

// Types

// Vendors
import classNames from 'classnames';
import { forwardRef } from 'react';

// Types
import { useConvertSizeMediumAsMiddle } from "../hooks/useConvertSize";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var InputPassword = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
    _ref$prefix = _ref.prefix,
    prefix = _ref$prefix === void 0 ? _jsx(_LockOutlined, {}) : _ref$prefix,
    size = _ref.size,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var readOnly = restProps.readOnly,
    customCls = restProps.className;
  var prefixCls = usePrefixCls();
  var cSize = useConvertSizeMediumAsMiddle(size);
  var commonStyles = useStyle({
    size: size
  });
  var passwordStyles = usePasswordStyle({
    size: size
  });
  var cls = classNames(_defineProperty({}, "".concat(prefixCls, "-input-readonly"), readOnly), customCls, commonStyles, passwordStyles);
  var computedAllowClear = allowClear === true ? {
    clearIcon: _jsx(_CloseCircleFilled, {})
  } : allowClear;
  return _jsx(AntInput.Password, _objectSpread(_objectSpread({
    iconRender: function iconRender(visible) {
      return visible ? _jsx(_ViewFilled, {}) : _jsx(_HideOutlined, {});
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
export default InputPassword;