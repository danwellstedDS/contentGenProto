"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
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
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var selectToken = componentsToken.Select;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-picker {\n                .", "-picker-suffix {\n                    font-size: 20px;\n                }\n\n                .", "-picker-range-separator {\n                    color: ", ";\n                }\n\n                ", "\n\n                &.", "-picker-small {\n                    ", "\n                }\n\n                &.", "-picker-large {\n                    ", "\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, selectToken['select-color-text-placeholder'], (0, _mediumSize.default)(utils), prefixCls, (0, _smallSize.default)(utils), prefixCls, (0, _largeSize.default)(utils));
  });
};
var _default = exports.default = useStyle;