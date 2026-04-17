"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _ConfigProvider = _interopRequireDefault(require("./ConfigProvider"));
var _NeatConfigContext = _interopRequireDefault(require("./NeatConfigContext"));
var _useConfig = _interopRequireDefault(require("./useConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var ConfigProvider = _ConfigProvider.default;
ConfigProvider.ConfigContext = _NeatConfigContext.default;
ConfigProvider.config = _antd.ConfigProvider.config;
ConfigProvider.useConfig = _useConfig.default;
var _default = exports.default = ConfigProvider;