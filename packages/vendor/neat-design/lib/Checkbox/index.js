"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Checkbox = _interopRequireDefault(require("./Checkbox"));
var _CheckboxGroup = _interopRequireDefault(require("./CheckboxGroup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var Checkbox = _Checkbox.default;
Checkbox.Group = _CheckboxGroup.default;
var _default = exports.default = Checkbox;