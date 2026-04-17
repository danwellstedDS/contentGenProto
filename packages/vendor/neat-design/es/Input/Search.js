function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _CloseCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/CloseCircleFilled";
var _excluded = ["enterButton", "allowClear", "addonAfter", "loading", "size", "onSearch", "onChange", "onPressEnter"];
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
 * @file Search.tsx
 * @author rzh(peter.rao@derbysoft.net)
 */

// Hooks
import { useCallback, useMemo, useState } from 'react';
import { useConvertSizeMediumAsMiddle } from "../hooks/useConvertSize";
import usePrefixCls from "../hooks/usePrefixCls";
import useStyle from "./style";

// Components
import { Input as AntInput, Space } from 'antd';
import Button from "../Button";

// Icons

// Vendors
import classNames from 'classnames';
import isBoolean from 'lodash/isBoolean';
import isString from 'lodash/isString';
import { cloneElement, forwardRef } from 'react';

// Types
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var defaultEnterBtn = _jsx(Button, {
  type: "primary",
  children: "Search"
});
var defaultClearIcon = _jsx(_CloseCircleFilled, {});
var Search = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$enterButton = _ref.enterButton,
    enterButton = _ref$enterButton === void 0 ? defaultEnterBtn : _ref$enterButton,
    _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
    addonAfter = _ref.addonAfter,
    loading = _ref.loading,
    size = _ref.size,
    onSearch = _ref.onSearch,
    onChange = _ref.onChange,
    onPressEnter = _ref.onPressEnter,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var readOnly = restProps.readOnly,
    customCls = restProps.className;
  var prefixCls = usePrefixCls();
  var cSize = useConvertSizeMediumAsMiddle(size);
  var styles = useStyle({
    size: size
  });
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var cls = classNames(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-input-readonly"), readOnly), customCls, true), styles);
  var handleInputChange = function handleInputChange(e) {
    setInputValue(e.target.value);
    onChange === null || onChange === void 0 || onChange(e);
  };
  var handleSearch = useCallback(function (e) {
    onSearch === null || onSearch === void 0 || onSearch(inputValue, e, {
      source: 'input'
    });
    if ((e === null || e === void 0 ? void 0 : e.type) === 'keydown' && (e === null || e === void 0 ? void 0 : e.code) === 'Enter') {
      onPressEnter === null || onPressEnter === void 0 || onPressEnter(e);
    }
  }, [inputValue, onPressEnter, onSearch]);
  var handleClear = useCallback(function (e) {
    onSearch === null || onSearch === void 0 || onSearch('', e, {
      source: 'clear'
    });
  }, [onSearch]);
  var searchBtnRender = useCallback(function () {
    var btn = addonAfter || enterButton;
    switch (btn) {
      case isBoolean(btn):
        return btn ? defaultEnterBtn : null;
      case isString(btn):
        return _jsx(Button, {
          type: "primary",
          children: btn
        });
      default:
        return btn;
    }
  }, [addonAfter, enterButton]);
  var cloneSearchBtn = useMemo(function () {
    var SearchBtn = searchBtnRender();
    if (SearchBtn === null) return SearchBtn;
    // @ts-ignore
    return /*#__PURE__*/cloneElement(SearchBtn, {
      onClick: handleSearch,
      loading: loading,
      size: size
    });
  }, [handleSearch, loading, searchBtnRender, size]);
  var computedAllowClear = useMemo(function () {
    if (isBoolean(allowClear)) {
      return allowClear ? {
        clearIcon: /*#__PURE__*/cloneElement(defaultClearIcon, {
          onClick: handleClear
        })
      } : allowClear;
    }
    var btn = (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon) || defaultClearIcon;
    return {
      clearIcon: /*#__PURE__*/cloneElement(btn, {
        onClick: handleClear
      })
    };
  }, [allowClear, handleClear]);
  return _jsxs(Space.Compact, {
    children: [_jsx(AntInput, _objectSpread({
      className: cls,
      ref: ref,
      size: cSize,
      allowClear: computedAllowClear,
      onChange: handleInputChange,
      onPressEnter: handleSearch
    }, restProps)), cloneSearchBtn]
  });
});
if (process.env.NODE_ENV !== 'production') {
  Search.displayName = 'Input Search';
}
export default Search;