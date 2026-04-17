"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file size.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    componentsToken = utils.componentsToken;
  var treeToken = componentsToken.Tree;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-tree-treenode {\n            align-items: center;\n            min-height: ", "px;\n            margin: 0;\n\n            .", "-tree-node-content-wrapper {\n                padding: 0 4px;\n                min-height: ", ";\n                line-height: ", ";\n                overflow: hidden;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n            }\n        }\n\n        &.", "-tree-small {\n            .", "-tree-treenode {\n                min-height: ", "px;\n\n                .", "-tree-node-content-wrapper {\n                    min-height: ", ";\n                    line-height: ", ";\n                }\n            }\n        }\n\n        &.", "-tree-large {\n            .", "-tree-treenode {\n                min-height: ", "px;\n\n                .", "-tree-node-content-wrapper {\n                    min-height: ", ";\n                    line-height: ", ";\n                }\n            }\n        }\n    "])), prefixCls, treeToken['tree-size-medium'], prefixCls, treeToken['tree-line-height-medium'], treeToken['tree-line-height-medium'], prefixCls, prefixCls, treeToken['tree-size-small'], prefixCls, treeToken['tree-line-height-small'], treeToken['tree-line-height-small'], prefixCls, prefixCls, treeToken['tree-size-large'], prefixCls, treeToken['tree-line-height-large'], treeToken['tree-line-height-large']);
};