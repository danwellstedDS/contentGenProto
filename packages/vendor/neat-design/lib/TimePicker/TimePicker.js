"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ClockOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ClockOutlined"));
var _useConfig2 = _interopRequireDefault(require("../ConfigProvider/useConfig"));
var _useConvertSize = require("../hooks/useConvertSize");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _picker = _interopRequireDefault(require("./style/picker"));
var _popup = _interopRequireDefault(require("./style/popup"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "classNames", "suffixIcon", "size", "changeOnScroll", "use12Hours"];
/**
 * @file TimePicker.tsx
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
var TimePicker = function TimePicker(_ref) {
  var _classNames$popup;
  var className = _ref.className,
    classNames = _ref.classNames,
    _ref$suffixIcon = _ref.suffixIcon,
    suffixIcon = _ref$suffixIcon === void 0 ? (0, _jsxRuntime.jsx)(_ClockOutlined2.default, {}) : _ref$suffixIcon,
    size = _ref.size,
    _ref$changeOnScroll = _ref.changeOnScroll,
    changeOnScroll = _ref$changeOnScroll === void 0 ? true : _ref$changeOnScroll,
    _ref$use12Hours = _ref.use12Hours,
    use12Hours = _ref$use12Hours === void 0 ? true : _ref$use12Hours,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _usePickerStyle = (0, _picker.default)(),
    pickerStyles = _usePickerStyle.styles,
    prefixCls = _usePickerStyle.prefixCls;
  var _usePopupStyle = (0, _popup.default)(),
    popupStyles = _usePopupStyle.styles;
  var _useConfig = (0, _useConfig2.default)(),
    componentSize = _useConfig.componentSize;

  /**
   * Merge props `size`.
   */
  var mergedSize = (0, _useConvertSize.useConvertSizeMediumAsMiddle)(size || componentSize);
  return (0, _jsxRuntime.jsx)(_antd.TimePicker, _objectSpread(_objectSpread({}, restProps), {}, {
    className: (0, _classnames.default)("".concat(prefixCls, "-time-picker"), pickerStyles, className),
    classNames: {
      popup: {
        root: (0, _classnames.default)("".concat(prefixCls, "-time-picker-dropdown"), popupStyles, classNames === null || classNames === void 0 || (_classNames$popup = classNames.popup) === null || _classNames$popup === void 0 ? void 0 : _classNames$popup.root)
      }
    },
    suffixIcon: suffixIcon,
    size: mergedSize,
    changeOnScroll: changeOnScroll,
    use12Hours: use12Hours
  }));
};
var _default = exports.default = TimePicker;