"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _useConvertSize = require("../../hooks/useConvertSize");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author rzh(peter.rao@derbysoft.net)
 */
// Hooks
// Vendors
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle(_ref) {
  var size = _ref.size;
  var cSize = (0, _useConvertSize.rigorousNeatSize)(size);
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref2) {
    var css = _ref2.css,
      prefixCls = _ref2.prefixCls,
      token = _ref2.token,
      componentsToken = _ref2.componentsToken,
      subComponentsToken = _ref2.subComponentsToken;
    var selectToken = componentsToken.Select;
    var arrowIconToken = subComponentsToken.ArrowIcon;
    var tagsCommon = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n                gap: 0;\n            "])));
    var tagBlockOffset = 1;
    var tagCommon = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n                .", "-tag {\n                    margin-inline-end: ", "px;\n                    margin-top: ", "px;\n                    margin-bottom: ", "px;\n                }\n            "])), prefixCls, selectToken['select-gap'], selectToken["select-padding-v-".concat(cSize)] / 2 - tagBlockOffset, selectToken["select-padding-v-".concat(cSize)] / 2 - tagBlockOffset);
    var readOnlyText = css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                color: ", ";\n                border-color: ", ";\n            "])), selectToken['select-color-text'], selectToken['select-color-border']);
    return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n                &.", "-select.", "-select-multiple\n                    .", "-select-selector {\n                        padding-block: ", "px;\n                        padding-inline-start: ", "px;\n                        .", "-select-selection-overflow-item-suffix {\n                            margin-block: 4px;\n                        }\n                        .", "-select-selection-overflow { \n                            ", "\n                            ", "\n                        }\n                    }\n                &.", "-select-multiple {\n                    .", "-select-selection-overflow-item-suffix {\n                        .", "-select-selection-search {\n                            margin-inline-start: 0px;\n                        }\n                    }\n                    .", "-select-selection-placeholder {\n                        inset-inline-start: 0px;\n                    }\n                }\n                &.", "-select-multiple.", "-select-lg {\n                    .", "-select-selection-overflow-item-suffix {\n                        .", "-select-selection-search {\n                            margin-inline-start: 0px;\n                        }\n                    }\n                    .", "-select-selection-placeholder {\n                        inset-inline-start: 0px;\n                    }\n                }\n                &.", "-select-multiple.", "-select-sm {\n                    .", "-select-selector {\n                        padding-inline-start: 7px;\n                    }\n                    .", "-select-selection-placeholder {\n                        inset-inline-start: 0px;\n                    }\n                }\n\n                &.", "-select-readonly.", "-select-disabled:not(.", "-select-customize-input) {\n                    .", "-select-selector {\n                        ", "\n                    }\n                }\n\n                &.", "-select .", "-select-arrow > * {\n                    font-size: 14px;\n                    height: 100%;\n                    line-height: 1;\n                }\n\n                &.", "-select:not(.", "-select-disabled) {\n                    .", "-select-arrow {\n                        color: ", ";\n                        transition: all 0.2s ease;\n                    }\n\n                    .", "-select-clear {\n                        inset-inline-end: ", "px;\n                        margin-top: -", "px;\n                        width: ", "px;\n                        height: ", "px;\n                        font-size: ", "px;\n                    }\n\n                    :hover .", "-select-arrow {\n                        color: ", ";\n                    }\n\n                    :active .", "-select-arrow {\n                        color: ", ";\n                    }\n                }\n\n                &.", "-select.", "-select-borderless {\n                    &:hover {\n                        .", "-select-selector {\n                            background: ", ";\n                        }\n                    }\n                }\n\n                // animate arrow icon\n                .", "-select-arrow\n                    span[aria-label='ArrowDownOutlined'] {\n                    transition: all 0.2s ease;\n                }\n                &.", "-select.", "-select-show-arrow {\n                    &.", "-select-open {\n                        .", "-select-arrow\n                            span[aria-label='ArrowDownOutlined'] {\n                            transform: rotate(180deg);\n                        }\n                    }\n                }\n            "])), prefixCls, prefixCls, prefixCls, selectToken["select-padding-v-".concat(cSize)] / 2, selectToken['select-padding-h'], prefixCls, prefixCls, tagsCommon.styles, tagCommon.styles, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, readOnlyText.styles, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, arrowIconToken['arrow-icon-color'], prefixCls, token['size-static-12'], token['size-static-14'] / 2, token['size-static-14'], token['size-static-14'], token['size-static-14'], prefixCls, arrowIconToken['arrow-icon-color-hover'], prefixCls, arrowIconToken['arrow-icon-color-press'], prefixCls, prefixCls, prefixCls, selectToken['select-color-bg-hover-borderless'], prefixCls, prefixCls, prefixCls, prefixCls, prefixCls);
  }).styles;
};
var _default = exports.default = useStyle;