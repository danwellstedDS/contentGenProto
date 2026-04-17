"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _card = _interopRequireDefault(require("./card"));
var _editableLine = _interopRequireDefault(require("./editableLine"));
var _large = _interopRequireDefault(require("./large"));
var _medium = _interopRequireDefault(require("./medium"));
var _nav = _interopRequireDefault(require("./nav"));
var _small = _interopRequireDefault(require("./small"));
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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-tabs {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), prefixCls, (0, _small.default)(utils), (0, _medium.default)(utils), (0, _large.default)(utils), (0, _nav.default)(utils), (0, _card.default)(utils), (0, _editableLine.default)(utils));
  });
};
var _default = exports.default = useStyle;