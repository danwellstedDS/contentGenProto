var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file rangePicker.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import separator from "./separator";
import suffix from "./suffix";
import trigger from "./trigger";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-picker.", "-time-range-picker {\n                ", ";\n                ", ";\n                ", ";\n\n                .", "-picker-active-bar {\n                    display: none;\n                }\n            }\n        "])), prefixCls, prefixCls, trigger(utils), suffix(utils), separator(utils), prefixCls);
  });
};
export default useStyle;