var _excluded = ["size", "options", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Segmented.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { forwardRef, useMemo } from 'react';
import { useConvertSizeMediumAsMiddle } from "../hooks/useConvertSize";

// Components
import { Segmented as AntSegmented } from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import useStyle from "./style";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Segmented = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var size = _ref.size,
    options = _ref.options,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, _excluded);
  // 转换 size
  var mergedSize = useConvertSizeMediumAsMiddle(size);

  // 是否仅使用icon
  var onlyIcon = useMemo(function () {
    return options.every(function (item) {
      if (_typeof(item) === 'object') {
        // 判断是否存在label字段，存在则不可能是 onlyIcon。
        return !item.label;
      } else {
        return false;
      }
    });
  }, [options]);
  var _useStyle = useStyle({
      onlyIcon: onlyIcon
    }),
    styles = _useStyle.styles;
  return _jsx(AntSegmented, _objectSpread(_objectSpread({}, restProps), {}, {
    options: options,
    ref: ref,
    className: classNames(styles, className),
    size: mergedSize
  }));
});
if (process.env.NODE_ENV !== 'production') {
  Segmented.displayName = 'Segmented';
}
export default Segmented;