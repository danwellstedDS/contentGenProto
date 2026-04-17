"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = exports.default = void 0;
var _hooks = require("../../hooks");
var _checkbox = _interopRequireDefault(require("./checkbox"));
var _checked = _interopRequireDefault(require("./checked"));
var _disabled = _interopRequireDefault(require("./disabled"));
var _error = _interopRequireDefault(require("./error"));
var _indeterminate = _interopRequireDefault(require("./indeterminate"));
var _largeSize = _interopRequireDefault(require("./largeSize"));
var _mediumSize = _interopRequireDefault(require("./mediumSize"));
var _smallSize = _interopRequireDefault(require("./smallSize"));
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

var getStyle = exports.getStyle = function getStyle(utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &[class^='", "-checkbox'] {\n            ", ";\n            ", ";\n            ", ";\n            ", ";\n            ", ";\n\n            &.", "-checkbox-size-large {\n                ", ";\n            }\n\n            &.", "-checkbox-size-medium {\n                ", ";\n            }\n\n            &.", "-checkbox-size-small {\n                ", ";\n            }\n        }\n    "])), prefixCls, (0, _checkbox.default)(utils), (0, _checked.default)(utils), (0, _disabled.default)(utils), (0, _error.default)(utils), (0, _indeterminate.default)(utils), prefixCls, (0, _largeSize.default)(utils), prefixCls, (0, _mediumSize.default)(utils), prefixCls, (0, _smallSize.default)(utils));
};
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    return getStyle(utils);
  });
};
var _default = exports.default = useStyle;