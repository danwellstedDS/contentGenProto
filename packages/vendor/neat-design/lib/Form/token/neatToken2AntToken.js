"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neatToken2AntToken;
/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function neatToken2AntToken(theme) {
  var formToken = theme.components.Form;
  var labelToken = theme.subComponents.Label;
  return {
    labelRequiredMarkColor: labelToken['label-color-text-required'],
    labelColor: labelToken['label-color-text'],
    labelFontSize: labelToken['label-font-size-medium'],
    labelHeight: labelToken['label-line-height-medium'],
    itemMarginBottom: formToken['form-item-gap'] + parseInt(formToken['form-item-line-height-medium']) + formToken['form-gap-v-medium'],
    inlineItemMarginBottom: formToken['form-gap-v-medium'],
    verticalLabelPadding: "0 0 ".concat(formToken['form-item-gap'], "px"),
    verticalLabelMargin: 0
  };
}