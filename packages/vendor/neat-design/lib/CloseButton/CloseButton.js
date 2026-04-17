"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CloseOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/CloseOutlined"));
var _CloseCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/CloseCircleFilled"));
var _react = require("react");
var _usePrefixCls = _interopRequireDefault(require("../hooks/usePrefixCls"));
var _style = _interopRequireDefault(require("./style"));
var _classnames = _interopRequireDefault(require("classnames"));
var _util = require("./util");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "tagName", "type", "size", "inverse"];
/**
 * @file CloseButton.tsx
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
  var prefixCls = (0, _usePrefixCls.default)();
  var _useStyle = (0, _style.default)((0, _util.parseSize)(size)),
    styles = _useStyle.styles;
  var icon = (0, _react.useMemo)(function () {
    switch (type) {
      case 'circle':
        return (0, _jsxRuntime.jsx)(_CloseCircleFilled2.default, {});
      default:
        return (0, _jsxRuntime.jsx)(_CloseOutlined2.default, {});
    }
  }, [type]);
  return /*#__PURE__*/(0, _react.createElement)(tagName, _objectSpread(_objectSpread({}, restProps), {}, {
    className: (0, _classnames.default)(styles, "".concat(prefixCls, "-close-btn"), _defineProperty({}, "".concat(prefixCls, "-close-btn-inverse"), inverse), className)
  }), icon);
};
var _default = exports.default = CloseButton;