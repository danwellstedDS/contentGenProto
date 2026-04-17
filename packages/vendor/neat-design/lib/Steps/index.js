"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _HorizontalSteps = _interopRequireDefault(require("./HorizontalSteps"));
var _NavigationSteps = _interopRequireDefault(require("./NavigationSteps"));
var _Steps = _interopRequireDefault(require("./Steps"));
var _VerticalSteps = _interopRequireDefault(require("./VerticalSteps"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var Steps = _Steps.default;
Steps.Step = _antd.Steps.Step;
Steps.Horizontal = _HorizontalSteps.default;
Steps.Navigation = _NavigationSteps.default;
Steps.Vertical = _VerticalSteps.default;
var _default = exports.default = Steps;