var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file size.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken,
    token = _ref.token;
  var selectToken = componentsToken.Select;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        height: ", "px;\n        padding: ", "px\n            ", "px;\n\n        .", "-picker-input {\n            > input {\n                color: ", ";\n                line-height: ", ";\n\n                &::placeholder {\n                    color: ", ";\n                }\n            }\n        }\n\n        &.", "-picker-outlined {\n            border-color: ", ";\n        }\n\n        &:not(.", "-picker-disabled) {\n            &:hover {\n                &.", "-picker-outlined {\n                    border-color: ", ";\n                }\n            }\n\n            &:focus,\n            &.", "-picker-focused {\n                &.", "-picker-outlined {\n                    border-color: ", ";\n                    box-shadow: ", ";\n                }\n            }\n        }\n\n        &.", "-picker-disabled {\n            .", "-picker-input {\n                > input {\n                    color: ", ";\n                }\n            }\n\n            &.", "-picker-outlined {\n                background-color: ", ";\n                border-color: ", ";\n            }\n        }\n\n        &.", "-picker-small {\n            height: ", "px;\n            padding-block: ", "px;\n\n            .", "-picker-input {\n                > input {\n                    line-height: ", ";\n                }\n            }\n        }\n\n        &.", "-picker-large {\n            height: ", "px;\n            padding-block: ", "px;\n\n            .", "-picker-input {\n                > input {\n                    line-height: ", ";\n                }\n            }\n        }\n    "])), selectToken['select-size-medium'], selectToken['select-padding-v-medium'], selectToken['select-padding-h'], prefixCls, selectToken['select-color-text'], selectToken['select-line-height-medium'], selectToken['select-color-text-placeholder'], prefixCls, selectToken['select-color-border'], prefixCls, prefixCls, selectToken['select-color-border-hover'], prefixCls, prefixCls, selectToken['select-color-border-hover'], token['shadow-focus'], prefixCls, prefixCls, selectToken['select-color-text-disabled'], prefixCls, selectToken['select-color-bg-disabled'], selectToken['select-color-border-disabled'], prefixCls, selectToken['select-size-small'], selectToken['select-padding-v-small'], prefixCls, selectToken['select-line-height-small'], prefixCls, selectToken['select-size-large'], selectToken['select-padding-v-large'], prefixCls, selectToken['select-line-height-large']);
});