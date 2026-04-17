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

function neatToken2AntToken(token) {
  return {
    fontFamily: token['font-family'],
    colorPrimary: token['color-primary'],
    colorPrimaryActive: token['color-accent-focus'],
    colorPrimaryHover: token['color-primary-hover'],
    colorPrimaryBorder: token['color-border'],
    colorPrimaryBorderHover: token['color-border-hover'],
    colorPrimaryBg: token['ds-blue-0'],
    colorPrimaryBgHover: token['ds-blue-0'],
    colorText: token['color-text-primary'],
    colorTextDisabled: token['color-text-disabled'],
    borderRadiusLG: token['border-radius-base'],
    colorBorder: token['color-border'],
    colorBgLayout: token['neutral-0'],
    colorError: token['color-negative'],
    colorErrorBg: token['color-negative-sunken'],
    colorErrorBorder: token['color-negative-enhance'],
    colorInfo: token['color-info'],
    colorInfoBg: token['color-info-sunken'],
    colorInfoBorder: token['color-info-enhance'],
    colorSuccess: token['color-positive'],
    colorSuccessBg: token['color-positive-sunken'],
    colorSuccessBorder: token['color-positive-enhance'],
    colorWarning: token['color-notice'],
    colorWarningBg: token['color-notice-sunken'],
    colorWarningBorder: token['color-notice-enhance'],
    controlHeight: token['size-5x'],
    controlHeightLG: token['size-6x'],
    controlHeightSM: token['size-4x'],
    controlHeightXS: token['size-3x'],
    controlOutline: "".concat(token['color-primary'], "33"),
    controlOutlineWidth: 2
  };
}