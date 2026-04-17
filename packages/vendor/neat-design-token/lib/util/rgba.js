"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.completeHex = completeHex;
exports.default = void 0;
exports.hex2Rgb = hex2Rgb;
exports.removeHexHashSymbol = removeHexHashSymbol;
exports.rgba = rgba;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @file rgba.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

/**
 * Remove the hash symbol of hex if it is existed.
 * @param hex
 */
function removeHexHashSymbol(hex) {
  return hex !== null && hex !== void 0 && hex.startsWith('#') ? hex.slice(1) : hex;
}

/**
 * Format hex to 6 digitals if it is 3.
 * @param hex
 */
function completeHex(hex) {
  return (hex === null || hex === void 0 ? void 0 : hex.length) === 3 ? hex.split('').map(function (digit) {
    return digit + digit;
  }).join('') : hex;
}

/**
 * Format hex to rgb array.
 * @param hex
 */
function hex2Rgb(hex) {
  if (!hex) {
    return undefined;
  }
  var h = completeHex(removeHexHashSymbol(hex));
  return [parseInt(h.substring(0, 2), 16), parseInt(h.substring(2, 4), 16), parseInt(h.substring(4, 6), 16)];
}

/**
 * Format hex + alpha to rgba(r, g, b, a).
 * @param hex
 * @param alpha
 */
function rgba(hex, alpha) {
  return "rgba(".concat([].concat(_toConsumableArray(hex2Rgb(hex)), [alpha]).join(','), ")");
}
var _default = exports.default = rgba;