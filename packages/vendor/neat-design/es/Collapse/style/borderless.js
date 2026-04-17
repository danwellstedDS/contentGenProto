var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file borderless.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var collapseToken = componentsToken.Collapse;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-collapse-borderless {\n            border-radius: 0;\n\n            > .", "-collapse-item {\n                border-radius: 0;\n\n                > .", "-collapse-header {\n                    border-radius: 0;\n                }\n\n                > .", "-collapse-content {\n                    background: ", ";\n                    border-top: 1px solid\n                        ", ";\n                    border-radius: 0;\n                }\n\n                &:last-child {\n                    border-bottom: 1px solid\n                        ", ";\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, collapseToken['collapse-color-bg'], collapseToken['collapse-color-border'], collapseToken['collapse-color-border']);
});