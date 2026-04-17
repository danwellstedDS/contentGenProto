"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _Dropdown = _interopRequireDefault(require("./Dropdown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var Dropdown = _Dropdown.default;
Dropdown.Button = _antd.Dropdown.Button;
var _default = exports.default = Dropdown;