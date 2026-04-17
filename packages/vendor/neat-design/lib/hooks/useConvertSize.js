"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.rigorousNeatSize = rigorousNeatSize;
exports.useConvertSizeMediumAsMiddle = void 0;
var _default = exports.default = function _default(size) {
  switch (size) {
    case 'large':
    case 'small':
      return size;
    case 'medium':
      return 'default';
    case void 0:
      return undefined;
    default:
      console.warn("This warning was found while converting the 'antd' property: ", "The 'size: ".concat(size, "' you passed is not supported. It will be automatically adapted to 'undefined'."));
      return undefined;
  }
};
var useConvertSizeMediumAsMiddle = exports.useConvertSizeMediumAsMiddle = function useConvertSizeMediumAsMiddle(size) {
  switch (size) {
    case 'large':
    case 'small':
      return size;
    case 'medium':
      return 'middle';
    case void 0:
      return undefined;
    default:
      console.warn("This warning was found while converting the 'select' property: ", "The 'size: ".concat(size, "' you passed is not supported. It will be automatically adapted to 'undefined'."));
      return undefined;
  }
};

/**
 * This function is recommended when concatenating `classnames`
 * @description It's sure it will get 'size' By rule of Neat-Design
 * @param size
 * @returns SizeType
 */
function rigorousNeatSize(size) {
  switch (size) {
    case 'large':
    case 'small':
    case 'medium':
      return size;
    case void 0:
      return 'medium';
    default:
      console.warn("The 'size: ".concat(size, "' you passed is not supported. It will be automatically adapted to 'medium'."));
      return 'medium';
  }
}