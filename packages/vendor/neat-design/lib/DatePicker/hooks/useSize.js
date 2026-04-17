"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * @file useSize.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

var useSize = function useSize(size) {
  switch (size) {
    case 'small':
      return 'small';
    case 'large':
      return 'large';
    default:
      return 'middle';
  }
};
var _default = exports.default = useSize;