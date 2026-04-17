var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file footer.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Styles
import nowButton from "./nowButton";
import okButton from "./okButton";

// Types

export default (function (utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    token = utils.token;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-picker-footer {\n            border-top-color: ", ";\n\n            .", "-picker-footer-extra {\n                border-bottom-color: ", ";\n            }\n\n            .", "-picker-now {\n                ", ";\n            }\n\n            .", "-picker-ok {\n                ", ";\n            }\n        }\n    "])), prefixCls, token['color-border-divider'], prefixCls, token['color-border-divider'], prefixCls, nowButton(utils), prefixCls, okButton(utils));
});