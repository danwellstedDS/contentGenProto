"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _suffix = _interopRequireDefault(require("./suffix"));
var _trigger = _interopRequireDefault(require("./trigger"));
var _templateObject;
/**
 * @file picker.ts
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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-picker.", "-time-picker {\n                ", ";\n                ", ";\n            }\n        "])), prefixCls, prefixCls, (0, _trigger.default)(utils), (0, _suffix.default)(utils));
  });
};
var _default = exports.default = useStyle;