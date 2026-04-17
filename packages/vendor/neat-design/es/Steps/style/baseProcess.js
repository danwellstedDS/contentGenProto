var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file baseProcess.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var stepsToken = componentsToken.Steps;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-steps-item.", "-steps-item-process {\n            > .", "-steps-item-container\n                > .", "-steps-item-content {\n                > .", "-steps-item-title {\n                    color: ", ";\n\n                    &::after {\n                        background: ", ";\n                    }\n                }\n\n                > .", "-steps-item-description {\n                    color: ", ";\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, stepsToken['steps-color-text'], stepsToken['steps-color-border-disabled'], prefixCls, stepsToken['steps-color-text-secondary']);
});