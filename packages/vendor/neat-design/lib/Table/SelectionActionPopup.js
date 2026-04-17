"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));
var _Popover = _interopRequireDefault(require("../Popover"));
var _SnackBar = _interopRequireDefault(require("../SnackBar"));
var _classnames = _interopRequireDefault(require("classnames"));
var _SelectionAction = _interopRequireDefault(require("./style/SelectionAction"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["children", "className", "classNames", "styles", "placement", "arrow", "autoAdjustOverflow", "align", "onOpenChange"];
/**
 * @file SelectionActionPopup.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Components
// Vendors
// Styles
// Types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SelectionActionPopover = function SelectionActionPopover(_ref) {
  var children = _ref.children,
    className = _ref.className,
    classNames = _ref.classNames,
    styles = _ref.styles,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'topLeft' : _ref$placement,
    _ref$arrow = _ref.arrow,
    arrow = _ref$arrow === void 0 ? true : _ref$arrow,
    _ref$autoAdjustOverfl = _ref.autoAdjustOverflow,
    autoAdjustOverflow = _ref$autoAdjustOverfl === void 0 ? false : _ref$autoAdjustOverfl,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? {
      offset: [0, 0]
    } : _ref$align,
    onOpenChange = _ref.onOpenChange,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyle = (0, _SelectionAction.default)(),
    prefixCls = _useStyle.prefixCls,
    style = _useStyle.styles;

  /**
   * Table child node width
   */
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];

  /**
   * Do measure and update the width
   */
  var handleMeasure = (0, _react.useCallback)(function (size) {
    setWidth(size.offsetWidth);
  }, []);
  return (0, _jsxRuntime.jsx)(_Popover.default, _objectSpread(_objectSpread({}, restProps), {}, {
    // Because don't need to use onOpenChange of popover to change open
    onOpenChange: undefined,
    className: "".concat(prefixCls, "-table-selection-action ").concat(className),
    classNames: _objectSpread(_objectSpread({}, classNames), {}, {
      root: (0, _classnames.default)("".concat(prefixCls, "-table-selection-action-pop"), style, classNames === null || classNames === void 0 ? void 0 : classNames.root)
    }),
    styles: _objectSpread(_objectSpread({}, styles), {}, {
      root: _objectSpread({
        width: width
      }, styles === null || styles === void 0 ? void 0 : styles.root)
    }),
    placement: placement,
    arrow: arrow,
    autoAdjustOverflow: autoAdjustOverflow,
    align: align,
    closable: false,
    children: (0, _jsxRuntime.jsx)(_rcResizeObserver.default, {
      onResize: handleMeasure,
      children: children
    })
  }));
};
var defaultSnackBarProps = {
  width: 600,
  boundsGap: [8, 8, 16, 8]
};
var SelectionActionPopup = function SelectionActionPopup(_ref2) {
  var children = _ref2.children,
    content = _ref2.content,
    tableSelectionPopType = _ref2.tableSelectionPopType,
    tableSelectionPopProps = _ref2.tableSelectionPopProps;
  if (tableSelectionPopType === 'snackBar') {
    return (0, _jsxRuntime.jsx)(_SnackBar.default, _objectSpread(_objectSpread(_objectSpread({}, defaultSnackBarProps), tableSelectionPopProps), {}, {
      content: content,
      children: children
    }));
  }
  return (0, _jsxRuntime.jsx)(SelectionActionPopover, _objectSpread(_objectSpread({}, tableSelectionPopProps), {}, {
    content: content,
    children: children
  }));
};
var _default = exports.default = SelectionActionPopup;