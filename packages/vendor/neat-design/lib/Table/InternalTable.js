"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _react = require("react");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @file InternalTable.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */ // Components
// Vendors
// Types
/**
 * When AntTable is used as a direct child component of a popup,
 * selecting or deselecting rows in the AntTable triggers multiple re-renders.
 * This behavior may be caused by the popup modifying properties of its child component, leading to re-renders of AntTable (needs verification).
 * Wrapping AntTable in a container component prevents the popup from directly accessing AntTable.
 * This likely optimizes performance because during diffing, the child component is considered unmodified.
 * Adding or removing memoization for AntTable here does not alter the behavior.
 *
 * 当 AntTable 直接作为 popup 的子组件时
 * AntTable 在勾选与取消勾选时会发生多次重绘
 * 看起来可能是 popup 修改 child 的属性导致子组件 AntTable的重绘（存疑）
 * 把 AntTable 拿出来 包一层，popup 将无法直接访问到 AntTable
 * 猜测是 diff 时判断子组件是未修改的，所以优化了
 * 此处给 AntTable 加/不加 memo，表现一致。
 */
var InternalTable = function InternalTable(props, ref) {
  return (0, _jsxRuntime.jsx)(_antd.Table, _objectSpread(_objectSpread({}, props), {}, {
    ref: ref
  }));
};
var _default = exports.default = /*#__PURE__*/(0, _react.forwardRef)(InternalTable);