function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file useYearPickerCellRender.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { usePrefixCls } from "../../hooks";

// Vendors
import classNames from 'classnames';
import dayjs from 'dayjs';
import { cloneElement } from 'react';

// Types

var useYearPickerCellRender = function useYearPickerCellRender(cellRender) {
  var prefixCls = usePrefixCls();
  return function (current, info) {
    var _info$originNode;
    // Add "current-year" className to result node if it's current year
    var node = info.today.year() === dayjs(current).year() ? /*#__PURE__*/cloneElement(info.originNode, {
      className: classNames((_info$originNode = info.originNode) === null || _info$originNode === void 0 || (_info$originNode = _info$originNode.props) === null || _info$originNode === void 0 ? void 0 : _info$originNode.className, "".concat(prefixCls, "-picker-cell-inner-current-year"))
    }) : info.originNode;
    return cellRender ? cellRender(current, _objectSpread(_objectSpread({}, info), {}, {
      originNode: node
    })) : node;
  };
};
export default useYearPickerCellRender;