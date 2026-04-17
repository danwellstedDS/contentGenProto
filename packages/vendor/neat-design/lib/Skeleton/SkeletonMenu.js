"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _SkeletonItem = _interopRequireDefault(require("./SkeletonItem"));
var _SkeletonTitleBox = require("./SkeletonTitleBox");
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _menu = _interopRequireDefault(require("./style/menu"));
var _react2 = require("@emotion/react");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "style", "rows"];
/**
 * @file SkeletonMenu.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Components
// Vendors
// Styles
// Types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SkeletonMenu = function SkeletonMenu(props) {
  var className = props.className,
    style = props.style,
    _props$rows = props.rows,
    rows = _props$rows === void 0 ? 5 : _props$rows,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useStyle = (0, _menu.default)(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;
  var mergedRows = (0, _react.useMemo)(function () {
    return !rows || isNaN(rows) || rows < 2 ? 2 : rows;
  }, [rows]);
  return (0, _jsxRuntime.jsx)(_SkeletonItem.default, _objectSpread(_objectSpread({}, (0, _omit.default)(props, ['className'])), {}, {
    loadingPlaceholder: (0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("".concat(prefixCls, "-skeleton-menu"), styles, className),
      style: style,
      children: Array.from({
        length: mergedRows
      }).map(function (_, index) {
        return (0, _react2.createElement)(_SkeletonTitleBox.InternalSkeletonTitleBox, _objectSpread(_objectSpread({}, restProps), {}, {
          key: index
        }));
      })
    }),
    block: true
  }));
};
var _default = exports.default = SkeletonMenu;