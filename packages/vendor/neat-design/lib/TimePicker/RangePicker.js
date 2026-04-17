"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ClockOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ClockOutlined"));
var _ahooks = require("ahooks");
var _react = require("react");
var _useConfig2 = _interopRequireDefault(require("../ConfigProvider/useConfig"));
var _useConvertSize = require("../hooks/useConvertSize");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _rangePicker = _interopRequireDefault(require("./style/rangePicker"));
var _rangePopup = _interopRequireDefault(require("./style/rangePopup"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "classNames", "suffixIcon", "size", "changeOnScroll", "use12Hours"];
/**
 * @file RangePicker.tsx
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
  var _useRangePickerStyle = (0, _rangePicker.default)(),
    rangePickerStyle = _useRangePickerStyle.styles,
    prefixCls = _useRangePickerStyle.prefixCls;
  var _useRangePopupStyle = (0, _rangePopup.default)(),
    rangePopupStyles = _useRangePopupStyle.styles;
  var _useConfig = (0, _useConfig2.default)(),
    componentSize = _useConfig.componentSize;

  /**
   * Proxy `value` props.
   */
  var _useControllableValue = (0, _ahooks.useControllableValue)(restProps),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 2),
    value = _useControllableValue2[0],
    setValue = _useControllableValue2[1];

  /**
   * Proxy `open` props.
   */
  var _useControllableValue3 = (0, _ahooks.useControllableValue)(restProps, {
      defaultValue: false,
      defaultValuePropName: '',
      valuePropName: 'open',
      trigger: 'onOpenChange'
    }),
    _useControllableValue4 = _slicedToArray(_useControllableValue3, 2),
    open = _useControllableValue4[0],
    setOpen = _useControllableValue4[1];

  /**
   * Merge props `size`.
   */
  var mergedSize = (0, _useConvertSize.useConvertSizeMediumAsMiddle)(size || componentSize);

  /**
   * The render for the picker in the popup.
   */
  var pickerRender = (0, _react.useCallback)(function (panel, props) {
    var _panel$props;
    return /*#__PURE__*/(0, _react.cloneElement)((panel === null || panel === void 0 || (_panel$props = panel.props) === null || _panel$props === void 0 || (_panel$props = _panel$props.children) === null || _panel$props === void 0 ? void 0 : _panel$props[0]) || null, _objectSpread(_objectSpread({}, props), {}, {
      onHover: undefined
    }));
  }, []);

  /**
   * The render for the footer in the popup.
   */
  var footerRender = (0, _react.useCallback)(function (panel, props) {
    var _panel$props2;
    var el = (panel === null || panel === void 0 || (_panel$props2 = panel.props) === null || _panel$props2 === void 0 || (_panel$props2 = _panel$props2.children) === null || _panel$props2 === void 0 ? void 0 : _panel$props2[1]) || null;
    if ((0, _isEmpty.default)(props)) {
      return el;
    }
    return /*#__PURE__*/(0, _react.cloneElement)(el, _objectSpread({}, props));
  }, []);

  /**
   * The render for the start time panel in the popup.
   */
  var startPanelRender = (0, _react.useCallback)(function (panel) {
    return /*#__PURE__*/(0, _react.cloneElement)(panel || null, {}, (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [pickerRender(panel, {
        value: value === null || value === void 0 ? void 0 : value[0],
        onPickerValueChange: function onPickerValueChange(v) {
          return setValue([v, value === null || value === void 0 ? void 0 : value[1]]);
        }
      }), footerRender(panel)]
    }));
  }, [footerRender, pickerRender, setValue, value]);

  /**
   * The render for the end time panel in the popup.
   */
  var endPanelRender = (0, _react.useCallback)(function (panel) {
    return /*#__PURE__*/(0, _react.cloneElement)(panel || null, {}, (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [pickerRender(panel, {
        value: value === null || value === void 0 ? void 0 : value[1],
        onPickerValueChange: function onPickerValueChange(v) {
          return setValue([value === null || value === void 0 ? void 0 : value[0], v]);
        }
      }), footerRender(panel, {
        onSubmit: function onSubmit() {
          setOpen(false);
        }
      })]
    }));
  }, [footerRender, pickerRender, setOpen, setValue, value]);
  return (0, _jsxRuntime.jsx)(_antd.TimePicker.RangePicker, _objectSpread(_objectSpread({}, restProps), {}, {
    className: (0, _classnames.default)("".concat(prefixCls, "-time-range-picker"), rangePickerStyle, className),
    classNames: {
      popup: {
        root: (0, _classnames.default)("".concat(prefixCls, "-time-range-picker-dropdown"), rangePopupStyles, classNames === null || classNames === void 0 || (_classNames$popup = classNames.popup) === null || _classNames$popup === void 0 ? void 0 : _classNames$popup.root)
      }
    },
    suffixIcon: suffixIcon,
    size: mergedSize,
    changeOnScroll: changeOnScroll,
    use12Hours: use12Hours,
    value: value,
    onChange: setValue,
    open: open,
    onOpenChange: setOpen,
    separator: "~",
    panelRender: function panelRender(originPanel) {
      var _panel$props$children, _panel$props$children2, _panel$props$children3;
      var panel = originPanel;
      return /*#__PURE__*/(0, _react.cloneElement)(panel, {}, (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [((_panel$props$children = panel.props.children) === null || _panel$props$children === void 0 ? void 0 : _panel$props$children[0]) || null, startPanelRender((_panel$props$children2 = panel.props.children) === null || _panel$props$children2 === void 0 ? void 0 : _panel$props$children2[1]), endPanelRender((_panel$props$children3 = panel.props.children) === null || _panel$props$children3 === void 0 ? void 0 : _panel$props$children3[1])]
      }));
    }
  }));
};
var _default = exports.default = TimePicker;