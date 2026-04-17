function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _ClockOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ClockOutlined";
var _excluded = ["className", "classNames", "suffixIcon", "size", "changeOnScroll", "use12Hours"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file TimePicker.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useConfig from "../ConfigProvider/useConfig";
import { useConvertSizeMediumAsMiddle } from "../hooks/useConvertSize";

// Components
import { TimePicker as AntTimePicker } from 'antd';

// Icons

// Vendors
import classnames from 'classnames';

// Styles
import usePickerStyle from "./style/picker";
import usePopupStyle from "./style/popup";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
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
  var _usePickerStyle = usePickerStyle(),
    pickerStyles = _usePickerStyle.styles,
    prefixCls = _usePickerStyle.prefixCls;
  var _usePopupStyle = usePopupStyle(),
    popupStyles = _usePopupStyle.styles;
  var _useConfig = useConfig(),
    componentSize = _useConfig.componentSize;

  /**
   * Merge props `size`.
   */
  var mergedSize = useConvertSizeMediumAsMiddle(size || componentSize);
  return _jsx(AntTimePicker, _objectSpread(_objectSpread({}, restProps), {}, {
    className: classnames("".concat(prefixCls, "-time-picker"), pickerStyles, className),
    classNames: {
      popup: {
        root: classnames("".concat(prefixCls, "-time-picker-dropdown"), popupStyles, classNames === null || classNames === void 0 || (_classNames$popup = classNames.popup) === null || _classNames$popup === void 0 ? void 0 : _classNames$popup.root)
      }
    },
    suffixIcon: suffixIcon,
    size: mergedSize,
    changeOnScroll: changeOnScroll,
    use12Hours: use12Hours
  }));
};
export default TimePicker;