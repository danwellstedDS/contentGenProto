var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file overlay.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls,
      componentsToken = _ref.componentsToken;
    var dropDownToken = componentsToken.Dropdown;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-select-dropdown {\n                padding: ", "px;\n                .", "-select-item-option:not(.", "-select-item-option-disabled) {\n                    background-color: ", ";\n                }\n                .", "-select-item-option-active:not(.", "-select-item-option-disabled) {\n                    background-color: ", ";\n                }\n            }\n            &.select-popup-tags,\n            &.select-popup-multiple {\n                .", "-select-item-option-selected:not(.", "-select-item-option-disabled) {\n                    color: ", ";\n                    font-weight: unset;\n                }\n            }\n            & .rc-virtual-list-scrollbar {\n                right: -", "px!important;\n            }\n        "])), prefixCls, dropDownToken['dropdown-padding'], prefixCls, prefixCls, dropDownToken['dropdown-color-bg'], prefixCls, prefixCls, dropDownToken['dropdown-color-bg-hover'], prefixCls, prefixCls, dropDownToken['dropdown-color-text'], dropDownToken['dropdown-padding'] - dropDownToken['dropdown-padding-scroll']);
  }).styles;
};
export default useStyle;