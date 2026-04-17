var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import checkbox from "./checkbox";
import color from "./color";
import line from "./line";
import size from "./size";
import switcher from "./switcher";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-tree {\n                ", ";\n                ", ";\n                ", ";\n                ", ";\n\n                &.", "-tree-show-line {\n                    ", ";\n                }\n            }\n        "])), prefixCls, switcher(utils), checkbox(utils), size(utils), color(utils), prefixCls, line(utils));
  });
};
export default useStyle;