function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _ClockOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ClockOutlined";
var _excluded = ["className", "classNames", "suffixIcon", "size", "changeOnScroll", "use12Hours"];
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
/**
 * @file RangePicker.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useControllableValue } from 'ahooks';
import { useCallback } from 'react';
import useConfig from "../ConfigProvider/useConfig";
import { useConvertSizeMediumAsMiddle } from "../hooks/useConvertSize";

// Components
import { TimePicker as AntTimePicker } from 'antd';

// Icons

// Vendors
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { cloneElement } from 'react';

// Styles
import useRangePickerStyle from "./style/rangePicker";
import useRangePopupStyle from "./style/rangePopup";

// Types
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var TimePicker = function TimePicker(_ref) {
  var _classNames$popup;
  var className = _ref.className,
    classNames = _ref.classNames,
    _ref$suffixIcon = _ref.suffixIcon,
    suffixIcon = _ref$suffixIcon === void 0 ? _jsx(_ClockOutlined, {}) : _ref$suffixIcon,
    size = _ref.size,
    _ref$changeOnScroll = _ref.changeOnScroll,
    changeOnScroll = _ref$changeOnScroll === void 0 ? true : _ref$changeOnScroll,
    _ref$use12Hours = _ref.use12Hours,
    use12Hours = _ref$use12Hours === void 0 ? true : _ref$use12Hours,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useRangePickerStyle = useRangePickerStyle(),
    rangePickerStyle = _useRangePickerStyle.styles,
    prefixCls = _useRangePickerStyle.prefixCls;
  var _useRangePopupStyle = useRangePopupStyle(),
    rangePopupStyles = _useRangePopupStyle.styles;
  var _useConfig = useConfig(),
    componentSize = _useConfig.componentSize;

  /**
   * Proxy `value` props.
   */
  var _useControllableValue = useControllableValue(restProps),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 2),
    value = _useControllableValue2[0],
    setValue = _useControllableValue2[1];

  /**
   * Proxy `open` props.
   */
  var _useControllableValue3 = useControllableValue(restProps, {
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
  var mergedSize = useConvertSizeMediumAsMiddle(size || componentSize);

  /**
   * The render for the picker in the popup.
   */
  var pickerRender = useCallback(function (panel, props) {
    var _panel$props;
    return /*#__PURE__*/cloneElement((panel === null || panel === void 0 || (_panel$props = panel.props) === null || _panel$props === void 0 || (_panel$props = _panel$props.children) === null || _panel$props === void 0 ? void 0 : _panel$props[0]) || null, _objectSpread(_objectSpread({}, props), {}, {
      onHover: undefined
    }));
  }, []);

  /**
   * The render for the footer in the popup.
   */
  var footerRender = useCallback(function (panel, props) {
    var _panel$props2;
    var el = (panel === null || panel === void 0 || (_panel$props2 = panel.props) === null || _panel$props2 === void 0 || (_panel$props2 = _panel$props2.children) === null || _panel$props2 === void 0 ? void 0 : _panel$props2[1]) || null;
    if (isEmpty(props)) {
      return el;
    }
    return /*#__PURE__*/cloneElement(el, _objectSpread({}, props));
  }, []);

  /**
   * The render for the start time panel in the popup.
   */
  var startPanelRender = useCallback(function (panel) {
    return /*#__PURE__*/cloneElement(panel || null, {}, _jsxs(_Fragment, {
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
  var endPanelRender = useCallback(function (panel) {
    return /*#__PURE__*/cloneElement(panel || null, {}, _jsxs(_Fragment, {
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
  return _jsx(AntTimePicker.RangePicker, _objectSpread(_objectSpread({}, restProps), {}, {
    className: classnames("".concat(prefixCls, "-time-range-picker"), rangePickerStyle, className),
    classNames: {
      popup: {
        root: classnames("".concat(prefixCls, "-time-range-picker-dropdown"), rangePopupStyles, classNames === null || classNames === void 0 || (_classNames$popup = classNames.popup) === null || _classNames$popup === void 0 ? void 0 : _classNames$popup.root)
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
      return /*#__PURE__*/cloneElement(panel, {}, _jsxs(_Fragment, {
        children: [((_panel$props$children = panel.props.children) === null || _panel$props$children === void 0 ? void 0 : _panel$props$children[0]) || null, startPanelRender((_panel$props$children2 = panel.props.children) === null || _panel$props$children2 === void 0 ? void 0 : _panel$props$children2[1]), endPanelRender((_panel$props$children3 = panel.props.children) === null || _panel$props$children3 === void 0 ? void 0 : _panel$props$children3[1])]
      }));
    }
  }));
};
export default TimePicker;