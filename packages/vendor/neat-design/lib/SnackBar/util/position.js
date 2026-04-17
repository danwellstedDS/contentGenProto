"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transferOriginPlacement = exports.getValidPosition = exports.getBounds = exports.formatBoundsGap = exports.checkNeedPackUp = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * @file position.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

var formatBoundsGap = exports.formatBoundsGap = function formatBoundsGap(boundsGap) {
  return typeof boundsGap === 'number' ? [boundsGap, boundsGap, boundsGap, boundsGap] : boundsGap;
};
var getBounds = exports.getBounds = function getBounds(boundSize, barSize, boundsGap) {
  var boundsGapArr = formatBoundsGap(boundsGap);
  var boundOffsetWidth = Math.max(boundSize.offsetWidth, boundsGapArr[1] + boundsGapArr[3]);
  var boundOffsetHeight = Math.max(boundSize.offsetHeight, boundsGapArr[0] + boundsGapArr[2]);
  var barOffsetWidth = barSize.offsetWidth;
  var barOffsetHeight = barSize.offsetHeight;
  return {
    top: boundsGapArr[0],
    left: boundsGapArr[3],
    right: boundOffsetWidth - barOffsetWidth - boundsGapArr[1],
    bottom: boundOffsetHeight - barOffsetHeight - boundsGapArr[2]
  };
};
var getValidPosition = exports.getValidPosition = function getValidPosition(object, bounds) {
  var x = object.x,
    y = object.y;
  var position = {
    x: x,
    y: y
  };
  if (x > bounds.right) {
    position.x = bounds.right;
  } else if (bounds.left <= x && x <= bounds.right) {
    position.x = x;
  } else if (x < bounds.left) {
    position.x = bounds.left;
  }
  if (y > bounds.bottom) {
    position.y = bounds.bottom;
  } else if (bounds.top <= y && y <= bounds.right) {
    position.y = y;
  } else if (y < bounds.top) {
    position.y = bounds.top;
  }
  return position;
};
var _transferPositionStrToX = function _transferPositionStrToX(str, bounds) {
  if (str === 'left') {
    return bounds.left;
  } else if (str === 'right') {
    return bounds.right;
  }
  return (bounds.right + bounds.left) / 2;
};
var _transferPositionStrToY = function _transferPositionStrToY(str, bounds) {
  if (str === 'top') {
    return bounds.top;
  } else if (str === 'bottom') {
    return bounds.bottom;
  }
  return (bounds.bottom - bounds.top) / 2;
};

// 用户传入的 position转化为对应的坐标
var transferOriginPlacement = exports.transferOriginPlacement = function transferOriginPlacement(placement, bounds) {
  if (_typeof(placement) === 'object') {
    return getValidPosition(placement, bounds);
  } else {
    return {
      x: _transferPositionStrToX(placement, bounds),
      y: _transferPositionStrToY(placement, bounds)
    };
  }
};

// 检查是否需要隐藏在右下角
// 按钮处于右下角 100 * 100 范围内 则收起来
var NEED_PACK_UP_SIZE = 64;
var checkNeedPackUp = exports.checkNeedPackUp = function checkNeedPackUp(x, bounds) {
  if (bounds.right - x <= NEED_PACK_UP_SIZE) {
    return 'right';
  } else if (x - bounds.left <= NEED_PACK_UP_SIZE) {
    return 'left';
  }
  return false;
};