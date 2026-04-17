"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _NeatConfigContext = _interopRequireDefault(require("../ConfigProvider/NeatConfigContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file useConfigContext.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Context
// Types
/**
 * Use ConfigProvider.ConfigContext
 */
var _default = exports.default = function _default() {
  return (0, _react.useContext)(_NeatConfigContext.default);
};