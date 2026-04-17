function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "simple", "itemRender"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Pagination.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';
import { useLocaleNumberFormat } from "../hooks";
import usePrefixCls from "../hooks/usePrefixCls";
import usePaginationProps from "./usePaginationProps";

// Components
import { Pagination as AntPagination } from 'antd';

// Vendors
import classNames from 'classnames';
import { cloneElement } from 'react';

// Styles
import useStyle from "./style";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Pagination = function Pagination(props) {
  var _useStyle = useStyle(),
    styles = _useStyle.styles;

  /**
   * Get prefixCls
   */
  var prefixCls = usePrefixCls();

  /**
   * Get decimalComma of current locale
   */
  var formatNumber = useLocaleNumberFormat();

  /**
   * Merge props
   */
  var _usePaginationProps = usePaginationProps(),
    mergeProps = _usePaginationProps.mergeProps;
  var _mergeProps = mergeProps(props),
    className = _mergeProps.className,
    simple = _mergeProps.simple,
    itemRender = _mergeProps.itemRender,
    restProps = _objectWithoutProperties(_mergeProps, _excluded);

  /**
   * Merge itemRender
   */
  var mergedItemRender = useMemo(function () {
    if (itemRender) {
      return itemRender;
    }
    return function (page, type, originalElement) {
      if (type !== 'page') {
        return originalElement;
      }
      return /*#__PURE__*/cloneElement(originalElement, {}, formatNumber(page));
    };
  }, [itemRender, formatNumber]);
  return _jsx(AntPagination, _objectSpread(_objectSpread({}, restProps), {}, {
    className: classNames(_defineProperty({}, "".concat(prefixCls, "-pagination-simple"), simple), styles, className),
    itemRender: mergedItemRender
  }));
};
export default Pagination;