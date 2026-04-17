"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _Tree = _interopRequireDefault(require("./Tree"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components

var Tabs = _Tree.default;
Tabs.TreeNode = _antd.Tree.TreeNode;
Tabs.DirectoryTree = _antd.Tree.DirectoryTree;
var _default = exports.default = Tabs;