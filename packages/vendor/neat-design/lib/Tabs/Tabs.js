"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ahooks = require("ahooks");
var _react = require("react");
var _hooks = require("../hooks");
var _useConvertSize = require("../hooks/useConvertSize");
var _useTabBarExtraContent = _interopRequireDefault(require("./hook/useTabBarExtraContent"));
var _antd = require("antd");
var _ = require("../");
var _NavScrollButton = _interopRequireDefault(require("./NavScrollButton"));
var _classnames = _interopRequireDefault(require("classnames"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "size", "type", "hideAdd", "removeIcon", "tabBarExtraContent"];
/**
 * @file Tabs.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Components
// Vendors
// Styles
// Types
// Export ref type
// Export props type
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
var Tabs = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    size = _ref.size,
    type = _ref.type,
    _ref$hideAdd = _ref.hideAdd,
    hideAdd = _ref$hideAdd === void 0 ? true : _ref$hideAdd,
    removeIcon = _ref.removeIcon,
    tabBarExtraContent = _ref.tabBarExtraContent,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = (0, _style.default)(),
    prefixCls = _useStyles.prefixCls,
    styles = _useStyles.styles;

  /**
   * Create a reference for wrapper.
   */
  var tabsRef = (0, _hooks.useForwardedRef)(ref);

  /**
   * The states for the visiblity of scroll buttons.
   */
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    scrollLeftButtonVisible = _useState2[0],
    setScrollLeftButtonVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    scrollRightButtonVisible = _useState4[0],
    setScrollRightButtonVisible = _useState4[1];

  /**
   * Get the scroll element which class name is `.${prefixCls}-tabs-nav-wrap`.
   */
  var getScrollEl = (0, _react.useCallback)(function () {
    var _tabsRef$current;
    return (_tabsRef$current = tabsRef.current) === null || _tabsRef$current === void 0 ? void 0 : _tabsRef$current.querySelector(".".concat(prefixCls, "-tabs-nav-wrap"));
  }, [prefixCls, tabsRef]);

  /**
   * Observer the dom to update the `scrollLeftButtonVisible` and `scrollRightButtonVisible`.
   */
  (0, _ahooks.useMutationObserver)(function () {
    var navWrapEl = getScrollEl();
    setScrollLeftButtonVisible(navWrapEl.className.includes("".concat(prefixCls, "-tabs-nav-wrap-ping-left")));
    setScrollRightButtonVisible(navWrapEl.className.includes("".concat(prefixCls, "-tabs-nav-wrap-ping-right")));
  }, tabsRef, {
    attributes: true,
    subtree: true
  });

  /**
   * Merge props `size`.
   */
  var mergedSize = (0, _useConvertSize.useConvertSizeMediumAsMiddle)(size);

  /**
   * Merge props `type`.
   */
  var mergedType = (0, _react.useMemo)(function () {
    switch (type) {
      case 'editable-line':
        return 'editable-card';
      default:
        return type;
    }
  }, [type]);

  /**
   * Get the size of default remove icon.
   */
  var getDefaultRemoveIconSize = (0, _react.useCallback)(function () {
    switch (size) {
      case 'large':
        return 18;
      default:
        return 16;
    }
  }, [size]);

  /**
   * Merge props `removeIcon`.
   */
  var mergedRemoveIcon = (0, _react.useMemo)(function () {
    return removeIcon ? removeIcon : (0, _jsxRuntime.jsx)(_.CloseButton, {
      tagName: "span",
      type: "circle",
      size: getDefaultRemoveIconSize()
    });
  }, [getDefaultRemoveIconSize, removeIcon]);

  /**
   * The component of nav scroll left button.
   */
  var navScrollLeftButton = (0, _react.useMemo)(function () {
    return (0, _jsxRuntime.jsx)(_NavScrollButton.default, {
      scrollEl: getScrollEl(),
      direction: "left",
      hidden: !scrollLeftButtonVisible
    });
  }, [getScrollEl, scrollLeftButtonVisible]);

  /**
   * The component of nav scroll right button.
   */
  var navScrollRightButton = (0, _react.useMemo)(function () {
    return (0, _jsxRuntime.jsx)(_NavScrollButton.default, {
      scrollEl: getScrollEl(),
      direction: "right",
      hidden: !scrollRightButtonVisible
    });
  }, [getScrollEl, scrollRightButtonVisible]);

  /**
   * Merge props `tabBarExtraContent`.
   */
  var _useTabBarExtraConten = (0, _useTabBarExtraContent.default)(),
    mergeTabBarExtraContent = _useTabBarExtraConten.mergeTabBarExtraContent;
  var mergedTabBarExtraContent = mergeTabBarExtraContent(
  // Default `tabBarExtraContent` for scroll buttons.
  {
    left: navScrollLeftButton,
    right: navScrollRightButton
  },
  // The `tabBarExtraContent` from props.
  tabBarExtraContent);
  return (0, _jsxRuntime.jsx)("div", {
    ref: tabsRef,
    className: "".concat(prefixCls, "-tabs-wrapper"),
    children: (0, _jsxRuntime.jsx)(_antd.Tabs, _objectSpread(_objectSpread({}, restProps), {}, {
      className: (0, _classnames.default)(styles, _defineProperty({}, "".concat(prefixCls, "-tabs-editable-line"), type === 'editable-line'), className),
      size: mergedSize,
      type: mergedType,
      hideAdd: hideAdd,
      removeIcon: mergedRemoveIcon,
      tabBarExtraContent: mergedTabBarExtraContent
    }))
  });
});
if (process.env.NODE_ENV !== 'production') {
  Tabs.displayName = 'Tabs';
}
var _default = exports.default = Tabs;