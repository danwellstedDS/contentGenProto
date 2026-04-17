"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file color.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    componentsToken = utils.componentsToken;
  var treeToken = componentsToken.Tree;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-tree-treenode {\n            transition:\n                all 0.2s,\n                border 0s,\n                line-height 0s,\n                box-shadow 0s;\n\n            &:hover {\n                background: ", ";\n            }\n        }\n    "])), prefixCls, treeToken['tree-color-bg-hover']);
};