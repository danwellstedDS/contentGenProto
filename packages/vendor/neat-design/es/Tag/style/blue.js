var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file blue.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var tagToken = componentsToken.Tag;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-tag-color-blue {\n            background: ", ";\n            color: ", ";\n\n            .", "-tag-icon {\n                color: ", ";\n            }\n\n            &:hover {\n                background: ", ";\n            }\n\n            &:active {\n                background: ", ";\n                color: ", ";\n\n                .", "-tag-icon {\n                    color: inherit;\n                }\n            }\n\n            &.disabled {\n                background: ", ";\n                color: ", ";\n            }\n        }\n    "])), prefixCls, tagToken['tag-color-bg-light-blue'], tagToken['tag-color-text-light-blue'], prefixCls, tagToken['tag-color-icon-light-blue'], tagToken['tag-color-bg-light-blue-hover'], tagToken['tag-color-bg-light-blue-active'], tagToken['tag-color-text-light-active'], prefixCls, tagToken['tag-color-bg-light-disabled'], tagToken['tag-color-text-light-disabled']);
});