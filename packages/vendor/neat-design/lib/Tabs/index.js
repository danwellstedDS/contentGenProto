"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _Tabs = _interopRequireDefault(require("./Tabs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components

var Tabs = _Tabs.default;
Tabs.TabPane = _antd.Tabs.TabPane;
var _default = exports.default = Tabs;