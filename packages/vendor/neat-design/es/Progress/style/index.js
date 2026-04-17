var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import bar from "./bar";
import bold from "./bold";
import color from "./color";
import ring from "./ring";
import ringMini from "./ringMini";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var progressToken = componentsToken.Progress;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-progress {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), prefixCls, color(utils), bar(utils), bold(utils), ring(utils), ringMini(utils));
  });
};
export default useStyle;