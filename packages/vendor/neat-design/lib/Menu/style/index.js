"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _horizontal = _interopRequireDefault(require("./horizontal"));
var _hover = _interopRequireDefault(require("./hover"));
var _inline = _interopRequireDefault(require("./inline"));
var _inlineCollapsed = _interopRequireDefault(require("./inlineCollapsed"));
var _selected = _interopRequireDefault(require("./selected"));
var _templateObject;
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Styles
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Types

var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    return utils.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-menu {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), utils.prefixCls, (0, _horizontal.default)(utils), (0, _hover.default)(utils), (0, _inline.default)(utils), (0, _inlineCollapsed.default)(utils), (0, _selected.default)(utils));
  });
};
var _default = exports.default = useStyle;