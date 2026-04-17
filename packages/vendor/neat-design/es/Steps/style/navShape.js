var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file navShape.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-steps-item {\n            &::before,\n            &::after {\n                display: none;\n            }\n\n            &:first-child {\n                clip-path: polygon(\n                    0% 0%,\n                    calc(100% - 22px) 0%,\n                    100% 50%,\n                    calc(100% - 22px) 100%,\n                    0% 100%\n                );\n            }\n\n            &:last-child {\n                clip-path: polygon(\n                    -14px 0%,\n                    100% 0%,\n                    100% 100%,\n                    -14px 100%,\n                    8px 50%\n                );\n\n                &::before {\n                    inset-inline-start: -14px;\n                    display: block;\n                    width: 14px;\n                    height: 100%;\n                    transition: all 0.3s;\n                }\n            }\n\n            &:not(:first-child):not(:last-child) {\n                clip-path: polygon(\n                    -14px 0%,\n                    calc(100% - 22px) 0%,\n                    100% 50%,\n                    calc(100% - 22px) 100%,\n                    -14px 100%,\n                    8px 50%\n                );\n\n                &::before {\n                    inset-inline-start: -14px;\n                    display: block;\n                    width: 14px;\n                    height: 100%;\n                    transition: all 0.3s;\n                }\n            }\n\n            &:first-child:last-child {\n                clip-path: none;\n\n                &::before,\n                &::after {\n                    display: none;\n                }\n            }\n        }\n    "])), prefixCls);
});