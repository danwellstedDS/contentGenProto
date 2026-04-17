var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import color from "./color";
import danger from "./danger";
import dropdown from "./dropdown";
import size from "./size";

// Types

var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    return utils.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            font-family: ", ";\n            font-weight: ", ";\n\n            &.", "-btn {\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), utils.token['font-family'], utils.token['font-weight-medium'], utils.prefixCls, size(utils), color(utils), danger(utils), dropdown(utils));
  });
};
export default useStyle;