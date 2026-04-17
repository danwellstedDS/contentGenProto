"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useConfigContext2 = _interopRequireDefault(require("./useConfigContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file useDefaultPaginationShowTotal.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Types
/**
 * Get default Pagination showTotal function
 */
var _default = exports.default = function _default() {
  var _useConfigContext;
  return (_useConfigContext = (0, _useConfigContext2.default)()) === null || _useConfigContext === void 0 || (_useConfigContext = _useConfigContext.locale) === null || _useConfigContext === void 0 || (_useConfigContext = _useConfigContext.Pagination) === null || _useConfigContext === void 0 ? void 0 : _useConfigContext.showTotal;
};