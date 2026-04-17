var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file line.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    componentsToken = utils.componentsToken;
  var treeToken = componentsToken.Tree;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-tree-indent-unit {\n            width: ", "px;\n\n            &::before {\n                inset-inline-end: ", "px;\n                border-inline-end-color: ", ";\n            }\n\n            &::after {\n                left: ", "px;\n                inset-block-end: ", "px;\n                border-block-end-color: ", ";\n            }\n        }\n\n        &.", "-tree-small {\n            .", "-tree-indent-unit {\n                width: ", "px;\n\n                &::before {\n                    inset-inline-end: ", "px;\n                }\n\n                &::after {\n                    left: ", "px;\n                    inset-block-end: ", "px;\n                }\n            }\n        }\n\n        &.", "-tree-large {\n            .", "-tree-indent-unit {\n                width: ", "px;\n\n                &::before {\n                    inset-inline-end: ", "px;\n                }\n\n                &::after {\n                    left: ", "px;\n                    inset-block-end: ", "px;\n                }\n            }\n        }\n    "])), prefixCls, treeToken['tree-size-fill-medium'], treeToken['tree-size-fill-medium'] / 2 - 0.5, treeToken['tree-color-border'], treeToken['tree-size-fill-medium'] / 2, treeToken['tree-size-medium'] / 2, treeToken['tree-color-border'], prefixCls, prefixCls, treeToken['tree-size-fill-small'], treeToken['tree-size-fill-small'] / 2 - 0.5, treeToken['tree-size-fill-small'] / 2, treeToken['tree-size-small'] / 2, prefixCls, prefixCls, treeToken['tree-size-fill-large'], treeToken['tree-size-fill-large'] / 2 - 0.5, treeToken['tree-size-fill-large'] / 2, treeToken['tree-size-large'] / 2);
});