"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _WarningCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/WarningCircleFilled"));
var _SuccessOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/SuccessOutlined"));
var _WarningOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/WarningOutlined"));
var _SuccessCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/SuccessCircleFilled"));
var _react = require("react");
var _antd = require("antd");
var _Tooltip = _interopRequireDefault(require("../Tooltip"));
var _classnames = _interopRequireDefault(require("classnames"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "type", "size", "status", "percentPosition", "format", "strokeColor", "strokeWidth", "percent", "showInfo"];
/**
 * @file Progress.tsx
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Progress = function Progress(_ref) {
  var className = _ref.className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'bar' : _ref$type,
    size = _ref.size,
    status = _ref.status,
    percentPosition = _ref.percentPosition,
    format = _ref.format,
    strokeColor = _ref.strokeColor,
    strokeWidth = _ref.strokeWidth,
    _ref$percent = _ref.percent,
    percent = _ref$percent === void 0 ? 0 : _ref$percent,
    _ref$showInfo = _ref.showInfo,
    showInfo = _ref$showInfo === void 0 ? true : _ref$showInfo,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyle = (0, _style.default)(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles,
    componentsToken = _useStyle.componentsToken;
  var progressToken = componentsToken.Progress;

  /**
   * Merge the `type` prop. Convert Neat Progress type to Ant Progress type.
   */
  var mergedType = (0, _react.useMemo)(function () {
    switch (type) {
      case 'ring':
      case 'ringMini':
        return 'circle';
      default:
        // 'bar' | 'bold'
        return 'line';
    }
  }, [type]);

  /**
   * Merge the `size` prop.
   */
  var mergedSize = (0, _react.useMemo)(function () {
    switch (type) {
      case 'ringMini':
        return progressToken['progress-size-ring-mini'];
      case 'ring':
        {
          switch (size) {
            case 'small':
              return progressToken['progress-size-ring-small'];
            case 'large':
              return progressToken['progress-size-ring-large'];
            default:
              // 'medium'
              return progressToken['progress-size-ring-medium'];
          }
        }
      case 'bold':
        switch (size) {
          case 'small':
            return ['100%', progressToken['progress-size-bold-weight-small']];
          case 'large':
            return ['100%', progressToken['progress-size-bold-weight-large']];
          default:
            // 'medium'
            return ['100%', progressToken['progress-size-bold-weight-medium']];
        }
      default:
        // 'bar'
        switch (size) {
          case 'small':
            return ['100%', progressToken['progress-size-bar-item-small']];
          case 'large':
            return ['100%', progressToken['progress-size-bar-item-large']];
          default:
            // 'medium'
            return ['100%', progressToken['progress-size-bar-item-medium']];
        }
    }
  }, [progressToken, size, type]);

  /**
   * Merge the `percentPosition` prop.
   * When Progress type is "bold", set percentPosition to "inner/end".
   */
  var mergedPercentPosition = (0, _react.useMemo)(function () {
    switch (type) {
      case 'ringMini':
      case 'ring':
        return undefined;
      case 'bold':
        return percentPosition || {
          align: 'end',
          type: 'inner'
        };
      default:
        // 'bar'
        return percentPosition;
    }
  }, [percentPosition, type]);

  /**
   * Merge the `format` prop.
   * Set the label text to "100%" when the value of percent is 100.
   */
  var mergedFormat = (0, _react.useMemo)(function () {
    if (format !== undefined) {
      return format;
    }
    return function (percent) {
      switch (type) {
        case 'ringMini':
          switch (status) {
            case 'success':
              return (0, _jsxRuntime.jsx)(_SuccessCircleFilled2.default, {});
            case 'exception':
              return (0, _jsxRuntime.jsx)(_WarningOutlined2.default, {});
            default:
              // 'normal' | 'active'
              return '';
          }
        case 'ring':
          switch (status) {
            case 'success':
              return (0, _jsxRuntime.jsx)(_SuccessOutlined2.default, {});
            case 'exception':
              return (0, _jsxRuntime.jsx)(_WarningOutlined2.default, {});
            default:
              // 'normal' | 'active'
              return "".concat(percent, "%");
          }
        default:
          // 'bar' | 'bold'
          switch (status) {
            case 'success':
              return (0, _jsxRuntime.jsx)(_SuccessCircleFilled2.default, {});
            case 'exception':
              return (0, _jsxRuntime.jsx)(_WarningCircleFilled2.default, {});
            default:
              // 'normal' | 'active'
              return "".concat(percent, "%");
          }
      }
    };
  }, [format, status, type]);

  /**
   * Merge the `strokeColor` prop according to the `status`.
   */
  var mergedStrokeColor = (0, _react.useMemo)(function () {
    if (strokeColor !== undefined) {
      return strokeColor;
    }
    switch (status) {
      case 'success':
        return progressToken['progress-color-success'];
      case 'exception':
        return progressToken['progress-color-filled'];
      default:
        return progressToken['progress-color-bg-filled'];
    }
  }, [progressToken, status, strokeColor]);

  /**
   * Merge the `strokeWidth` prop. Given that the viewBox size of Antd
   * Progress's SVG is 100, an additional coefficient of
   *
   *      Ant Progress viewBox / Neat Progress size
   *
   * needs to be multiplied when setting the strokeWidth.
   */
  var mergedStrokeWidth = (0, _react.useMemo)(function () {
    if (strokeWidth === undefined && type === 'ringMini') {
      return progressToken['progress-size-ring-border-mini'] * (100 / progressToken['progress-size-ring-mini']);
    }
    if (strokeWidth === undefined && type === 'ring') {
      switch (size) {
        case 'small':
          return progressToken['progress-size-ring-border-small'] * (100 / progressToken['progress-size-ring-small']);
        case 'large':
          return progressToken['progress-size-ring-border-large'] * (100 / progressToken['progress-size-ring-large']);
        default:
          // 'medium'
          return progressToken['progress-size-ring-border-medium'] * (100 / progressToken['progress-size-ring-medium']);
      }
    }
    return strokeWidth;
  }, [progressToken, size, strokeWidth, type]);

  /**
   * Set the title of Tooltip to show the percent value when type is
   * "ringMini".
   */
  var tooltipTitle = (0, _react.useMemo)(function () {
    if (type === 'ringMini' && showInfo && status !== 'success' && status !== 'exception') {
      return "".concat(percent, "%");
    }
    return undefined;
  }, [showInfo, type, status, percent]);
  return (0, _jsxRuntime.jsx)(_Tooltip.default, _objectSpread(_objectSpread({
    placement: "top",
    autoAdjustOverflow: false
  }, type === 'ringMini' ? percentPosition : undefined), {}, {
    title: tooltipTitle,
    children: (0, _jsxRuntime.jsx)(_antd.Progress, _objectSpread(_objectSpread({}, restProps), {}, {
      className: (0, _classnames.default)(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-progress-bar"), type === 'bar'), "".concat(prefixCls, "-progress-bold"), type === 'bold'), "".concat(prefixCls, "-progress-ring"), type === 'ring'), "".concat(prefixCls, "-progress-ring-mini"), type === 'ringMini'), "".concat(prefixCls, "-progress-normal"), status !== 'active' && status !== 'success' && status !== 'exception'), "".concat(prefixCls, "-progress-active"), status === 'active'), "".concat(prefixCls, "-progress-success"), status === 'success'), "".concat(prefixCls, "-progress-fail"), status === 'exception'), "".concat(prefixCls, "-progress-").concat(size), size), styles, className),
      type: mergedType,
      size: mergedSize,
      status: status,
      percentPosition: mergedPercentPosition,
      format: mergedFormat,
      strokeColor: mergedStrokeColor,
      strokeWidth: mergedStrokeWidth,
      percent: percent,
      showInfo: showInfo
    }))
  }));
};
var _default = exports.default = Progress;