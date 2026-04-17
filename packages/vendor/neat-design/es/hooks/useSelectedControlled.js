function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @file useSelectedControlled.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Types

var useSelectedControlled = function useSelectedControlled(props) {
  var propsValue = props.selectedKeys,
    defaultSelectedKeys = props.defaultSelectedKeys,
    onSelect = props.onSelect,
    onDeselect = props.onDeselect;
  var onSelectRef = useRef();
  var onDeselectRef = useRef();
  useEffect(function () {
    onSelectRef.current = onSelect;
  });
  useEffect(function () {
    onDeselectRef.current = onDeselect;
  });
  var _useState = useState(function () {
      return defaultSelectedKeys;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    localValue = _useState2[0],
    setLocalValue = _useState2[1];
  var controlled = useMemo(function () {
    // eslint-disable-next-line no-prototype-builtins
    return props.hasOwnProperty('selectedKeys');
  }, [props]);
  var selectedKeys = useMemo(function () {
    return controlled ? propsValue : localValue;
  }, [controlled, propsValue, localValue]);
  var handleSelect = useCallback(function (info) {
    var _onSelectRef$current;
    if (!controlled) {
      setLocalValue(info === null || info === void 0 ? void 0 : info.selectedKeys);
    }
    (_onSelectRef$current = onSelectRef.current) === null || _onSelectRef$current === void 0 || _onSelectRef$current.call(onSelectRef, info);
  }, [controlled]);
  var handleDeselect = useCallback(function (info) {
    var _onDeselectRef$curren;
    if (!controlled) {
      setLocalValue(info === null || info === void 0 ? void 0 : info.selectedKeys);
    }
    (_onDeselectRef$curren = onDeselectRef.current) === null || _onDeselectRef$curren === void 0 || _onDeselectRef$curren.call(onDeselectRef, info);
  }, [controlled]);
  return {
    selectedKeys: selectedKeys,
    onSelect: handleSelect,
    onDeselect: handleDeselect
  };
};
export default useSelectedControlled;