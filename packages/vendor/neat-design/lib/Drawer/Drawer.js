"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _hooks = require("../hooks");
var _DrawerContext = _interopRequireDefault(require("./DrawerContext"));
var _antd = require("antd");
var _CloseButton = _interopRequireDefault(require("../CloseButton"));
var _classnames = _interopRequireDefault(require("classnames"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["rootClassName", "size", "width", "closeIcon"];
/**
 * @file Drawer.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Contexts
// Components
// Vendors
// Styles
// Types
// Export props type
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var Drawer = function Drawer(_ref) {
  var rootClassName = _ref.rootClassName,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    width = _ref.width,
    _ref$closeIcon = _ref.closeIcon,
    closeIcon = _ref$closeIcon === void 0 ? (0, _jsxRuntime.jsx)(_CloseButton.default, {
      tagName: "span"
    }) : _ref$closeIcon,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var prefixCls = (0, _hooks.usePrefixCls)();
  var _useStyle = (0, _style.default)(),
    styles = _useStyle.styles;

  /**
   * Calculate the drawer width
   */
  var getDrawerWidth = (0, _react.useCallback)(function () {
    // Return the width if it is passed
    if (width) {
      return width;
    }

    // Return the width depend on the "size" prop
    switch (size) {
      case 'small':
        return 300;
      case 'large':
        return 900;
      case 'full-screen':
        return window.innerWidth < 768 ? '100vw' : 'calc(100vw - 64px)';
      default:
        // "medium"
        return 600;
    }
  }, [size, width]);

  /**
   * State for current drawer width
   */
  var _useState = (0, _react.useState)(getDrawerWidth()),
    _useState2 = _slicedToArray(_useState, 2),
    drawerWidth = _useState2[0],
    setDrawerWidth = _useState2[1];
  (0, _react.useEffect)(function () {
    setDrawerWidth(getDrawerWidth());
  }, [getDrawerWidth]);

  /**
   * Update drawer width.
   */
  var handleResize = (0, _react.useCallback)(function () {
    setDrawerWidth(getDrawerWidth());
  }, [getDrawerWidth]);

  /**
   * Bind event for drawer width when window resized.
   */
  (0, _react.useEffect)(function () {
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);
  return (0, _jsxRuntime.jsx)(_DrawerContext.default.Provider, {
    value: {
      placement: restProps === null || restProps === void 0 ? void 0 : restProps.placement,
      onClose: restProps === null || restProps === void 0 ? void 0 : restProps.onClose
    },
    children: (0, _jsxRuntime.jsx)(_antd.Drawer, _objectSpread(_objectSpread({}, restProps), {}, {
      rootClassName: (0, _classnames.default)(styles, "".concat(prefixCls, "-drawer-").concat(size), rootClassName),
      width: drawerWidth,
      closeIcon: closeIcon
    }))
  });
};
var _default = exports.default = Drawer;