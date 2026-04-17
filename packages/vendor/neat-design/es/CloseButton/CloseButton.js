function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _CloseOutlined from "@derbysoft/neat-design-icons/lib/icons-react/CloseOutlined";
import _CloseCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/CloseCircleFilled";
var _excluded = ["className", "tagName", "type", "size", "inverse"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file CloseButton.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';
import usePrefixCls from "../hooks/usePrefixCls";
import useStyle from "./style";

// Icons

// Vendors
import classNames from 'classnames';
import { createElement } from 'react';
import { parseSize } from "./util";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var CloseButton = function CloseButton(_ref) {
  var className = _ref.className,
    _ref$tagName = _ref.tagName,
    tagName = _ref$tagName === void 0 ? 'button' : _ref$tagName,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'default' : _ref$type,
    size = _ref.size,
    _ref$inverse = _ref.inverse,
    inverse = _ref$inverse === void 0 ? false : _ref$inverse,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var prefixCls = usePrefixCls();
  var _useStyle = useStyle(parseSize(size)),
    styles = _useStyle.styles;
  var icon = useMemo(function () {
    switch (type) {
      case 'circle':
        return _jsx(_CloseCircleFilled, {});
      default:
        return _jsx(_CloseOutlined, {});
    }
  }, [type]);
  return /*#__PURE__*/createElement(tagName, _objectSpread(_objectSpread({}, restProps), {}, {
    className: classNames(styles, "".concat(prefixCls, "-close-btn"), _defineProperty({}, "".concat(prefixCls, "-close-btn-inverse"), inverse), className)
  }), icon);
};
export default CloseButton;