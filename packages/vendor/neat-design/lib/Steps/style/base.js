"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _baseDot = _interopRequireDefault(require("./baseDot"));
var _baseError = _interopRequireDefault(require("./baseError"));
var _baseFinish = _interopRequireDefault(require("./baseFinish"));
var _baseIconOutlined = _interopRequireDefault(require("./baseIconOutlined"));
var _baseProcess = _interopRequireDefault(require("./baseProcess"));
var _baseSize = _interopRequireDefault(require("./baseSize"));
var _baseSkip = _interopRequireDefault(require("./baseSkip"));
var _baseWait = _interopRequireDefault(require("./baseWait"));
var _templateObject;
/**
 * @file base.ts
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
      prefixCls = utils.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-steps {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), prefixCls, (0, _baseSize.default)(utils), (0, _baseDot.default)(utils), (0, _baseIconOutlined.default)(utils), (0, _baseError.default)(utils), (0, _baseFinish.default)(utils), (0, _baseProcess.default)(utils), (0, _baseSkip.default)(utils), (0, _baseWait.default)(utils));
  });
};
var _default = exports.default = useStyle;