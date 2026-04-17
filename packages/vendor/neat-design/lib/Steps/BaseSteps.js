"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DefaultStepStatusIconType = void 0;
var _react = require("react");
var _antd = require("antd");
var _ErrorFilled = _interopRequireDefault(require("./icons/ErrorFilled"));
var _ErrorOutlined = _interopRequireDefault(require("./icons/ErrorOutlined"));
var _FinishFilled = _interopRequireDefault(require("./icons/FinishFilled"));
var _FinishOutlined = _interopRequireDefault(require("./icons/FinishOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _base = _interopRequireDefault(require("./style/base"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "progressDot", "items", "status", "size", "current", "iconType"];
/**
 * @file BaseSteps.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Components
// Icons
// Vendors
// Styles
// Types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DefaultStepStatusIconType = exports.DefaultStepStatusIconType = {
  wait: 'outlined',
  process: 'filled',
  finish: 'outlined',
  error: 'outlined',
  skip: 'outlined'
};
var FinishIcon = {
  filled: (0, _jsxRuntime.jsx)(_FinishFilled.default, {}),
  outlined: (0, _jsxRuntime.jsx)(_FinishOutlined.default, {})
};
var ErrorIcon = {
  filled: (0, _jsxRuntime.jsx)(_ErrorFilled.default, {}),
  outlined: (0, _jsxRuntime.jsx)(_ErrorOutlined.default, {})
};
var BaseSteps = function BaseSteps(_ref) {
  var className = _ref.className,
    progressDot = _ref.progressDot,
    items = _ref.items,
    status = _ref.status,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    current = _ref.current,
    iconType = _ref.iconType,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyle = (0, _base.default)(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;

  /**
   * Merge size for Steps.
   */
  var mergedSize = (0, _react.useMemo)(function () {
    switch (size) {
      case 'small':
        return 'small';
      default:
        return 'default';
    }
  }, [size]);

  /**
   * Merge status for Steps or step.
   */
  var mergeStatus = (0, _react.useCallback)(function (status) {
    switch (status) {
      case 'wait':
        return 'wait';
      case 'process':
        return 'process';
      case 'finish':
      case 'skip':
        return 'finish';
      case 'error':
        return 'error';
    }
  }, []);

  /**
   * Calculate the item status by current.
   */
  var getItemStatus = (0, _react.useCallback)(function (itemStatus, index) {
    if (itemStatus) {
      return itemStatus;
    }
    if (index === current) {
      return 'process';
    }
    if (index < current) {
      return 'finish';
    }
    return 'wait';
  }, [current]);
  var getItemIconType = (0, _react.useCallback)(function (itemIconType, itemStatus) {
    if (typeof itemIconType === 'string') {
      switch (itemIconType) {
        case 'filled':
          return 'filled';
        case 'outlined':
          return 'outlined';
      }
    } else if (_typeof(itemIconType) === 'object') {
      switch (itemIconType[itemStatus]) {
        case 'filled':
          return 'filled';
        case 'outlined':
          return 'outlined';
      }
    } else if (typeof iconType === 'string') {
      switch (iconType) {
        case 'filled':
          return 'filled';
        case 'outlined':
          return 'outlined';
      }
    } else if (_typeof(iconType) === 'object') {
      switch (iconType[itemStatus]) {
        case 'filled':
          return 'filled';
        case 'outlined':
          return 'outlined';
      }
    }
    return undefined;
  }, [iconType]);

  /**
   * Handle the icon render for every Steps item.
   */
  var handleItemIcon = (0, _react.useCallback)(function (itemIconType, itemStatus, index) {
    if (progressDot) {
      return (0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-steps-icon-dot")
      });
    }
    if (status && !isNaN(current) && index === current) {
      switch (status) {
        case 'finish':
        case 'skip':
          return FinishIcon[itemIconType];
        case 'error':
          return ErrorIcon[itemIconType];
      }
    }
    switch (itemStatus) {
      case 'finish':
      case 'skip':
        return FinishIcon[itemIconType];
      case 'error':
        return ErrorIcon[itemIconType];
    }
    return null;
  }, [current, prefixCls, progressDot, status]);

  /**
   * Merge Steps item.
   */
  var mergedItems = (0, _react.useMemo)(function () {
    return items.map(function (item, index) {
      var itemStatus = getItemStatus(item.status, index);
      var mergedIconType = getItemIconType(item.iconType, itemStatus) || DefaultStepStatusIconType[itemStatus];
      return _objectSpread(_objectSpread({}, item), {}, {
        className: (0, _classnames.default)(item.className, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-steps-item-skip"), item.status === 'skip'), "".concat(prefixCls, "-steps-item-icon-outlined"), mergedIconType === 'outlined')),
        status: mergeStatus(item.status),
        icon: item.icon || handleItemIcon(mergedIconType, itemStatus, index)
      });
    });
  }, [items, getItemStatus, getItemIconType, prefixCls, mergeStatus, handleItemIcon]);
  return (0, _jsxRuntime.jsx)(_antd.Steps, _objectSpread(_objectSpread({}, restProps), {}, {
    className: (0, _classnames.default)(styles, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-steps-progress-dot"), progressDot), className, className)),
    items: mergedItems,
    status: mergeStatus(status),
    current: current,
    size: mergedSize
  }));
};
var _default = exports.default = BaseSteps;