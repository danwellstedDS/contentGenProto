function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "style", "color", "size", "disabled", "icon", "closeIcon", "pointerEvents"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Tag.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';
import useConfig from "../ConfigProvider/useConfig";
import useStyle from "./style";

// Components
import { Tag as AntTag } from 'antd';
import CloseButton from "../CloseButton";

// Vendors
import classNames from 'classnames';

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Tag = function Tag(_ref) {
  var className = _ref.className,
    style = _ref.style,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'blue' : _ref$color,
    size = _ref.size,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    icon = _ref.icon,
    closeIcon = _ref.closeIcon,
    pointerEvents = _ref.pointerEvents,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useConfig = useConfig(),
    componentSize = _useConfig.componentSize;
  var _useStyle = useStyle(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles,
    componentsToken = _useStyle.componentsToken;
  var tagToken = componentsToken.Tag;
  var tagSize = useMemo(function () {
    return size || componentSize;
  }, [componentSize, size]);
  var closable = restProps.closable;
  var computedIcon = useMemo(function () {
    if (!icon) {
      return icon;
    }
    return _jsx("span", {
      className: "".concat(prefixCls, "-tag-icon"),
      children: icon
    });
  }, [prefixCls, icon]);
  var mergedStyle = useMemo(function () {
    var result = _objectSpread({}, style);
    if (pointerEvents) {
      result.pointerEvents = pointerEvents;
    }
    return result;
  }, [pointerEvents, style]);
  var defaultCloseButtonRender = _jsx(CloseButton, {
    tagName: "span",
    type: "circle",
    size: tagToken["tag-size-icon-".concat(tagSize)],
    inverse: color === null || color === void 0 ? void 0 : color.endsWith('inverse')
  });
  var computedCloseIcon = function () {
    switch (closeIcon) {
      case false:
      case null:
      case undefined:
        // Polyfill: when antd useing <tag/> inside
        if (closable) {
          return defaultCloseButtonRender;
        }
        return false;
      case true:
        return defaultCloseButtonRender;
      default:
        return closeIcon;
    }
  }();
  return _jsx(AntTag, _objectSpread(_objectSpread({}, restProps), {}, {
    className: classNames(styles, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-tag-color-").concat(color), color), "".concat(prefixCls, "-tag-size-").concat(tagSize), tagSize), "".concat(prefixCls, "-tag-closable"), !!computedCloseIcon), "disabled", disabled), className),
    style: mergedStyle,
    icon: computedIcon,
    closeIcon: computedCloseIcon,
    tabIndex: 0
  }));
};
export default Tag;