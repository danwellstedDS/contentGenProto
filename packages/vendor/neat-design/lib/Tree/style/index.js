"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _checkbox = _interopRequireDefault(require("./checkbox"));
var _color = _interopRequireDefault(require("./color"));
var _line = _interopRequireDefault(require("./line"));
var _size = _interopRequireDefault(require("./size"));
var _switcher = _interopRequireDefault(require("./switcher"));
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
      prefixCls = utils.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-tree {\n                ", ";\n                ", ";\n                ", ";\n                ", ";\n\n                &.", "-tree-show-line {\n                    ", ";\n                }\n            }\n        "])), prefixCls, (0, _switcher.default)(utils), (0, _checkbox.default)(utils), (0, _size.default)(utils), (0, _color.default)(utils), prefixCls, (0, _line.default)(utils));
  });
};
var _default = exports.default = useStyle;