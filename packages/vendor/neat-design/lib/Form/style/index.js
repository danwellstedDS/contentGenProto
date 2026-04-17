"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _additional = _interopRequireDefault(require("./additional"));
var _feedback = _interopRequireDefault(require("./feedback"));
var _formItem = _interopRequireDefault(require("./formItem"));
var _label = _interopRequireDefault(require("./label"));
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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-form {\n                ", ";\n                ", ";\n                ", ";\n                ", ";\n            }\n        "])), prefixCls, (0, _formItem.default)(utils), (0, _label.default)(utils), (0, _additional.default)(utils), (0, _feedback.default)(utils));
  });
};
var _default = exports.default = useStyle;