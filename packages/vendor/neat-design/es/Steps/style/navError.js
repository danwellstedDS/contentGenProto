var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file navError.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var stepsToken = componentsToken.Steps;
  var hover = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-steps-item-icon {\n            border-color: ", ";\n\n            .", "-steps-icon {\n                color: ", ";\n            }\n        }\n\n        .", "-steps-item-title {\n            color: ", ";\n        }\n\n        .", "-steps-item-description {\n            color: ", ";\n        }\n    "])), prefixCls, stepsToken['steps-color-error'], prefixCls, stepsToken['steps-color-error'], prefixCls, stepsToken['steps-color-text'], prefixCls, stepsToken['steps-color-text-secondary']);
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        .", "-steps-item.", "-steps-item-error {\n            background: ", ";\n\n            .", "-steps-item-container[role='button'] {\n                &:hover {\n                    ", "\n                }\n            }\n\n            &::before,\n            &::after {\n                background: ", ";\n            }\n\n            &:hover {\n                ", ";\n                background: ", ";\n\n                &::before,\n                &::after {\n                    background: ", ";\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, stepsToken['steps-color-bg-error'], prefixCls, hover, stepsToken['steps-color-bg-error'], hover, stepsToken['steps-color-bg-error-hover'], stepsToken['steps-color-bg-error-hover']);
});