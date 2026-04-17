function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @file useGetDomSize.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */

// Hooks
import { useCallback, useEffect, useRef, useState } from 'react';

// Types

var useGetDomSize = function useGetDomSize(_ref) {
  var onResize = _ref.onResize,
    getContainer = _ref.getContainer;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    dom = _useState2[0],
    setDom = _useState2[1];
  var timer = useRef();

  // get container dom
  useEffect(function () {
    var timerFlag = timer.current;
    if (timerFlag) {
      clearInterval(timerFlag);
      timerFlag = null;
    }
    var dom = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
    if (!dom) {
      timerFlag = setInterval(function () {
        var dom = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
        if (dom) {
          setDom(dom);
          clearInterval(timerFlag);
        }
      }, 100);
      timer.current = timerFlag;
    } else {
      setDom(dom);
    }
    return function () {
      if (timerFlag) clearInterval(timerFlag);
    };
  }, [getContainer]);

  // set up dom listening event
  var domResizeObserver = useRef();
  var updateDomSize = useCallback(function (dom) {
    var offsetWidth = dom.offsetWidth,
      offsetHeight = dom.offsetHeight,
      clientWidth = dom.clientWidth,
      clientHeight = dom.clientHeight;
    onResize({
      width: clientWidth,
      height: clientHeight,
      offsetWidth: offsetWidth,
      offsetHeight: offsetHeight
    });
  }, [onResize]);
  var addDomListener = useCallback(function (dom) {
    if (!dom) return;
    if (domResizeObserver.current) {
      var _domResizeObserver$cu;
      (_domResizeObserver$cu = domResizeObserver.current) === null || _domResizeObserver$cu === void 0 || _domResizeObserver$cu.disconnect();
    }
    var resize = new ResizeObserver(function () {
      updateDomSize(dom);
    });
    domResizeObserver.current = resize;
    resize.observe(dom);
  }, [updateDomSize]);
  useEffect(function () {
    addDomListener(dom);
    return function () {
      var _domResizeObserver$cu2;
      (_domResizeObserver$cu2 = domResizeObserver.current) === null || _domResizeObserver$cu2 === void 0 || _domResizeObserver$cu2.disconnect();
    };
  }, [addDomListener, dom]);
};
export default useGetDomSize;