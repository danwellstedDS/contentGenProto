"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _Cascader = _interopRequireDefault(require("./Cascader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components

var Cascader = _Cascader.default;
Cascader.SHOW_PARENT = _antd.Cascader.SHOW_PARENT;
Cascader.SHOW_CHILD = _antd.Cascader.SHOW_CHILD;
Cascader.Panel = _antd.Cascader.Panel;
var _default = exports.default = Cascader;