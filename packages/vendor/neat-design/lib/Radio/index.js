"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _Radio = _interopRequireDefault(require("./Radio"));
var _Group = _interopRequireDefault(require("./Group"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author pipi(peter.rao@derbysoft.net)
 */

var Radio = _Radio.default;
Radio.Group = _Group.default;
Radio.Button = _antd.Radio.Button;
var _default = exports.default = Radio;