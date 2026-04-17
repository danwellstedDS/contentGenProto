"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = require("react");
var _Bar = _interopRequireDefault(require("./style/Bar"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["init", "barMaxWidth", "dragging", "draggableBoundSource", "updateBarSize", "zIndex", "isDraggable", "className", "content", "width", "open", "style"];
/**
 * @file Bar.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
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
var Bar = function Bar(_ref, parentRef) {
  var init = _ref.init,
    barMaxWidth = _ref.barMaxWidth,
    dragging = _ref.dragging,
    draggableBoundSource = _ref.draggableBoundSource,
    updateBarSize = _ref.updateBarSize,
    zIndex = _ref.zIndex,
    isDraggable = _ref.isDraggable,
    className = _ref.className,
    content = _ref.content,
    width = _ref.width,
    open = _ref.open,
    style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useStyle = (0, _Bar.default)(),
    styles = _useStyle.styles,
    prefixCls = _useStyle.prefixCls;
  return (0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-draggable-anchor"), {
      window: draggableBoundSource === 'window'
    }, styles),
    style: {
      zIndex: zIndex
    },
    children: (0, _jsxRuntime.jsx)(_rcResizeObserver.default, {
      onResize: updateBarSize,
      children: (0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
        className: (0, _classnames.default)("".concat(prefixCls, "-draggable-bar"), {
          show: init && open,
          dragging: dragging,
          draggable: isDraggable
        }, className),
        style: _objectSpread(_objectSpread({}, style), {}, {
          width: width,
          maxWidth: barMaxWidth
        })
      }, rest), {}, {
        ref: parentRef,
        children: content
      }))
    })
  });
};
var _default = exports.default = /*#__PURE__*/(0, _react.forwardRef)(Bar);