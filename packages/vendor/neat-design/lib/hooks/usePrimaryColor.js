"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useToken2 = _interopRequireDefault(require("./useToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file usePrimaryColor.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
/**
 * Get primary color
 */
var _default = exports.default = function _default() {
  var _useToken;
  return (_useToken = (0, _useToken2.default)()) === null || _useToken === void 0 ? void 0 : _useToken['color-primary'];
};