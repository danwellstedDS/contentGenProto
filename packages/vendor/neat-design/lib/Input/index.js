"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _Input = _interopRequireDefault(require("./Input"));
var _InputOTP = _interopRequireDefault(require("./InputOTP"));
var _InputPassword = _interopRequireDefault(require("./InputPassword"));
var _Search = _interopRequireDefault(require("./Search"));
var _TextArea = _interopRequireDefault(require("./TextArea"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components

var Input = _Input.default;
Input.Password = _InputPassword.default;
Input.Search = _Search.default;
Input.TextArea = _TextArea.default;
Input.Group = _antd.Input.Group;
Input.OTP = _InputOTP.default;
var _default = exports.default = Input;