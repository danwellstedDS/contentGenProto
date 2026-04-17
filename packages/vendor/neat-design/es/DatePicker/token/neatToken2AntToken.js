/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var _theme$components = theme.components,
    DatePickerToken = _theme$components.DatePicker,
    SelectToken = _theme$components.Select;
  return {
    /**
     * Color
     */
    activeBg: SelectToken['select-color-bg'],
    activeBorderColor: SelectToken['select-color-border-hover'],
    cellActiveWithRangeBg: DatePickerToken['datepicker-color-bg-selected-secondary'],
    cellBgDisabled: DatePickerToken['datepicker-color-bg-disabled'],
    cellHoverBg: DatePickerToken['datepicker-color-bg-hover'],
    cellHoverWithRangeBg: DatePickerToken['datepicker-color-bg-hover-enhance'],
    cellRangeBorderColor: DatePickerToken['datepicker-color-bg-hover-enhance'],
    hoverBg: SelectToken['select-color-bg'],
    hoverBorderColor: SelectToken['select-color-border-hover'],
    colorBgContainerDisabled: DatePickerToken['datepicker-color-bg-disabled'],
    /**
     * Size
     */
    cellHeight: DatePickerToken['datepicker-size-item-1'],
    cellWidth: DatePickerToken['datepicker-size-item-1'] + 4,
    inputFontSize: 14,
    inputFontSizeLG: 16,
    inputFontSizeSM: 14,
    paddingBlock: SelectToken['select-padding-v-medium'],
    paddingBlockLG: SelectToken['select-padding-v-large'],
    paddingBlockSM: SelectToken['select-padding-v-small'],
    paddingInline: SelectToken['select-padding-h'],
    paddingInlineLG: SelectToken['select-padding-h'],
    paddingInlineSM: SelectToken['select-padding-h'],
    textHeight: 48,
    timeCellHeight: 32,
    timeColumnHeight: 256,
    timeColumnWidth: 64,
    withoutTimeCellHeight: 56,
    controlHeight: SelectToken['select-size-medium'],
    controlHeightLG: SelectToken['select-size-large'],
    controlHeightSM: SelectToken['select-size-small'],
    /**
     * Style
     */
    activeShadow: '0px 0px 0px 2px #06789D33',
    errorActiveShadow: '',
    warningActiveShadow: ''
  };
}