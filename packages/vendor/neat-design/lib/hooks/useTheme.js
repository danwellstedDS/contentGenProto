"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useConfigContext2 = _interopRequireDefault(require("./useConfigContext"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file useTheme.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Statics
// Types
/**
 * Get theme
 */
var _default = exports.default = function _default() {
  var _useConfigContext;
  return ((_useConfigContext = (0, _useConfigContext2.default)()) === null || _useConfigContext === void 0 ? void 0 : _useConfigContext.theme) || _theme.defaultTheme;
};