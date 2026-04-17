function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _WarningCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/WarningCircleFilled";
import _InfoCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/InfoCircleFilled";
import _SuccessCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/SuccessCircleFilled";
var _excluded = ["className", "type", "message", "description", "action", "icon", "closable"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Alert.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';

// Components
import { Alert as AntAlert } from 'antd';
import CloseButton from "../CloseButton";

// Icons

// Vendors
import classNames from 'classnames';

// Styles
import useStyle from "./style";

// Types
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var Alert = function Alert(_ref) {
  var className = _ref.className,
    type = _ref.type,
    message = _ref.message,
    description = _ref.description,
    action = _ref.action,
    icon = _ref.icon,
    closable = _ref.closable,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyle = useStyle(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles,
    componentsToken = _useStyle.componentsToken;
  var alertToken = componentsToken.Alert;
  var mergedIcon = useMemo(function () {
    if (icon) {
      return icon;
    }
    switch (type) {
      case 'success':
        return _jsx(_SuccessCircleFilled, {});
      case 'info':
        return _jsx(_InfoCircleFilled, {});
      case 'warning':
        return _jsx(_WarningCircleFilled, {});
      case 'error':
        return _jsx(_WarningCircleFilled, {});
      default:
        return icon !== null && icon !== void 0 ? icon : _jsx(_InfoCircleFilled, {});
    }
  }, [type, icon]);
  var mergedClosable = useMemo(function () {
    if (!closable || closable !== null && closable !== void 0 && closable.closeIcon) {
      return closable;
    }
    return {
      closeIcon: _jsx(CloseButton, {
        tagName: "span",
        size: alertToken['alert-size-icon']
      })
    };
  }, [alertToken, closable]);
  return _jsx(AntAlert, _objectSpread(_objectSpread({}, restProps), {}, {
    className: classNames(styles, className),
    type: type,
    message: message && !description && action ? _jsxs(_Fragment, {
      children: [message, _jsx("div", {
        className: "".concat(prefixCls, "-alert-message-action"),
        children: action
      })]
    }) : message,
    description: description && action ? _jsxs(_Fragment, {
      children: [description, _jsx("div", {
        className: "".concat(prefixCls, "-alert-description-action"),
        children: action
      })]
    }) : description,
    icon: _jsx("div", {
      children: mergedIcon
    }),
    closable: mergedClosable
  }));
};
export default Alert;