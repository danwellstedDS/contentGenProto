"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _FormItem = _interopRequireDefault(require("./FormItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var FormItem = _FormItem.default;
FormItem.useStatus = _antd.Form.Item.useStatus;
var _default = exports.default = FormItem;