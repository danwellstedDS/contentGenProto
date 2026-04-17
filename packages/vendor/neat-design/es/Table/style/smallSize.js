var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file tableSmall.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Styles
import checkboxSmallSize from "../../Checkbox/style/smallSize";

// Types

export default (function (utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    componentsToken = utils.componentsToken;
  var tableToken = componentsToken.Table;
  var checkboxStyle = checkboxSmallSize(utils);
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-table-thead {\n            .", "-table-cell {\n                height: ", "px;\n                padding: ", "px\n                    ", "px;\n                line-height: ", ";\n                font-size: ", "px;\n\n                .", "-checkbox-wrapper {\n                    ", "\n                }\n            }\n        }\n\n        .", "-table-tbody {\n            .", "-table-cell {\n                height: ", "px;\n                padding: ", "px\n                    ", "px;\n                line-height: ", ";\n                font-size: ", "px;\n\n                .", "-checkbox-wrapper {\n                    ", "\n                }\n\n                .", "-table-avatar-group {\n                    height: ", "px;\n                }\n\n                .", "-table-btn.", "-btn-tertiary-inline:first-of-type {\n                    margin-left: -", "px;\n                }\n\n                &[style*='text-align: center'] {\n                    .", "-table-btn.", "-btn-tertiary-inline:last-of-type {\n                        margin-left: 0;\n                    }\n                }\n\n                &[style='text-align: right;'] {\n                    .", "-table-btn.", "-btn-tertiary-inline:last-of-type {\n                        margin-left: 0;\n                        margin-right: -", "px;\n                    }\n                }\n            }\n\n            .", "-table-wrapper:only-child {\n                .", "-table {\n                    margin-block: -", "px;\n                    // Expand icon cell width is 52px, including 20px width and 16px inline padding.\n                    margin-inline: ", "px -", "px;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, tableToken['table-size-small'], tableToken['table-padding-v-small'], tableToken['table-padding-h'], tableToken['table-line-height-small'], tableToken['table-font-size-small'], prefixCls, checkboxStyle, prefixCls, prefixCls, tableToken['table-size-small'], tableToken['table-padding-v-small'], tableToken['table-padding-h'], tableToken['table-line-height-small'], tableToken['table-font-size-small'], prefixCls, checkboxStyle, prefixCls, tableToken['table-element-size-small'], prefixCls, prefixCls, tableToken['table-button-padding-h-small'], prefixCls, prefixCls, prefixCls, prefixCls, tableToken['table-button-padding-h-small'], prefixCls, prefixCls, tableToken['table-padding-v-small'], 52 - tableToken['table-padding-h'], tableToken['table-padding-h']);
});