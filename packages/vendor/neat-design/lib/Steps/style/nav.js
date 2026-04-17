"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _navError = _interopRequireDefault(require("./navError"));
var _navFinish = _interopRequireDefault(require("./navFinish"));
var _navProcess = _interopRequireDefault(require("./navProcess"));
var _navShape = _interopRequireDefault(require("./navShape"));
var _navSkip = _interopRequireDefault(require("./navSkip"));
var _navWait = _interopRequireDefault(require("./navWait"));
var _templateObject;
/**
 * @file default.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Styles
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var stepsToken = componentsToken.Steps;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-steps.", "-steps-horizontal.", "-steps-layout-navigation {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                padding: 0;\n\n                .", "-steps-item {\n                    padding-inline-start: 18px;\n                    text-align: left;\n                    transition: all 0.3s;\n                }\n\n                .", "-steps-item-container {\n                    display: inline-flex;\n                    align-items: center;\n                    padding: 0;\n                    margin-inline-start: ", "px;\n                    padding-block: 10px;\n                }\n\n                .", "-steps-item-content {\n                    padding-inline-end: 16px;\n                }\n\n                .", "-steps-item-icon {\n                    flex: 0 0 auto;\n                    margin-inline-end: ", "px;\n                }\n\n                .", "-steps-item-title {\n                    line-height: 24px;\n                }\n\n                &.", "-steps-small {\n                    .", "-steps-item-icon {\n                        margin-inline-end: ", "px;\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, (0, _navError.default)(utils), (0, _navFinish.default)(utils), (0, _navProcess.default)(utils), (0, _navShape.default)(utils), (0, _navSkip.default)(utils), (0, _navWait.default)(utils), prefixCls, prefixCls, stepsToken['steps-padding-medium'], prefixCls, prefixCls, stepsToken['steps-gap-item-medium'], prefixCls, prefixCls, prefixCls, stepsToken['steps-gap-item-small']);
  });
};
var _default = exports.default = useStyle;