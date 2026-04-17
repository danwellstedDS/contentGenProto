function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _SuccessOutlined from "@derbysoft/neat-design-icons/lib/icons-react/SuccessOutlined";
var _excluded = ["menu", "disabled", "overlayClassName"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Dropdown.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCallback, useMemo } from 'react';
import usePrefixCls from "../hooks/usePrefixCls";
import useComponentControlled from "../hooks/useSelectedControlled";
import useOverlayStyle from "./style/overlay";

// Components
import { Dropdown as AntDropdown, Space } from 'antd';
import Checkbox from "../Checkbox";

// Icons

// Vendors
import classNames from 'classnames';

// Types

// Export props types
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var Dropdown = function Dropdown(_ref) {
  var propsMenu = _ref.menu,
    disabled = _ref.disabled,
    overlayClassName = _ref.overlayClassName,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var prefixCls = usePrefixCls();
  var overlayStyles = useOverlayStyle();
  var menu = propsMenu !== null && propsMenu !== void 0 && propsMenu.items ? propsMenu : _objectSpread(_objectSpread({}, propsMenu), {}, {
    items: []
  });
  var _useComponentControll = useComponentControlled(menu),
    selectedKeys = _useComponentControll.selectedKeys,
    onSelect = _useComponentControll.onSelect,
    onDeselect = _useComponentControll.onDeselect;

  /**
   * Format items to add icon wrapper
   */
  var formatItems = useCallback(function (items) {
    return items === null || items === void 0 ? void 0 : items.map(function (item) {
      var checked = selectedKeys === null || selectedKeys === void 0 ? void 0 : selectedKeys.includes(item.key);
      var newItem = _objectSpread(_objectSpread({}, item), {}, {
        icon: (item === null || item === void 0 ? void 0 : item.icon) && _jsx("span", {
          className: "".concat(prefixCls, "-dropdown-menu-item-icon"),
          children: item === null || item === void 0 ? void 0 : item.icon
        }),
        label: menu !== null && menu !== void 0 && menu.selectable && menu !== null && menu !== void 0 && menu.multiple ? _jsx(Checkbox, {
          className: "".concat(prefixCls, "-dropdown-menu-title-content-checkbox"),
          value: item.key,
          style: {
            fontWeight: 400
          },
          checked: checked,
          disabled: disabled || (menu === null || menu === void 0 ? void 0 : menu.disabled) || (item === null || item === void 0 ? void 0 : item.disabled),
          children: item.label
        }) : checked ? _jsxs(Space, {
          style: {
            width: '100%',
            justifyContent: 'space-between'
          },
          children: [item.label, _jsx(_SuccessOutlined, {})]
        }) : item.label,
        children: formatItems(item === null || item === void 0 ? void 0 : item.children)
      });

      /** Add extra styles to submenu only */
      if (item !== null && item !== void 0 && item.children && !item.type) {
        var _item$popupClassName;
        newItem = Object.assign(newItem, {
          popupClassName: classNames((_item$popupClassName = item.popupClassName) !== null && _item$popupClassName !== void 0 ? _item$popupClassName : '', overlayStyles)
        });
      }
      return newItem;
    });
  }, [prefixCls, menu === null || menu === void 0 ? void 0 : menu.selectable, menu === null || menu === void 0 ? void 0 : menu.multiple, menu === null || menu === void 0 ? void 0 : menu.disabled, selectedKeys, disabled, overlayStyles]);

  /**
   * Format menu items
   */
  var computedMenuItems = useMemo(function () {
    return formatItems(menu === null || menu === void 0 ? void 0 : menu.items);
  }, [menu === null || menu === void 0 ? void 0 : menu.items, formatItems]);
  return _jsx(AntDropdown, _objectSpread(_objectSpread({}, restProps), {}, {
    menu: _objectSpread(_objectSpread({}, menu), {}, {
      items: computedMenuItems,
      selectedKeys: selectedKeys,
      onSelect: onSelect,
      onDeselect: onDeselect
    }),
    overlayClassName: classNames(overlayClassName, overlayStyles),
    disabled: disabled
  }));
};
export default Dropdown;