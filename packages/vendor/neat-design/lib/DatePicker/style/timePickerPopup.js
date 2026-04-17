"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file DatePickerDropdown.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    componentsToken = utils.componentsToken;
  var timePickerToken = componentsToken.TimePicker;

  // &::before {
  //     content: '';
  //     position: absolute;
  //     left: 8px;
  //     top: 16px;
  //     width: 16px;
  //     height: 32px;
  //     background: ${timePickerToken[
  //         'timepicker-color-bg-selected'
  //     ]};
  //     border-top-left-radius: ${timePickerToken[
  //         'timepicker-border-radius-item'
  //     ]}px;
  //     border-bottom-left-radius: ${timePickerToken[
  //         'timepicker-border-radius-item'
  //     ]}px;
  // }
  //
  // &::after {
  //     content: '';
  //     position: absolute;
  //     right: 8px;
  //     top: 16px;
  //     width: 16px;
  //     height: 32px;
  //     background: ${timePickerToken[
  //         'timepicker-color-bg-selected'
  //     ]};
  //     border-top-right-radius: ${timePickerToken[
  //         'timepicker-border-radius-item'
  //     ]}px;
  //     border-bottom-right-radius: ${timePickerToken[
  //         'timepicker-border-radius-item'
  //     ]}px;
  // }

  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-picker-time-panel {\n            .", "-picker-content {\n                position: relative;\n                padding: 16px 24px;\n            }\n\n            .", "-picker-time-panel-column {\n                border: none;\n                margin: 0;\n\n                .", "-picker-time-panel-cell {\n                    margin: 0;\n\n                    .", "-picker-time-panel-cell-inner {\n                        width: 64px;\n                        padding: 0;\n                        text-align: center;\n                    }\n\n                    &.", "-picker-time-panel-cell-selected {\n                        .", "-picker-time-panel-cell-inner {\n                            background: ", ";\n                            color: ", ";\n                            border-radius: 0;\n\n                            &:hover {\n                                background: ", ";\n\n                                color: ", ";\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, timePickerToken['timepicker-color-bg-selected'], timePickerToken['timepicker-color-text-selected'], timePickerToken['timepicker-color-bg-selected-hover'], timePickerToken['timepicker-color-text-selected-hover']);
};