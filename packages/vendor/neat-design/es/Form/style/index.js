var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import additional from "./additional";
import feedback from "./feedback";
import formItem from "./formItem";
import label from "./label";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-form {\n                ", ";\n                ", ";\n                ", ";\n                ", ";\n            }\n        "])), prefixCls, formItem(utils), label(utils), additional(utils), feedback(utils));
  });
};
export default useStyle;