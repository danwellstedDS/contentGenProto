"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _Breadcrumb = _interopRequireDefault(require("./Breadcrumb"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author pipi(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components

var Breadcrumb = _Breadcrumb.default;
Breadcrumb.Item = _antd.Breadcrumb.Item;
Breadcrumb.Separator = _antd.Breadcrumb.Separator;
var _default = exports.default = Breadcrumb;