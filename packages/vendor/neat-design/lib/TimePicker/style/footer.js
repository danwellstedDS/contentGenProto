"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nowButton = _interopRequireDefault(require("./nowButton"));
var _okButton = _interopRequireDefault(require("./okButton"));
var _templateObject;
/**
 * @file footer.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Styles
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Types
var _default = exports.default = function _default(utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    token = utils.token;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-picker-footer {\n            border-top-color: ", ";\n\n            .", "-picker-footer-extra {\n                border-bottom-color: ", ";\n            }\n\n            .", "-picker-now {\n                ", ";\n            }\n\n            .", "-picker-ok {\n                ", ";\n            }\n        }\n    "])), prefixCls, token['color-border-divider'], prefixCls, token['color-border-divider'], prefixCls, (0, _nowButton.default)(utils), prefixCls, (0, _okButton.default)(utils));
};