var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file horizontal.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import horizontalError from "./horizontalError";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken,
      token = utils.token;
    var stepsToken = componentsToken.Steps;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-steps.", "-steps-horizontal.", "-steps-layout-horizontal {\n                ", "\n\n                .", "-steps-item-title {\n                    padding-inline-end: ", "px;\n                    font-weight: ", ";\n                }\n\n                .", "-steps-item-description {\n                    font-size: ", "px;\n                    font-weight: ", ";\n                    color: ", ";\n                }\n\n                &.", "-steps-small {\n                    .", "-steps-item-description {\n                        font-size: ", "px;\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, horizontalError(utils), prefixCls, stepsToken['steps-gap-item-medium'], token['font-weight-medium'], prefixCls, token['font-size-body-medium'], token['font-weight-regular'], stepsToken['steps-color-text-disabled'], prefixCls, prefixCls, token['font-size-body-small']);
  });
};
export default useStyle;