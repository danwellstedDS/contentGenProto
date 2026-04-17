"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _useStatus = _interopRequireDefault(require("./useStatus"));
var _FormContext = _interopRequireDefault(require("../FormContext"));
var _util = require("antd/lib/form/util");
var _excluded = ["formItemProps", "children", "onFocus", "onBlur", "onStatusChange"];
/**
 * @file ElementChildrenWrapper.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Contexts
// Components
// Vendors
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// Types

// The `ChildProps` is defined in the InternalFieldProps from `rc-field-form/lib/Field`

function ElementChildrenWrapper(_ref) {
  var formItemProps = _ref.formItemProps,
    children = _ref.children,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onStatusChange = _ref.onStatusChange,
    restProps = _objectWithoutProperties(_ref, _excluded);
  // 监听 formItem 的 status 变化
  (0, _useStatus.default)({
    onStatusChange: onStatusChange
  });

  // 获取 context 中的 validateTrigger
  var _useContext = (0, _react.useContext)(_FormContext.default),
    contextValidateTrigger = _useContext.validateTrigger;

  // 获取 formItemProps 中的 name、trigger、validateTrigger、dependencies
  var name = formItemProps.name,
    trigger = formItemProps.trigger,
    validateTrigger = formItemProps.validateTrigger,
    dependencies = formItemProps.dependencies;

  // 合并 children
  var mergedChildren = (0, _react.useMemo)(function () {
    var childList = (0, _util.toArray)(children);
    return childList.length <= 1 ? childList[0] : childList;
  }, [children]);

  // 判断是否存在 name
  var hasName = (0, _react.useMemo)(function () {
    return !(name === undefined || name === null);
  }, [name]);

  // 如果 name 不存在，并且没有依赖，则返回 children
  if (!hasName && !dependencies || Array.isArray(mergedChildren) && hasName) {
    return children || null;
  }
  // 如果 mergedChildren 是有效的 React 元素，则返回 mergedChildren
  else if ( /*#__PURE__*/(0, _react.isValidElement)(mergedChildren)) {
    // 合并 validateTrigger
    var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : contextValidateTrigger;

    // 合并 trigger 和 validateTrigger
    var triggers = new Set([].concat(_toConsumableArray((0, _util.toArray)(trigger)), _toConsumableArray((0, _util.toArray)(mergedValidateTrigger))));

    // 组装 child 的 props
    var childProps = _objectSpread(_objectSpread(_objectSpread({}, mergedChildren.props), restProps), {}, {
      onFocus: onFocus,
      onBlur: onBlur
    });

    // 触发事件
    triggers.forEach(function (eventName) {
      childProps[eventName] = function () {
        var _restProps$eventName, _props$eventName, _props;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        restProps === null || restProps === void 0 || (_restProps$eventName = restProps[eventName]) === null || _restProps$eventName === void 0 || _restProps$eventName.call.apply(_restProps$eventName, [restProps].concat(args));
        (_props$eventName = (_props = mergedChildren.props)[eventName]) === null || _props$eventName === void 0 || _props$eventName.call.apply(_props$eventName, [_props].concat(args));
      };
    });
    return /*#__PURE__*/(0, _react.cloneElement)(mergedChildren, childProps);
  }
  // 如果 mergedChildren 不是有效的 React 元素，则返回 children
  else {
    return children || null;
  }
}
var _default = exports.default = ElementChildrenWrapper;