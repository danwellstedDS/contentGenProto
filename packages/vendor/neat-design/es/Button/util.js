function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["type", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file util.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Component
import Loading from "./Loading";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
export var neatButtonType2AntButtonType = function neatButtonType2AntButtonType(type) {
  switch (type) {
    case 'primary':
      return 'primary';
    case 'tertiary':
    case 'tertiaryInline':
      return 'text';
    case 'link':
      return 'link';
    default:
      return 'default';
  }
};
export var neatButtonSize2AntButtonSize = function neatButtonSize2AntButtonSize(size) {
  switch (size) {
    case 'small':
      return 'small';
    case 'medium':
      return 'middle';
    case 'large':
      return 'large';
  }
};
export var neatButtonIcon2AntButtonIcon = function neatButtonIcon2AntButtonIcon(icon, props) {
  return props !== null && props !== void 0 && props.loading ? _jsx(Loading, {
    size: props === null || props === void 0 ? void 0 : props.size,
    type: props === null || props === void 0 ? void 0 : props.type,
    disabled: props === null || props === void 0 ? void 0 : props.disabled
  }) : icon;
};
export var neatButtonProps2AntButtonProps = function neatButtonProps2AntButtonProps(props, options) {
  var type = props.type,
    size = props.size,
    restProps = _objectWithoutProperties(props, _excluded);
  var result = _objectSpread({}, restProps);

  // Handle `type`
  if (options !== null && options !== void 0 && options.withoutDefault) {
    if ((props === null || props === void 0 ? void 0 : props.type) !== undefined) {
      result.type = neatButtonType2AntButtonType(props === null || props === void 0 ? void 0 : props.type);
    }
  } else {
    result.type = neatButtonType2AntButtonType(props === null || props === void 0 ? void 0 : props.type);
  }

  // Handle `size`
  if (options !== null && options !== void 0 && options.withoutDefault) {
    if ((props === null || props === void 0 ? void 0 : props.size) !== undefined) {
      result.size = neatButtonSize2AntButtonSize(props === null || props === void 0 ? void 0 : props.size);
    }
  } else {
    result.size = neatButtonSize2AntButtonSize(props === null || props === void 0 ? void 0 : props.size);
  }

  // Handle `loading`
  if (options !== null && options !== void 0 && options.withoutDefault) {
    if ((props === null || props === void 0 ? void 0 : props.loading) !== undefined) {
      result.loading = props === null || props === void 0 ? void 0 : props.loading;
    }
  } else {
    result.loading = (props === null || props === void 0 ? void 0 : props.loading) || false;
  }

  // Handle `icon`
  if (options !== null && options !== void 0 && options.withoutDefault) {
    if ((props === null || props === void 0 ? void 0 : props.icon) !== undefined) {
      result.icon = neatButtonIcon2AntButtonIcon(props === null || props === void 0 ? void 0 : props.icon, props);
    }
  } else {
    result.icon = neatButtonIcon2AntButtonIcon(props === null || props === void 0 ? void 0 : props.icon, props);
  }
  return result;
};