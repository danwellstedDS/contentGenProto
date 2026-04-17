"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _amber = _interopRequireDefault(require("./amber"));
var _amberInverse = _interopRequireDefault(require("./amberInverse"));
var _blue = _interopRequireDefault(require("./blue"));
var _blueInverse = _interopRequireDefault(require("./blueInverse"));
var _cyan = _interopRequireDefault(require("./cyan"));
var _cyanInverse = _interopRequireDefault(require("./cyanInverse"));
var _green = _interopRequireDefault(require("./green"));
var _greenInverse = _interopRequireDefault(require("./greenInverse"));
var _neutral = _interopRequireDefault(require("./neutral"));
var _neutralInverse = _interopRequireDefault(require("./neutralInverse"));
var _orange = _interopRequireDefault(require("./orange"));
var _orangeInverse = _interopRequireDefault(require("./orangeInverse"));
var _pink = _interopRequireDefault(require("./pink"));
var _pinkInverse = _interopRequireDefault(require("./pinkInverse"));
var _purple = _interopRequireDefault(require("./purple"));
var _purpleInverse = _interopRequireDefault(require("./purpleInverse"));
var _red = _interopRequireDefault(require("./red"));
var _redInverse = _interopRequireDefault(require("./redInverse"));
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
// Types

var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      token = utils.token;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-tag {\n                display: inline-flex;\n                align-items: center;\n                border: none;\n                font-weight: ", ";\n\n                .", "-tag-icon {\n                    color: inherit;\n                }\n\n                .", "-tag-close-icon {\n                    margin: 0;\n                }\n\n                &:active {\n                    .", "-tag-close-icon {\n                        color: inherit;\n                    }\n                }\n\n                &:focus-visible {\n                    outline: none;\n                    box-shadow: ", ";\n                }\n\n                &.disabled {\n                    .", "-tag-close-icon {\n                        display: none;\n                    }\n                }\n\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), prefixCls, token['font-weight-regular'], prefixCls, prefixCls, prefixCls, token['shadow-focus'], prefixCls, (0, _size.default)(utils), (0, _blue.default)(utils), (0, _blueInverse.default)(utils), (0, _green.default)(utils), (0, _greenInverse.default)(utils), (0, _orange.default)(utils), (0, _orangeInverse.default)(utils), (0, _amber.default)(utils), (0, _amberInverse.default)(utils), (0, _red.default)(utils), (0, _redInverse.default)(utils), (0, _pink.default)(utils), (0, _pinkInverse.default)(utils), (0, _purple.default)(utils), (0, _purpleInverse.default)(utils), (0, _cyan.default)(utils), (0, _cyanInverse.default)(utils), (0, _neutral.default)(utils), (0, _neutralInverse.default)(utils));
  });
};
var _default = exports.default = useStyle;