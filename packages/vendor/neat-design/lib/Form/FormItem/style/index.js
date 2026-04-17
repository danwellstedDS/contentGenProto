"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../../hooks");
var _additional = _interopRequireDefault(require("./additional"));
var _colon = _interopRequireDefault(require("./colon"));
var _label = _interopRequireDefault(require("./label"));
var _requiredMark = _interopRequireDefault(require("./requiredMark"));
var _row = _interopRequireDefault(require("./row"));
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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-form-item {\n                ", ";\n                ", ";\n                ", ";\n                ", ";\n                ", ";\n            }\n        "])), prefixCls, (0, _requiredMark.default)(utils), (0, _colon.default)(utils), (0, _label.default)(utils), (0, _row.default)(utils), (0, _additional.default)(utils));
  });
};
var _default = exports.default = useStyle;