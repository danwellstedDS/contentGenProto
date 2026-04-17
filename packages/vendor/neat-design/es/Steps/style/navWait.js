var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file navWait.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken,
    token = _ref.token;
  var stepsToken = componentsToken.Steps;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-steps-item.", "-steps-item-wait {\n            background: ", ";\n\n            .", "-steps-item-container[role='button'] {\n                &:hover {\n                    .", "-steps-item-icon {\n                        border-color: ", ";\n\n                        .", "-steps-icon {\n                            color: ", ";\n                        }\n                    }\n\n                    .", "-steps-item-title,\n                        .", "-steps-item-description {\n                        color: ", ";\n                    }\n                }\n            }\n\n            &::before,\n            &::after {\n                background: ", ";\n            }\n\n            &:hover {\n                background: ", ";\n\n                &::before,\n                &::after {\n                    background: ", ";\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, stepsToken['steps-color-bg-disabled'], prefixCls, prefixCls, stepsToken['steps-color-disabled'], prefixCls, token['color-text-inverse'], prefixCls, prefixCls, stepsToken['steps-color-text-disabled'], stepsToken['steps-color-bg-disabled'], stepsToken['steps-color-bg-disabled-hover'], stepsToken['steps-color-bg-disabled-hover']);
});