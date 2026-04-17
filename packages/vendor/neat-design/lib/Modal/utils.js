"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatModalConfigForUpdate = exports.formatModalConfigForCreate = void 0;
var _antd = require("antd");
var _static = require("./static");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = require("react");
var _Button = require("../Button");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "size", "centered", "type", "width", "icon", "loading", "content", "footer", "okType", "okButtonProps", "cancelButtonProps"],
  _excluded2 = ["className", "size", "centered", "type", "width", "icon", "loading", "content", "footer", "okType", "okButtonProps", "cancelButtonProps"];
/**
 * @file utils.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Components
// Statics
// Vendors
// Types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Format Modal func props
 * @param style
 * @param buttonStyle
 * @param overridedType
 */
var formatModalConfigForCreate = exports.formatModalConfigForCreate = function formatModalConfigForCreate(style, buttonStyle, overridedType) {
  return function (_ref) {
    var className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$centered = _ref.centered,
      centered = _ref$centered === void 0 ? true : _ref$centered,
      type = _ref.type,
      width = _ref.width,
      icon = _ref.icon,
      loading = _ref.loading,
      content = _ref.content,
      footer = _ref.footer,
      _ref$okType = _ref.okType,
      okType = _ref$okType === void 0 ? 'primary' : _ref$okType,
      okButtonProps = _ref.okButtonProps,
      cancelButtonProps = _ref.cancelButtonProps,
      restProps = _objectWithoutProperties(_ref, _excluded);
    var prefixCls = style.prefixCls,
      styles = style.styles;
    var buttonStyles = buttonStyle.styles;
    var isConfirm = !overridedType;
    var mergedType = overridedType !== null && overridedType !== void 0 ? overridedType : type;
    return _objectSpread(_objectSpread({}, restProps), {}, {
      className: (0, _classnames.default)(_defineProperty({}, "".concat(prefixCls, "-modal-confirm-").concat(type), isConfirm), styles, className),
      // Set width according to size.
      width: width !== null && width !== void 0 ? width : _static.ModalSizeEnum[size],
      centered: centered,
      type: type,
      // Set Icon
      icon: icon !== null && icon !== void 0 ? icon : _static.IconMap[mergedType] ? /*#__PURE__*/(0, _react.cloneElement)(_static.IconMap[mergedType], {
        className: "".concat(prefixCls, "-modal-confirm-icon")
      }) : null,
      // Show Skeleton in loading state.
      content: loading ? (0, _jsxRuntime.jsx)(_antd.Skeleton, {
        className: "".concat(prefixCls, "-modal-confirm-skeleton"),
        title: false,
        paragraph: {
          rows: 3
        }
      }) : content,
      // Hide footer buttons in loading state.
      footer: loading ? null : footer,
      okType: (0, _Button.neatButtonType2AntButtonType)(okType),
      okButtonProps: (0, _Button.neatButtonProps2AntButtonProps)(_objectSpread(_objectSpread({
        // Only `modal.confirm` with error type show danger ok button.
        danger: isConfirm && type === 'error'
      }, okButtonProps), {}, {
        className: (0, _classnames.default)(buttonStyles, okButtonProps === null || okButtonProps === void 0 ? void 0 : okButtonProps.className),
        type: okType
      })),
      cancelButtonProps: (0, _Button.neatButtonProps2AntButtonProps)(_objectSpread(_objectSpread({
        // Override cancel button default type for `modal.confirm`.
        type: 'tertiary'
      }, cancelButtonProps), {}, {
        className: (0, _classnames.default)(buttonStyles, cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.className)
      }))
    });
  };
};

/**
 * Format Modal func props
 * @param style
 * @param buttonStyle
 * @param overridedType
 */
var formatModalConfigForUpdate = exports.formatModalConfigForUpdate = function formatModalConfigForUpdate(style, buttonStyle, overridedType) {
  return function (_ref2) {
    var className = _ref2.className,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'medium' : _ref2$size,
      _ref2$centered = _ref2.centered,
      centered = _ref2$centered === void 0 ? true : _ref2$centered,
      type = _ref2.type,
      width = _ref2.width,
      icon = _ref2.icon,
      loading = _ref2.loading,
      content = _ref2.content,
      footer = _ref2.footer,
      _ref2$okType = _ref2.okType,
      okType = _ref2$okType === void 0 ? 'primary' : _ref2$okType,
      okButtonProps = _ref2.okButtonProps,
      cancelButtonProps = _ref2.cancelButtonProps,
      restProps = _objectWithoutProperties(_ref2, _excluded2);
    var prefixCls = style.prefixCls,
      styles = style.styles;
    var buttonStyles = buttonStyle.styles;
    var isConfirm = !overridedType;
    var mergedType = overridedType !== null && overridedType !== void 0 ? overridedType : type;
    var result = _objectSpread({}, restProps);
    if (className) {
      result.className = (0, _classnames.default)(_defineProperty({}, "".concat(prefixCls, "-modal-confirm-").concat(type), isConfirm), styles, className);
    }
    if (width) {
      result.width = width !== null && width !== void 0 ? width : _static.ModalSizeEnum[size];
    }
    if (centered) {
      result.centered = centered;
    }
    if (type) {
      result.type = type;
    }
    if (loading) {
      result.content = (0, _jsxRuntime.jsx)(_antd.Skeleton, {
        className: "".concat(prefixCls, "-modal-confirm-skeleton"),
        title: false,
        paragraph: {
          rows: 3
        }
      });
    } else {
      if (content) {
        result.content = content;
      }
      if (footer) {
        result.footer = footer;
      }
    }
    if (icon) {
      result.icon = icon;
    } else if (_static.IconMap[mergedType]) {
      result.icon = /*#__PURE__*/(0, _react.cloneElement)(_static.IconMap[mergedType], {
        className: "".concat(prefixCls, "-modal-confirm-icon")
      });
    }
    if (okType) {
      result.okType = (0, _Button.neatButtonType2AntButtonType)(okType);
    }
    if (okButtonProps) {
      var props = _objectSpread({
        danger: isConfirm && type === 'error'
      }, okButtonProps);
      if (okButtonProps.className) {
        props.className = (0, _classnames.default)(buttonStyles, okButtonProps.className);
      }
      if (okType) {
        props.type = okType;
      }
      result.okButtonProps = (0, _Button.neatButtonProps2AntButtonProps)(props, {
        withoutDefault: true
      });
    }
    if (cancelButtonProps) {
      var _props = _objectSpread({}, cancelButtonProps);
      if (cancelButtonProps.className) {
        _props.className = (0, _classnames.default)(buttonStyles, cancelButtonProps.className);
      }
      result.cancelButtonProps = (0, _Button.neatButtonProps2AntButtonProps)(_props, {
        withoutDefault: true
      });
    }
    return result;
  };
};