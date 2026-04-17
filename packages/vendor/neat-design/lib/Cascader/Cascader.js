"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ArrowRightOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined"));
var _ArrowDownOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowDownOutlined"));
var _react = require("react");
var _useConvertSize = require("../hooks/useConvertSize");
var _antd = require("antd");
var _CloseButton = _interopRequireDefault(require("../CloseButton"));
var _MultipleCascader = _interopRequireDefault(require("./multiple/MultipleCascader"));
var _classnames = _interopRequireDefault(require("classnames"));
var _style = _interopRequireDefault(require("./style"));
var _popup = _interopRequireDefault(require("./style/popup"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "classNames", "placeholder", "allowClear", "suffixIcon", "removeIcon", "expandIcon", "multiple", "showCheckedStrategy", "size"];
/**
 * @file Cascader.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
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
var Cascader = function Cascader(_ref) {
  var _classNames$popup;
  var className = _ref.className,
    classNames = _ref.classNames,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Please select' : _ref$placeholder,
    _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
    _ref$suffixIcon = _ref.suffixIcon,
    suffixIcon = _ref$suffixIcon === void 0 ? (0, _jsxRuntime.jsx)(_ArrowDownOutlined2.default, {}) : _ref$suffixIcon,
    removeIcon = _ref.removeIcon,
    _ref$expandIcon = _ref.expandIcon,
    expandIcon = _ref$expandIcon === void 0 ? (0, _jsxRuntime.jsx)(_ArrowRightOutlined2.default, {}) : _ref$expandIcon,
    multiple = _ref.multiple,
    _ref$showCheckedStrat = _ref.showCheckedStrategy,
    showCheckedStrategy = _ref$showCheckedStrat === void 0 ? _antd.Cascader.SHOW_PARENT : _ref$showCheckedStrat,
    size = _ref.size,
    restProps = _objectWithoutProperties(_ref, _excluded);
  /**
   * Trigger styles
   */
  var _useStyle = (0, _style.default)(),
    styles = _useStyle.styles;

  /**
   * Popup styles
   */
  var _usePopupStyle = (0, _popup.default)(),
    popupStyles = _usePopupStyle.styles;

  /**
   * Handle size
   */
  var mergedSize = (0, _useConvertSize.useConvertSizeMediumAsMiddle)(size);
  var mergedRemoveIcon = (0, _react.useMemo)(function () {
    if (removeIcon) {
      return removeIcon;
    }
    return (0, _jsxRuntime.jsx)(_CloseButton.default, {
      type: "circle",
      size: size
    });
  }, [removeIcon, size]);

  /**
   * Props for single and multiple selection Cascader
   */
  var commonProps = _objectSpread({
    className: (0, _classnames.default)(styles, className),
    classNames: _objectSpread(_objectSpread({}, classNames), {}, {
      popup: _objectSpread(_objectSpread({}, classNames === null || classNames === void 0 ? void 0 : classNames.popup), {}, {
        root: (0, _classnames.default)(popupStyles, classNames === null || classNames === void 0 || (_classNames$popup = classNames.popup) === null || _classNames$popup === void 0 ? void 0 : _classNames$popup.root)
      })
    }),
    placeholder: placeholder,
    allowClear: allowClear,
    suffixIcon: suffixIcon,
    expandIcon: expandIcon,
    showCheckedStrategy: showCheckedStrategy,
    size: mergedSize,
    removeIcon: mergedRemoveIcon
  }, restProps);

  /**
   * Multiple Selection Cascader
   */
  if (multiple) {
    var _props = _objectSpread(_objectSpread({}, commonProps), {}, {
      multiple: true
    });
    return (0, _jsxRuntime.jsx)(_MultipleCascader.default, _objectSpread({}, _props));
  }

  /**
   * Single Selection Cascader
   */
  var props = _objectSpread(_objectSpread({}, commonProps), {}, {
    multiple: false
  });
  return (0, _jsxRuntime.jsx)(_antd.Cascader, _objectSpread({}, props));
};
var _default = exports.default = Cascader;