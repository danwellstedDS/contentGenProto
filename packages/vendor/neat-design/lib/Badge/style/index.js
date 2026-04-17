"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _count = _interopRequireDefault(require("./count"));
var _dot = _interopRequireDefault(require("./dot"));
var _size = _interopRequireDefault(require("./size"));
var _status = _interopRequireDefault(require("./status"));
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
    return utils.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-badge {\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), utils.prefixCls, (0, _count.default)(utils), (0, _dot.default)(utils), (0, _size.default)(utils), (0, _status.default)(utils));
  });
};
var _default = exports.default = useStyle;