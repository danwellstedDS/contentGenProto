"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ArrowDownFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowDownFilled"));
var _react = require("react");
var _useSelectedControlled = _interopRequireDefault(require("../hooks/useSelectedControlled"));
var _antd = require("antd");
var _Checkbox = _interopRequireDefault(require("../Checkbox"));
var _DetectableOverflow = _interopRequireDefault(require("../DetectableOverflow"));
var _Tooltip = _interopRequireDefault(require("../Tooltip"));
var _classnames = _interopRequireDefault(require("classnames"));
var _isNil = _interopRequireDefault(require("lodash/isNil"));
var _style = _interopRequireDefault(require("./style"));
var _popup = _interopRequireDefault(require("./style/popup"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "mode", "inlineCollapsed", "items", "selectable", "multiple", "disabled", "inlineIndent", "expandIcon"];
/**
 * @file Menu.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Components
// Icons
// Vendors
// Styles
// Types
// Export props types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Menu = function Menu(_ref) {
  var className = _ref.className,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'horizontal' : _ref$mode,
    inlineCollapsed = _ref.inlineCollapsed,
    items = _ref.items,
    selectable = _ref.selectable,
    multiple = _ref.multiple,
    disabled = _ref.disabled,
    _ref$inlineIndent = _ref.inlineIndent,
    inlineIndent = _ref$inlineIndent === void 0 ? 12 : _ref$inlineIndent,
    _ref$expandIcon = _ref.expandIcon,
    expandIcon = _ref$expandIcon === void 0 ? (0, _jsxRuntime.jsx)(_ArrowDownFilled2.default, {}) : _ref$expandIcon,
    restProps = _objectWithoutProperties(_ref, _excluded);
  /**
   * Get style
   */
  var _useStyle = (0, _style.default)(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;
  var _usePopupStyle = (0, _popup.default)(),
    popupStyles = _usePopupStyle.styles;

  /**
   * Handle selectedKeys state
   */
  var _useComponentControll = (0, _useSelectedControlled.default)(restProps),
    selectedKeys = _useComponentControll.selectedKeys,
    onSelect = _useComponentControll.onSelect,
    onDeselect = _useComponentControll.onDeselect;
  var computedMode = (0, _react.useMemo)(function () {
    switch (mode) {
      case 'inline':
        return 'inline';
      default:
        return 'vertical';
    }
  }, [mode]);

  /**
   * Format items to add icon wrapper
   */
  var formatItems = (0, _react.useCallback)(function (items) {
    return items === null || items === void 0 ? void 0 : items.map(function (item) {
      var _item$popupOffset;
      var labelEl = (0, _jsxRuntime.jsx)(_DetectableOverflow.default, {
        children: function children(isTextOverflow) {
          return isTextOverflow ? (0, _jsxRuntime.jsx)(_Tooltip.default, {
            title: item.label,
            placement: "bottomLeft",
            children: (0, _jsxRuntime.jsx)("span", {
              className: "".concat(prefixCls, "-menu-item-label"),
              children: item.label
            })
          }) : (0, _jsxRuntime.jsx)("span", {
            className: "".concat(prefixCls, "-menu-item-label"),
            children: item.label
          });
        }
      });
      return _objectSpread(_objectSpread({}, item), {}, {
        popupClassName: (0, _classnames.default)(popupStyles, item === null || item === void 0 ? void 0 : item.popupClassName),
        icon: mode === 'inline' ? (0, _jsxRuntime.jsx)("span", {
          className: "".concat(prefixCls, "-menu-item-icon"),
          children: item.icon
        }) : item === null || item === void 0 ? void 0 : item.icon,
        label: selectable && multiple ? (0, _jsxRuntime.jsx)(_Checkbox.default, {
          className: "".concat(prefixCls, "-dropdown-menu-title-content-checkbox"),
          value: item.key,
          checked: selectedKeys === null || selectedKeys === void 0 ? void 0 : selectedKeys.includes(item.key),
          disabled: disabled || (item === null || item === void 0 ? void 0 : item.disabled),
          children: labelEl
        }) : labelEl,
        popupOffset: (_item$popupOffset = item.popupOffset) !== null && _item$popupOffset !== void 0 ? _item$popupOffset : [24, 0],
        children: formatItems(item === null || item === void 0 ? void 0 : item.children)
      });
    });
  }, [popupStyles, mode, prefixCls, selectable, multiple, selectedKeys, disabled]);

  /**
   * Memo computed items
   */
  var computedItems = (0, _react.useMemo)(function () {
    return formatItems(items);
  }, [items, formatItems]);

  /**
   * Set the inlineCollapsed field only if mode === 'inline'
   * (otherwise antd will show a warning)
   */
  var inlineCollapsedProp = (0, _react.useMemo)(function () {
    return computedMode === 'inline' && !(0, _isNil.default)(inlineCollapsed) && {
      inlineCollapsed: inlineCollapsed
    };
  }, [computedMode, inlineCollapsed]);
  return (0, _jsxRuntime.jsx)(_antd.Menu, _objectSpread(_objectSpread(_objectSpread({}, restProps), inlineCollapsedProp), {}, {
    className: (0, _classnames.default)(styles, "".concat(prefixCls, "-menu-mode-").concat(mode), className),
    mode: computedMode,
    items: computedItems,
    selectedKeys: selectedKeys,
    selectable: selectable,
    multiple: multiple,
    disabled: disabled,
    inlineIndent: inlineIndent,
    expandIcon: expandIcon,
    onSelect: onSelect,
    onDeselect: onDeselect
  }));
};
var _default = exports.default = Menu;