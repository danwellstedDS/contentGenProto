"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _Cascader = _interopRequireDefault(require("../Cascader"));
var _Select = _interopRequireDefault(require("./Select"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components

// Types

var Select = _Select.default;
Select.Option = _antd.Select.Option;
Select.OptGroup = _antd.Select.OptGroup;
Select.Cascader = _Cascader.default;
var _default = exports.default = Select;