function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _ArrowDownOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowDownOutlined";
import _SearchOutlined from "@derbysoft/neat-design-icons/lib/icons-react/SearchOutlined";
import _ArrowLeftOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowLeftOutlined";
import _ArrowRightOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined";
import _ArrowUpOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowUpOutlined";
var _excluded = ["className", "type", "disabled"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file ArrowIcon.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';
import { usePrefixCls } from "../hooks";

// Icons

// Vendors
import classNames from 'classnames';

// Styles
import useStyle from "./style";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var ArrowIcon = function ArrowIcon(_ref) {
  var className = _ref.className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'arrow-down' : _ref$type,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var prefixCls = usePrefixCls();
  var _useStyle = useStyle(),
    styles = _useStyle.styles;
  var icon = useMemo(function () {
    switch (type) {
      case 'arrow-up':
        return _jsx(_ArrowUpOutlined, {});
      case 'arrow-right':
        return _jsx(_ArrowRightOutlined, {});
      case 'arrow-left':
        return _jsx(_ArrowLeftOutlined, {});
      case 'search':
        return _jsx(_SearchOutlined, {});
      default:
        return _jsx(_ArrowDownOutlined, {});
    }
  }, [type]);
  return _jsx("div", _objectSpread(_objectSpread({}, restProps), {}, {
    className: classNames("".concat(prefixCls, "-arrow-icon"), styles, {
      disabled: disabled
    }, className),
    children: icon
  }));
};
export default ArrowIcon;