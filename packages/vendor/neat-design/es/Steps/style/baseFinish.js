var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file baseFinish.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var stepsToken = componentsToken.Steps;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-steps-item.", "-steps-item-finish {\n            .", "-steps-item-icon {\n                > .", "-steps-icon {\n                    color: ", ";\n                }\n            }\n\n            > .", "-steps-item-container\n                > .", "-steps-item-tail::after {\n                background-color: ", ";\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, stepsToken['steps-color-success'], prefixCls, prefixCls, stepsToken['steps-color-border-finish']);
});