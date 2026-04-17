"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /**
 * @file useFieldControlled.ts
 * @author minglong(minglong.zhao@derbysoft.net)
 */ // Hooks
/**
 * @description 用于编写同时具有受控组件与非受控组件两种模式的组件，对字段 {value} 与 {onChange}进行包装。
 * @deprecated 已废弃，可使用ahooks的useControllableValue
 */
var useFieldControlled = function useFieldControlled(props) {
  var propsValue = props.value,
    defaultValue = props.defaultValue,
    onChange = props.onChange;
  var onChangeRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    onChangeRef.current = onChange;
  });
  var _useState = (0, _react.useState)(function () {
      return defaultValue;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    localValue = _useState2[0],
    setLocalValue = _useState2[1];
  var controlled = (0, _react.useMemo)(function () {
    return Object.prototype.hasOwnProperty.call(props, 'value');
  }, [props]);
  var value = (0, _react.useMemo)(function () {
    return controlled ? propsValue : localValue;
  }, [controlled, propsValue, localValue]);
  var handleChangeValue = (0, _react.useCallback)(function (value) {
    var _onChangeRef$current;
    if (!controlled) {
      setLocalValue(value);
    }
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call.apply(_onChangeRef$current, [onChangeRef, value].concat(rest));
  }, [controlled]);
  return {
    value: value,
    onChange: handleChangeValue
  };
};
var _default = exports.default = useFieldControlled;