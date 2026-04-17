"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neatToken2AntToken;
/**
 * @file neatToken2AntToken.ts
 * @author rzh(peter.rao@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function neatToken2AntToken(theme) {
  var token = theme.components.Input;
  return {
    activeBg: token['input-color-bg'],
    activeBorderColor: token['input-color-border-press'],
    activeShadow: token['input-focus-shadow'],
    addonBg: token['input-color-bg'],
    hoverBorderColor: token['input-color-border-hover'],
    colorErrorBorder: token['input-color-border-danger'],
    colorTextDisabled: token['input-color-text-disabled'],
    colorTextPlaceholder: token['input-color-text-placeholder'],
    colorBgContainerDisabled: token['input-color-bg-disabled'],
    errorActiveShadow: token['input-focus-negative-shadow'],
    borderRadius: token['input-border-radius'],
    borderRadiusLG: token['input-border-radius'],
    borderRadiusSM: token['input-border-radius'],
    fontSize: token['input-font-size-medium'],
    fontSizeLG: token['input-font-size-large'],
    fontSizeSM: token['input-font-size-small'],
    fontSizeIcon: token['input-font-size-medium'],
    colorIcon: token['input-color-icon'],
    colorIconHover: token['input-color-icon-hover'],
    paddingXXS: token['input-gap'],
    controlHeight: token['input-size-medium'],
    controlHeightLG: token['input-size-large'],
    controlHeightSM: token['input-size-small']
  };
}