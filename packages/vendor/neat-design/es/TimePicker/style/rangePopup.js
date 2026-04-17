var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file rangePopup.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import footer from "./footer";
import panel from "./panel";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var timePickerToken = componentsToken.TimePicker;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-picker-dropdown.", "-time-range-picker-dropdown {\n                ", ";\n                ", ";\n                padding: 0;\n\n                .", "-picker-range-arrow {\n                    display: none;\n                }\n\n                .", "-picker-panel-layout {\n                    > div {\n                        &:not(:first-child) {\n                            .", "-picker-panel {\n                                border-left: 1px solid\n                                    ", ";\n                            }\n                        }\n\n                        &:not(:last-child) .", "-picker-footer > * {\n                            display: none;\n                        }\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, panel(utils), footer(utils), prefixCls, prefixCls, prefixCls, timePickerToken['timepicker-color-divider'], prefixCls);
  });
};
export default useStyle;