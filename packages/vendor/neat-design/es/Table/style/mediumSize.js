var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file smallSize.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Styles
import checkboxMediumSize from "../../Checkbox/style/mediumSize";

// Types

export default (function (utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    componentsToken = utils.componentsToken;
  var tableToken = componentsToken.Table;
  var checkboxStyle = checkboxMediumSize(utils);
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-table-thead {\n            .", "-table-cell {\n                height: ", "px;\n                padding: ", "px\n                    ", "px;\n                line-height: ", ";\n                font-size: ", "px;\n\n                .", "-checkbox-wrapper {\n                    ", "\n                }\n            }\n        }\n\n        .", "-table-tbody {\n            .", "-table-cell {\n                height: ", "px;\n                padding: ", "px\n                    ", "px;\n                line-height: ", ";\n                font-size: ", "px;\n\n                .", "-checkbox-wrapper {\n                    ", "\n                }\n\n                .", "-table-avatar-group {\n                    height: ", "px;\n                }\n\n                .", "-table-btn.", "-btn-tertiary-inline:first-of-type {\n                    margin-left: -", "px;\n                }\n\n                &[style*='text-align: center'] {\n                    .", "-table-btn.", "-btn-tertiary-inline:last-of-type {\n                        margin-left: 0;\n                    }\n                }\n\n                &[style*='text-align: right'] {\n                    .", "-table-btn.", "-btn-tertiary-inline:last-of-type {\n                        margin-left: 0;\n                        margin-right: -", "px;\n                    }\n                }\n            }\n\n            .", "-table-wrapper:only-child {\n                .", "-table {\n                    margin-block: -", "px;\n                    // Expand icon cell width is 52px, including 20px width and 16px inline padding.\n                    margin-inline: ", "px -", "px;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, tableToken['table-size-medium'], tableToken['table-padding-v-medium'], tableToken['table-padding-h'], tableToken['table-line-height-medium'], tableToken['table-font-size-medium'], prefixCls, checkboxStyle, prefixCls, prefixCls, tableToken['table-size-medium'], tableToken['table-padding-v-medium'], tableToken['table-padding-h'], tableToken['table-line-height-medium'], tableToken['table-font-size-medium'], prefixCls, checkboxStyle, prefixCls, tableToken['table-element-size-medium'], prefixCls, prefixCls, tableToken['table-button-padding-h-medium'], prefixCls, prefixCls, prefixCls, prefixCls, tableToken['table-button-padding-h-medium'], prefixCls, prefixCls, tableToken['table-padding-v-medium'], 52 - tableToken['table-padding-h'], tableToken['table-padding-h']);
});