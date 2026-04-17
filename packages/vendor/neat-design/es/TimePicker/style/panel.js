var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file panel.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var timePickerToken = componentsToken.TimePicker;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-picker-panel > .", "-picker-time-panel {\n            padding: 0 4px;\n        }\n\n        .", "-picker-content {\n            position: relative;\n            padding: ", "px 16px;\n\n            &::before {\n                content: '';\n                position: absolute;\n                left: 0;\n                top: ", "px;\n                display: block;\n                width: 100%;\n                height: ", "px;\n                background: ", ";\n                border-radius: ", "px;\n            }\n        }\n\n        .", "-picker-time-panel-column {\n            position: relative;\n            margin-top: 0;\n\n            &:not(:first-child) {\n                border-inline-start: none;\n            }\n\n            > li.", "-picker-time-panel-cell {\n                margin: 0;\n\n                .", "-picker-time-panel-cell-inner {\n                    width: ", "px;\n                    height: ", "px;\n                    padding: 0;\n                    border-radius: ", "px;\n                    text-align: center;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, timePickerToken['timepicker-padding-v'], timePickerToken['timepicker-padding-v'], timePickerToken['timepicker-size-item-v'], timePickerToken['timepicker-color-bg-selected'], timePickerToken['timepicker-border-radius-item'], prefixCls, prefixCls, prefixCls, timePickerToken['timepicker-size-item-h'], timePickerToken['timepicker-size-item-v'], timePickerToken['timepicker-border-radius-item']);
});