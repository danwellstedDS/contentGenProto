"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neatToken2AntToken;
/**
 * @file neatToken2AntToken.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function neatToken2AntToken(theme) {
  var token = theme.components.Button;
  return {
    /**
     * @desc 文字克重
     * @descEN Text color of primary button
     */
    fontWeight: token['button-font-weight'],
    /**
     * @desc 主要按钮文本颜色
     * @descEN Text color of primary button
     */
    primaryColor: token['button-color-text-primary'],
    /**
     * @desc 默认按钮文本颜色
     * @descEN Text color of default button
     */
    defaultColor: token['button-color-text-secondary'],
    /**
     * @desc 默认按钮背景色
     * @descEN Background color of default button
     */
    defaultBg: token['button-color-bg-secondary'],
    /**
     * @desc 默认按钮边框颜色
     * @descEN Border color of default button
     */
    defaultBorderColor: token['button-color-border-secondary'],
    /**
     * @desc 禁用状态边框颜色
     * @descEN Border color of disabled button
     */
    borderColorDisabled: token['button-color-border-secondary-disabled'],
    /**
     * @desc 按钮横向内间距
     * @descEN Horizontal padding of button
     */
    paddingInline: token['button-padding-h-medium'],
    /**
     * @desc 大号按钮横向内间距
     * @descEN Horizontal padding of large button
     */
    paddingInlineLG: token['button-padding-h-large'],
    /**
     * @desc 小号按钮横向内间距
     * @descEN Horizontal padding of small button
     */
    paddingInlineSM: token['button-padding-h-small'],
    /**
     * @desc 只有图标的按钮图标尺寸
     * @descEN Icon size of button which only contains icon
     */
    onlyIconSize: token['button-size-icon-medium'],
    /**
     * @desc 大号只有图标的按钮图标尺寸
     * @descEN Icon size of large button which only contains icon
     */
    onlyIconSizeLG: token['button-size-icon-large'],
    /**
     * @desc 小号只有图标的按钮图标尺寸
     * @descEN Icon size of small button which only contains icon
     */
    onlyIconSizeSM: token['button-size-icon-small'],
    /**
     * @desc 按钮内容字体大小
     * @descEN Font size of button content
     */
    contentFontSize: token['button-font-medium'],
    /**
     * @desc 大号按钮内容字体大小
     * @descEN Font size of large button content
     */
    contentFontSizeLG: token['button-font-large'],
    /**
     * @desc 小号按钮内容字体大小
     * @descEN Font size of small button content
     */
    contentFontSizeSM: token['button-font-small'],
    /**
     * @desc 控制元素的特小内间距。
     */
    paddingXS: token['button-gap']
  };
}