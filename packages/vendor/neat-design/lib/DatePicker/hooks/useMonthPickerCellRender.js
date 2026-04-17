"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _classnames = _interopRequireDefault(require("classnames"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @file useMonthPickerCellRender.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */ // Hooks
// Vendors
// Types

var useMonthPickerCellRender = function useMonthPickerCellRender(cellRender) {
  var prefixCls = (0, _hooks.usePrefixCls)();
  return function (current, info) {
    var _info$originNode;
    // Add "current-month" className to result node if it's current month
    var node = info.today.year() === (0, _dayjs.default)(current).year() && info.today.month() === (0, _dayjs.default)(current).month() ? /*#__PURE__*/(0, _react.cloneElement)(info.originNode, {
      className: (0, _classnames.default)((_info$originNode = info.originNode) === null || _info$originNode === void 0 || (_info$originNode = _info$originNode.props) === null || _info$originNode === void 0 ? void 0 : _info$originNode.className, "".concat(prefixCls, "-picker-cell-inner-current-month"))
    }) : info.originNode;
    return cellRender ? cellRender(current, _objectSpread(_objectSpread({}, info), {}, {
      originNode: node
    })) : node;
  };
};
var _default = exports.default = useMonthPickerCellRender;