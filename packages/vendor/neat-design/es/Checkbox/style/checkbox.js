var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file checkbox.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Vendors
import { rgba } from '@derbysoft/neat-design-token';

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    token = _ref.token,
    componentsToken = _ref.componentsToken;
  var CheckboxToken = componentsToken.Checkbox;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-checkbox {\n            display: flex;\n            align-items: center;\n            align-self: flex-start;\n\n            & > div {\n                display: none !important;\n            }\n\n            .", "-checkbox-inner {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background-color: ", ";\n                border-color: ", ";\n\n                &::after {\n                    position: static;\n                    display: block;\n                    background-color: transparent;\n                    background-repeat: no-repeat;\n                    inset-inline-start: 0;\n                    border: none;\n                    color: #fff;\n                    transform: none;\n                    transition: none;\n                    opacity: 1;\n                }\n            }\n        }\n\n        &:not(.", "-checkbox-wrap)\n            > span:last-child:not(.", "-checkbox) {\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n\n        &:hover {\n            .", "-checkbox {\n                .", "-checkbox-inner {\n                    border-color: ", ";\n                }\n            }\n        }\n\n        &:active {\n            .", "-checkbox {\n                .", "-checkbox-inner {\n                    border-color: ", ";\n                    box-shadow: 0 0 0 2px\n                        ", ";\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, CheckboxToken['checkbox-color-bg-unselected'], CheckboxToken['checkbox-color-border-unselected'], prefixCls, prefixCls, prefixCls, prefixCls, CheckboxToken['checkbox-color-border-unselected-hover'], prefixCls, prefixCls, CheckboxToken['checkbox-color-border-unselected-press'], rgba(CheckboxToken['checkbox-color-border-unselected-press'], token['opacity-2']));
});