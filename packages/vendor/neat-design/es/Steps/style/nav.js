var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file default.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import navError from "./navError";
import navFinish from "./navFinish";
import navProcess from "./navProcess";
import navShape from "./navShape";
import navSkip from "./navSkip";
import navWait from "./navWait";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var stepsToken = componentsToken.Steps;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-steps.", "-steps-horizontal.", "-steps-layout-navigation {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                padding: 0;\n\n                .", "-steps-item {\n                    padding-inline-start: 18px;\n                    text-align: left;\n                    transition: all 0.3s;\n                }\n\n                .", "-steps-item-container {\n                    display: inline-flex;\n                    align-items: center;\n                    padding: 0;\n                    margin-inline-start: ", "px;\n                    padding-block: 10px;\n                }\n\n                .", "-steps-item-content {\n                    padding-inline-end: 16px;\n                }\n\n                .", "-steps-item-icon {\n                    flex: 0 0 auto;\n                    margin-inline-end: ", "px;\n                }\n\n                .", "-steps-item-title {\n                    line-height: 24px;\n                }\n\n                &.", "-steps-small {\n                    .", "-steps-item-icon {\n                        margin-inline-end: ", "px;\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, navError(utils), navFinish(utils), navProcess(utils), navShape(utils), navSkip(utils), navWait(utils), prefixCls, prefixCls, stepsToken['steps-padding-medium'], prefixCls, prefixCls, stepsToken['steps-gap-item-medium'], prefixCls, prefixCls, prefixCls, stepsToken['steps-gap-item-small']);
  });
};
export default useStyle;