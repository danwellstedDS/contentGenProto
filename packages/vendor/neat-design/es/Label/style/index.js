var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls,
      subComponentsToken = _ref.subComponentsToken;
    var labelToken = subComponentsToken.Label;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-label {\n                display: inline-flex;\n                align-items: center;\n                gap: ", "px;\n                color: ", ";\n\n                .", "-label-required-mark {\n                    color: ", ";\n                }\n\n                .", "-label-tooltips-icon {\n                    color: ", ";\n                }\n\n                .", "-label-optional-text {\n                    color: ", ";\n                }\n\n                &.", "-label-size-small {\n                    line-height: ", ";\n                    font-size: ", "px;\n\n                    .", "-label-tooltips-icon {\n                        width: ", "px;\n                        height: ", "px;\n                        line-height: ", "px;\n                        font-size: ", "px;\n                    }\n                }\n\n                &.", "-label-size-medium {\n                    line-height: ", ";\n                    font-size: ", "px;\n\n                    .", "-label-tooltips-icon {\n                        width: ", "px;\n                        height: ", "px;\n                        line-height: ", "px;\n                        font-size: ", "px;\n                    }\n                }\n\n                &.", "-label-size-large {\n                    line-height: ", ";\n                    font-size: ", "px;\n\n                    .", "-label-tooltips-icon {\n                        width: ", "px;\n                        height: ", "px;\n                        line-height: ", "px;\n                        font-size: ", "px;\n                    }\n                }\n            }\n        "])), prefixCls, labelToken['label-gap-item'], labelToken['label-color-text'], prefixCls, labelToken['label-color-text-required'], prefixCls, labelToken['label-color-icon'], prefixCls, labelToken['label-color-text-optional'], prefixCls, labelToken['label-line-height-small'], labelToken['label-font-size-small'], prefixCls, labelToken['label-size-icon-small'], labelToken['label-size-icon-small'], labelToken['label-size-icon-small'], labelToken['label-size-icon-small'], prefixCls, labelToken['label-line-height-medium'], labelToken['label-font-size-medium'], prefixCls, labelToken['label-size-icon-medium'], labelToken['label-size-icon-medium'], labelToken['label-size-icon-medium'], labelToken['label-size-icon-medium'], prefixCls, labelToken['label-line-height-large'], labelToken['label-font-size-large'], prefixCls, labelToken['label-size-icon-large'], labelToken['label-size-icon-large'], labelToken['label-size-icon-large'], labelToken['label-size-icon-large']);
  });
};
export default useStyle;