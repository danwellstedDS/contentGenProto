function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _ArrowDownFilled from "@derbysoft/neat-design-icons/lib/icons-react/ArrowDownFilled";
var _excluded = ["className", "mode", "inlineCollapsed", "items", "selectable", "multiple", "disabled", "inlineIndent", "expandIcon"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Menu.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCallback, useMemo } from 'react';
import useComponentControlled from "../hooks/useSelectedControlled";

// Components
import { Menu as AntMenu } from 'antd';
import Checkbox from "../Checkbox";
import DetectableOverflow from "../DetectableOverflow";
import Tooltip from "../Tooltip";

// Icons

// Vendors
import classNames from 'classnames';
import isNil from 'lodash/isNil';

// Styles
import useStyle from "./style";
import usePopupStyle from "./style/popup";

// Types

// Export props types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
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
    expandIcon = _ref$expandIcon === void 0 ? _jsx(_ArrowDownFilled, {}) : _ref$expandIcon,
    restProps = _objectWithoutProperties(_ref, _excluded);
  /**
   * Get style
   */
  var _useStyle = useStyle(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;
  var _usePopupStyle = usePopupStyle(),
    popupStyles = _usePopupStyle.styles;

  /**
   * Handle selectedKeys state
   */
  var _useComponentControll = useComponentControlled(restProps),
    selectedKeys = _useComponentControll.selectedKeys,
    onSelect = _useComponentControll.onSelect,
    onDeselect = _useComponentControll.onDeselect;
  var computedMode = useMemo(function () {
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
  var formatItems = useCallback(function (items) {
    return items === null || items === void 0 ? void 0 : items.map(function (item) {
      var _item$popupOffset;
      var labelEl = _jsx(DetectableOverflow, {
        children: function children(isTextOverflow) {
          return isTextOverflow ? _jsx(Tooltip, {
            title: item.label,
            placement: "bottomLeft",
            children: _jsx("span", {
              className: "".concat(prefixCls, "-menu-item-label"),
              children: item.label
            })
          }) : _jsx("span", {
            className: "".concat(prefixCls, "-menu-item-label"),
            children: item.label
          });
        }
      });
      return _objectSpread(_objectSpread({}, item), {}, {
        popupClassName: classNames(popupStyles, item === null || item === void 0 ? void 0 : item.popupClassName),
        icon: mode === 'inline' ? _jsx("span", {
          className: "".concat(prefixCls, "-menu-item-icon"),
          children: item.icon
        }) : item === null || item === void 0 ? void 0 : item.icon,
        label: selectable && multiple ? _jsx(Checkbox, {
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
  var computedItems = useMemo(function () {
    return formatItems(items);
  }, [items, formatItems]);

  /**
   * Set the inlineCollapsed field only if mode === 'inline'
   * (otherwise antd will show a warning)
   */
  var inlineCollapsedProp = useMemo(function () {
    return computedMode === 'inline' && !isNil(inlineCollapsed) && {
      inlineCollapsed: inlineCollapsed
    };
  }, [computedMode, inlineCollapsed]);
  return _jsx(AntMenu, _objectSpread(_objectSpread(_objectSpread({}, restProps), inlineCollapsedProp), {}, {
    className: classNames(styles, "".concat(prefixCls, "-menu-mode-").concat(mode), className),
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
export default Menu;