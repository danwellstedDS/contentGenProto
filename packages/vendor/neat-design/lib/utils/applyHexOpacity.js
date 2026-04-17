"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HexTransparencyCodeMap = void 0;
exports.default = _default;
exports.validateHexColor = validateHexColor;
var _isNumber = _interopRequireDefault(require("lodash/isNumber"));
var _isString = _interopRequireDefault(require("lodash/isString"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file applyHexOpacity.ts
 * @description Hexadecimal color values are set transparency-related
 * @author rzh(peter.rao@derbysoft.net)
 */

// Vendors

var HexTransparencyCodeMap = exports.HexTransparencyCodeMap = function () {
  var htcm = {};
  for (var i = 0; i <= 100; i++) {
    htcm[i] = Math.round(i / 100 * 255).toString(16).padStart(2, '0').toUpperCase();
  }
  return htcm;
}();
function validateHexColor(hexColor) {
  var isHexColor = /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(hexColor);
  if (!isHexColor) {
    console.log("'validateHexColor' warning: ', 'Only hexadecimal color values are accepted!!");
  }
  return isHexColor;
}
function _default(
/**
 * @description Compliant hexadecimal color value
 * @example '#fff', '#000000'
 */
hexColor,
/**
 * @description The natural numbers of [0-100]
 * @example 20, 30, 56, 78
 */
opacityNum) {
  if ((0, _isString.default)(hexColor) && validateHexColor(hexColor) && (0, _isNumber.default)(opacityNum)) {
    if (opacityNum < 0) return "".concat(hexColor).concat(HexTransparencyCodeMap[0]);
    if (opacityNum > 100) return "".concat(hexColor).concat(HexTransparencyCodeMap[100]);
    return "".concat(hexColor).concat(HexTransparencyCodeMap[opacityNum]);
  }
  console.log("'applyHexTransparency' warning: ', 'There may be a slight problem with your parameters. ", 'We love Barbie doll Pink(#DA1884)~. HaHaHa:)');
  return '#DA1884';
}