function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "style", "size", "checkable", "rows", "cols"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file SkeletonTable.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';

// Components
import { InternalSkeletonBar } from "./SkeletonBar";
import { InternalSkeletonIcon } from "./SkeletonIcon";
import SkeletonItem from "./SkeletonItem";

// Vendors
import classNames from 'classnames';

// Styles
import useStyle from "./style/table";

// Types
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var SkeletonTable = function SkeletonTable(props) {
  var className = props.className,
    style = props.style,
    size = props.size,
    _props$checkable = props.checkable,
    checkable = _props$checkable === void 0 ? true : _props$checkable,
    _props$rows = props.rows,
    rows = _props$rows === void 0 ? 11 : _props$rows,
    _props$cols = props.cols,
    cols = _props$cols === void 0 ? 3 : _props$cols,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useStyle = useStyle(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;
  var mergedRows = useMemo(function () {
    return !rows || isNaN(rows) || rows <= 2 ? 2 : rows;
  }, [rows]);
  var mergedCols = useMemo(function () {
    return !cols || isNaN(cols) || cols <= 1 ? 1 : cols;
  }, [cols]);
  return _jsx(SkeletonItem, {
    loadingPlaceholder: _jsx("div", {
      className: classNames("".concat(prefixCls, "-skeleton-table"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-skeleton-table-small"), size === 'small'), "".concat(prefixCls, "-skeleton-table-large"), size === 'large'), styles, className),
      style: style,
      children: Array.from({
        length: mergedRows
      }).map(function (_, rowIndex) {
        return _jsxs("div", {
          className: "".concat(prefixCls, "-skeleton-table-row"),
          children: [checkable && _jsx("div", {
            className: "".concat(prefixCls, "-skeleton-table-checkbox"),
            children: _jsx(InternalSkeletonIcon, _objectSpread(_objectSpread({}, restProps), {}, {
              size: size
            }))
          }), Array.from({
            length: mergedCols
          }).map(function (_, colIndex) {
            return _jsx("div", {
              className: "".concat(prefixCls, "-skeleton-table-cell"),
              children: _jsx(InternalSkeletonBar, _objectSpread(_objectSpread({}, restProps), {}, {
                size: size
              }))
            }, colIndex);
          })]
        }, rowIndex);
      })
    }),
    block: true
  });
};
export default SkeletonTable;