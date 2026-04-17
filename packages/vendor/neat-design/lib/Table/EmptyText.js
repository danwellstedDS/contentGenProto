"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _FolderOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/FolderOutlined"));
var _react = require("react");
var _hooks = require("../hooks");
var _EmptyText = _interopRequireDefault(require("./style/EmptyText"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "loading", "image", "text", "description", "render"];
/**
 * @file EmptyText.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Icons
// Vendors
// Types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var EmptyText = function EmptyText(_ref) {
  var className = _ref.className,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$image = _ref.image,
    image = _ref$image === void 0 ? (0, _jsxRuntime.jsx)(_FolderOutlined2.default, {}) : _ref$image,
    text = _ref.text,
    description = _ref.description,
    render = _ref.render,
    restProps = _objectWithoutProperties(_ref, _excluded);
  /**
   * Get neat config context
   */
  var configContext = (0, _hooks.useConfigContext)();

  /**
   * Get styles
   */
  var _useStyle = (0, _EmptyText.default)(),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;

  /**
   * Calculate text value
   */
  var computedText = (0, _react.useMemo)(function () {
    return text || configContext.locale.Table.emptyTextTitle;
  }, [text, configContext.locale.Table.emptyTextTitle]);

  /**
   * Calculate description value
   */
  var computedDescription = (0, _react.useMemo)(function () {
    return description || configContext.locale.Table.emptyTextDescription;
  }, [description, configContext.locale.Table.emptyTextDescription]);

  /**
   * Default content render
   */
  var defaultRender = (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [!loading && image && (0, _jsxRuntime.jsx)("div", {
      className: "".concat(prefixCls, "-empty-image"),
      children: image
    }), !loading && computedText && (0, _jsxRuntime.jsx)("div", {
      className: "".concat(prefixCls, "-empty-text"),
      children: computedText
    }), !loading && computedDescription && (0, _jsxRuntime.jsx)("div", {
      className: "".concat(prefixCls, "-empty-description"),
      children: computedDescription
    })]
  });
  return (0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({}, restProps), {}, {
    className: (0, _classnames.default)(styles, "".concat(prefixCls, "-empty"), className),
    children: render ? !loading && (typeof render === 'function' ? render() : render) : defaultRender
  }));
};
var _default = exports.default = EmptyText;