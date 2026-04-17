"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _borderless = _interopRequireDefault(require("./borderless"));
var _color = _interopRequireDefault(require("./color"));
var _expandIcon = _interopRequireDefault(require("./expandIcon"));
var _ghost = _interopRequireDefault(require("./ghost"));
var _size = _interopRequireDefault(require("./size"));
var _templateObject;
/**
 * @file index.tsx
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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-collapse {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                overflow: hidden;\n\n                > .", "-collapse-item {\n                    &:first-child,\n                    &:last-child {\n                        > .", "-collapse-header {\n                            border-radius: 0;\n                        }\n                    }\n                }\n            }\n        "])), prefixCls, (0, _color.default)(utils), (0, _borderless.default)(utils), (0, _ghost.default)(utils), (0, _size.default)(utils), (0, _expandIcon.default)(utils), prefixCls, prefixCls);
  });
};
var _default = exports.default = useStyle;