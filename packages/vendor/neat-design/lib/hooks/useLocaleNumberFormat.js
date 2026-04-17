"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useCurrentLocale = _interopRequireDefault(require("./useCurrentLocale"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file useLocaleNumberFormat.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
/**
 * Get locale
 */
var _default = exports.default = function _default() {
  var currentLocale = (0, _useCurrentLocale.default)();
  return new Intl.NumberFormat(currentLocale).format;
};