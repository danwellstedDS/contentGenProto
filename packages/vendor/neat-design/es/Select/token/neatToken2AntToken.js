/**
 * @file neatToken2AntToken.ts
 * @author rzh(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { ladderColor } from '@derbysoft/neat-design-token';

// Types

export default function neatToken2AntToken(theme) {
  var token = theme.components.Select;
  return {
    colorBgContainerDisabled: token['select-color-bg-disabled'],
    multipleItemBg: ladderColor['neutral-3'],
    optionActiveBg: token['dropdown-color-bg-active'],
    optionSelectedColor: token['dropdown-color-text-active'],
    selectorBg: token['select-color-bg'],
    colorTextPlaceholder: token['select-color-text-placeholder'],
    colorTextDisabled: token['select-color-text-disabled'],
    colorIcon: token['select-color-icon'],
    colorIconHover: token['select-color-icon-hover'],
    fontSize: token['select-font-size-medium'],
    fontSizeLG: token['select-font-size-large'],
    fontSizeSM: token['select-font-size-small'],
    borderRadius: token['select-border-radius'],
    borderRadiusLG: token['select-border-radius'],
    borderRadiusSM: token['select-border-radius'],
    paddingXXS: token['dropdown-padding'],
    controlHeight: token['select-size-medium'],
    controlHeightLG: token['select-size-large'],
    controlHeightSM: token['select-size-small'],
    multipleItemHeight: 24,
    multipleItemHeightSM: 18,
    multipleItemHeightLG: 32
  };
}