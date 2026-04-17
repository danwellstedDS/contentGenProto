function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children", "className", "type", "scrollEl", "hidden", "direction", "icon", "onClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file NavScrollButton.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCallback, useMemo } from 'react';

// Components
import { ArrowIcon, Button } from "../";

// Statics
import { MockScrollData } from "./static/MockScroll";

// Vendors
import classNames from 'classnames';

// Styles
import useStyles from "./style/NavScrollButton";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var NavScrollButton = function NavScrollButton(_ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'secondary' : _ref$type,
    scrollEl = _ref.scrollEl,
    hidden = _ref.hidden,
    direction = _ref.direction,
    icon = _ref.icon,
    onClick = _ref.onClick,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles(),
    prefixCls = _useStyles.prefixCls,
    styles = _useStyles.styles;

  /**
   * Merge props `icon`.
   */
  var mergedIcon = useMemo(function () {
    if (icon) {
      return icon;
    }
    switch (direction) {
      case 'left':
        return _jsx(ArrowIcon, {
          type: "arrow-left"
        });
      case 'right':
        return _jsx(ArrowIcon, {
          type: "arrow-right"
        });
      default:
        return undefined;
    }
  }, [direction, icon]);

  /**
   * Do scroll according to mock scroll data recorded by human.
   */
  var doScroll = useCallback(function () {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (index >= MockScrollData.length) {
      return;
    }
    scrollEl.dispatchEvent(new WheelEvent('wheel', {
      deltaX: (direction === 'left' ? -1 : 1) * MockScrollData[index].x
    }));
    setTimeout(function () {
      doScroll(++index);
    }, MockScrollData[index].timeout / 50);
  }, [direction, scrollEl]);

  /**
   * Handle click event and do scroll when clicked.
   */
  var handleClick = useCallback(function () {
    doScroll();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    onClick === null || onClick === void 0 || onClick.apply(void 0, args);
  }, [doScroll, onClick]);
  return _jsx(Button, _objectSpread(_objectSpread({}, restProps), {}, {
    className: classNames("".concat(prefixCls, "-tabs-nav-scroll-btn"), _defineProperty(_defineProperty({
      hidden: hidden
    }, "".concat(prefixCls, "-tabs-nav-scroll-left-btn"), direction === 'left'), "".concat(prefixCls, "-tabs-nav-scroll-right-btn"), direction === 'right'), styles),
    type: type,
    icon: mergedIcon,
    onClick: handleClick
  }));
};
export default NavScrollButton;