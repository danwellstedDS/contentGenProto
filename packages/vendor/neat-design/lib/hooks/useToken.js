"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useTheme = _interopRequireDefault(require("./useTheme"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file useToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Types
/**
 * Get theme token
 */
var _default = exports.default = function _default() {
  return (0, _useTheme.default)().token;
};