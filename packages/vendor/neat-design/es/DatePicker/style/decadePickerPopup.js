var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file decadePickerPopup.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Styles
import pickerHeader from "./pickerHeader";

// Types

export default (function (utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-picker-decade-panel {\n            width: 280px;\n\n            .", "-picker-header {\n                ", "\n            }\n\n            .", "-picker-body {\n                padding: 0 2px 8px;\n\n                .", "-picker-content {\n                    td {\n                        padding: 0 4px;\n\n                        .", "-picker-cell-inner {\n                            width: 84px;\n                        }\n                    }\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, pickerHeader(utils), prefixCls, prefixCls, prefixCls);
});