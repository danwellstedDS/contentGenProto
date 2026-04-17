var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file base.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import baseDot from "./baseDot";
import baseError from "./baseError";
import baseFinish from "./baseFinish";
import baseIconOutlined from "./baseIconOutlined";
import baseProcess from "./baseProcess";
import baseSize from "./baseSize";
import baseSkip from "./baseSkip";
import baseWait from "./baseWait";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-steps {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), prefixCls, baseSize(utils), baseDot(utils), baseIconOutlined(utils), baseError(utils), baseFinish(utils), baseProcess(utils), baseSkip(utils), baseWait(utils));
  });
};
export default useStyle;