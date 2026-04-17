"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _color = _interopRequireDefault(require("./color"));
var _size = _interopRequireDefault(require("./size"));
var _templateObject;
/**
 * @file index.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
// Hooks
// Styles
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle(_ref) {
  var onlyIcon = _ref.onlyIcon;
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    return utils.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-segmented {\n                ", "\n                ", "\n            }\n        "])), utils.prefixCls, (0, _color.default)(utils), (0, _size.default)(utils, onlyIcon));
  });
};
var _default = exports.default = useStyle;