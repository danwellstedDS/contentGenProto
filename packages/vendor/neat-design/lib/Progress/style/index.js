"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _bar = _interopRequireDefault(require("./bar"));
var _bold = _interopRequireDefault(require("./bold"));
var _color = _interopRequireDefault(require("./color"));
var _ring = _interopRequireDefault(require("./ring"));
var _ringMini = _interopRequireDefault(require("./ringMini"));
var _templateObject;
/**
 * @file index.ts
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
    var progressToken = componentsToken.Progress;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-progress {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), prefixCls, (0, _color.default)(utils), (0, _bar.default)(utils), (0, _bold.default)(utils), (0, _ring.default)(utils), (0, _ringMini.default)(utils));
  });
};
var _default = exports.default = useStyle;