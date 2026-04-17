function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "style", "rows"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file SkeletonMenu.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';

// Components
import SkeletonItem from "./SkeletonItem";
import { InternalSkeletonTitleBox } from "./SkeletonTitleBox";

// Vendors
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';

// Styles
import useStyle from "./style/menu";

// Types
import { createElement as _createElement } from "@emotion/react";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var SkeletonMenu = function SkeletonMenu(props) {
  var className = props.className,
    style = props.style,
    _props$rows = props.rows,
    rows = _props$rows === void 0 ? 5 : _props$rows,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useStyle = useStyle(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;
  var mergedRows = useMemo(function () {
    return !rows || isNaN(rows) || rows < 2 ? 2 : rows;
  }, [rows]);
  return _jsx(SkeletonItem, _objectSpread(_objectSpread({}, omit(props, ['className'])), {}, {
    loadingPlaceholder: _jsx("div", {
      className: classNames("".concat(prefixCls, "-skeleton-menu"), styles, className),
      style: style,
      children: Array.from({
        length: mergedRows
      }).map(function (_, index) {
        return _createElement(InternalSkeletonTitleBox, _objectSpread(_objectSpread({}, restProps), {}, {
          key: index
        }));
      })
    }),
    block: true
  }));
};
export default SkeletonMenu;