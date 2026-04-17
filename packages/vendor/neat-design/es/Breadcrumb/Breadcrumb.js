function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _ArrowDownFilled from "@derbysoft/neat-design-icons/lib/icons-react/ArrowDownFilled";
import _ArrowRightOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined";
var _excluded = ["separator", "itemRender", "items"];
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
import React, { useCallback, useMemo, useState } from 'react';

// Hooks
import { usePrefixCls } from "../hooks";
import useStyle from "./style";

// Components
import { Breadcrumb as AntBreadcrumb, Space } from 'antd';

// Icons

// Vendors
import classNames from 'classnames';

// Types
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var Breadcrumb = function Breadcrumb(props) {
  var _props$separator = props.separator,
    separator = _props$separator === void 0 ? _jsx(_ArrowRightOutlined, {}) : _props$separator,
    customizeItemRender = props.itemRender,
    items = props.items,
    restProps = _objectWithoutProperties(props, _excluded);
  var css = useStyle();
  var prefixCls = usePrefixCls();
  var _useState = useState('741518'),
    _useState2 = _slicedToArray(_useState, 2),
    openKey = _useState2[0],
    setOpenKey = _useState2[1];
  var proxyHandleOpenChange = function proxyHandleOpenChange(key, onOpenChange) {
    return function (open, info) {
      setOpenKey(open ? key : '741518');
      onOpenChange === null || onOpenChange === void 0 || onOpenChange(open, info);
    };
  };
  var proxyItems = useMemo(function () {
    if (!(items !== null && items !== void 0 && items.length)) return items;
    var pMenu = items.map(function (item, idx) {
      var dropdownProps = item.dropdownProps,
        key = item.key;
      var openKey = key !== null && key !== void 0 ? key : idx;
      var onOpenChange = dropdownProps === null || dropdownProps === void 0 ? void 0 : dropdownProps.onOpenChange;
      var pOnOpenChange = proxyHandleOpenChange(openKey, onOpenChange);
      return _objectSpread(_objectSpread({}, item), {}, {
        dropdownProps: _objectSpread(_objectSpread({}, dropdownProps), {}, {
          key: openKey,
          onOpenChange: pOnOpenChange
        })
      });
    });
    return pMenu;
  }, [items]);
  var BreadcrumbDropdownBtn = useCallback(function (_ref) {
    var flagKey = _ref.flagKey,
      title = _ref.title;
    var isOpened = flagKey === openKey;
    return _jsxs(Space, {
      align: "center",
      className: classNames("".concat(prefixCls, "-breadcrumb-dropdown"), _defineProperty({}, "".concat(prefixCls, "-breadcrumb-dropdown-opened"), isOpened)),
      tabIndex: 0,
      children: [title, _jsx(_ArrowDownFilled, {
        className: "".concat(prefixCls, "-breadcrumb-dropdown-arrow")
      })]
    });
  }, [openKey, prefixCls]);
  var defaultItemRender = useCallback(function (route, params, routes, paths) {
    var _ref2 = route || {},
      title = _ref2.title,
      type = _ref2.type,
      cSeparator = _ref2.separator,
      menu = _ref2.menu,
      dropdownProps = _ref2.dropdownProps;
    // @ts-ignore
    var _ref3 = dropdownProps || {},
      key = _ref3.key;
    if (type === 'separator') {
      return cSeparator !== null && cSeparator !== void 0 ? cSeparator : separator;
    }
    if (menu !== null && menu !== void 0 && menu.items) {
      return _jsx(BreadcrumbDropdownBtn, {
        flagKey: key,
        title: title
      });
    }
    return _jsx(Space, {
      className: "".concat(prefixCls, "-breadcrumb-text"),
      tabIndex: 0,
      children: title
    });
  }, [prefixCls, separator, BreadcrumbDropdownBtn]);
  return _jsx(AntBreadcrumb, _objectSpread({
    css: css,
    separator: separator,
    itemRender: customizeItemRender !== null && customizeItemRender !== void 0 ? customizeItemRender : defaultItemRender,
    items: proxyItems
  }, restProps));
};
export default Breadcrumb;