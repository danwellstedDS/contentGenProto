var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file quarterPickerPopup.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Styles
import pickerHeader from "./pickerHeader";

// Types

export default (function (utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    token = utils.token;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-picker-quarter-panel {\n            width: 280px;\n\n            .", "-picker-header {\n                ", "\n            }\n\n            .", "-picker-body {\n                padding: 16px 7px;\n\n                .", "-picker-content {\n                    height: 40px;\n\n                    td {\n                        padding: 0 9px;\n\n                        .", "-picker-cell-inner {\n                            width: 48px;\n\n                            &.", "-picker-cell-inner-current-quarter {\n                                border: 1px solid ", ";\n                                line-height: 30px;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, pickerHeader(utils), prefixCls, prefixCls, prefixCls, prefixCls, token['color-primary']);
});