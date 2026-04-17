"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _color = _interopRequireDefault(require("./color"));
var _danger = _interopRequireDefault(require("./danger"));
var _dropdown = _interopRequireDefault(require("./dropdown"));
var _size = _interopRequireDefault(require("./size"));
var _templateObject;
/**
 * @file index.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
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
    return utils.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            font-family: ", ";\n            font-weight: ", ";\n\n            &.", "-btn {\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), utils.token['font-family'], utils.token['font-weight-medium'], utils.prefixCls, (0, _size.default)(utils), (0, _color.default)(utils), (0, _danger.default)(utils), (0, _dropdown.default)(utils));
  });
};
var _default = exports.default = useStyle;