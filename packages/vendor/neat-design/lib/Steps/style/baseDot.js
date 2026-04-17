"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseDotError = _interopRequireDefault(require("./baseDotError"));
var _baseDotFinish = _interopRequireDefault(require("./baseDotFinish"));
var _baseDotProcess = _interopRequireDefault(require("./baseDotProcess"));
var _baseDotSkip = _interopRequireDefault(require("./baseDotSkip"));
var _baseDotWait = _interopRequireDefault(require("./baseDotWait"));
var _templateObject;
/**
 * @file baseDot.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Styles
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Types
var _default = exports.default = function _default(utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-steps-progress-dot {\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            \n            .", "-steps-item-tail {\n                padding-inline: 16px;\n            }\n\n            .", "-steps-icon-dot {\n                width: 32px;\n                height: 32px;\n                padding: 12px;\n\n                &::after {\n                    content: '';\n                    display: block;\n                    width: 8px;\n                    height: 8px;\n                    border-radius: 50%;\n                }\n            }\n\n            &.", "-steps-small {\n                .", "-steps-item-tail {\n                    padding-inline: 12px;\n                }\n\n                .", "-steps-icon-dot {\n                    width: 24px;\n                    height: 24px;\n                    padding: 8px;\n                }\n            }\n        }\n    "])), prefixCls, (0, _baseDotError.default)(utils), (0, _baseDotFinish.default)(utils), (0, _baseDotProcess.default)(utils), (0, _baseDotSkip.default)(utils), (0, _baseDotWait.default)(utils), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls);
};