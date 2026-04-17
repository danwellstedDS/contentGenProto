"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
/**
 * @file useGetWindowSize.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */

// Hooks

// Types

var getWindowSize = function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    offsetWidth: window.innerWidth,
    offsetHeight: window.innerHeight
  };
};
var useGetWindowSize = function useGetWindowSize(_ref) {
  var onResize = _ref.onResize;
  (0, _react.useEffect)(function () {
    onResize(getWindowSize());
    var handleResize = function handleResize() {
      onResize(getWindowSize());
    };

    // 监听
    window.addEventListener('resize', handleResize);
    // 销毁
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, [onResize]);
};
var _default = exports.default = useGetWindowSize;