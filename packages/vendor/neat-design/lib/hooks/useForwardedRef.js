"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
/**
 * @file useForwardedRef.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Types
var _default = exports.default = function _default(ref) {
  var innerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  });
  return innerRef;
};