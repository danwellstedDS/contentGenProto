var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file popup.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import datePickerPopup from "./datePickerPopup";
import decadePickerPopup from "./decadePickerPopup";
import monthPickerPopup from "./monthPickerPopup";
import quarterPickerPopup from "./quarterPickerPopup";
import rangePickerPopup from "./rangePickerPopup";
import timePickerPopup from "./timePickerPopup";
import yearPickerPopup from "./yearPickerPopup";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-picker-dropdown {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), prefixCls, datePickerPopup(utils), decadePickerPopup(utils), monthPickerPopup(utils), quarterPickerPopup(utils), rangePickerPopup(utils), yearPickerPopup(utils), timePickerPopup(utils));
  });
};
export default useStyle;