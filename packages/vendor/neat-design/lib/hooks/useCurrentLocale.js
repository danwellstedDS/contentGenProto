"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useLocale2 = _interopRequireDefault(require("./useLocale"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file useCurrentLocale.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Types
/**
 * Get locale
 */
var _default = exports.default = function _default() {
  var _useLocale;
  return (_useLocale = (0, _useLocale2.default)()) === null || _useLocale === void 0 ? void 0 : _useLocale.locale;
};