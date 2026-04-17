"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neatToken2AntToken;
/**
 * @file neatToken2AntToken.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Types

function neatToken2AntToken(theme) {
  var token = theme.components.Segmented;
  return {
    /**
     * @desc 选项文本颜色
     * @descEN Text color of item
     */
    itemColor: token['segmented-color-text'],
    /**
     * @desc 选项悬浮态文本颜色
     * @descEN Text color of item when hover
     */
    itemHoverColor: token['segmented-color-text-hover'],
    /**
     * @desc 选项悬浮态背景颜色
     * @descEN Background color of item when hover
     */
    itemHoverBg: token['segmented-color-bg-item-hover'],
    /**
     * @desc 选项激活态背景颜色
     * @descEN Background color of item when active
     */
    itemActiveBg: token['segmented-color-bg-item-press'],
    /**
     * @desc 选项选中时背景颜色
     * @descEN Background color of item when selected
     */
    itemSelectedBg: token['segmented-color-bg-item-active'],
    /**
     * @desc 选项选中时文字颜色
     * @descEN Text color of item when selected
     */
    itemSelectedColor: token['segmented-color-text-active'],
    /**
     * @desc Segmented 控件容器的 padding
     * @descEN Padding of Segmented container
     */
    trackPadding: token['segmented-padding-item'],
    /**
     * @desc Segmented 控件容器的 背景色
     * @descEN Padding of Segmented container
     */
    trackBg: token['segmented-color-bg'],
    /**
     * @desc 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。
     */
    colorText: token['segmented-color-text'],
    /**
     * @desc Segmented 控制禁用状态下的字体颜色。
     */
    colorTextDisabled: token['segmented-color-text-disabled'],
    /**
     * @desc 基础组件的圆角大小，例如按钮、输入框、卡片等
     */
    borderRadius: token['segmented-border-radius-medium'],
    /**
     * @desc LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。
     */
    borderRadiusLG: token['segmented-border-radius-large'],
    /**
     * @desc SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角
     */
    borderRadiusSM: token['segmented-border-radius-small'],
    /**
     * @desc XS号圆角，用于组件中的一些小圆角，如 Segmented 、Arrow 等一些内部圆角的组件样式中。
     */
    borderRadiusXS: token['segmented-border-radius-small'],
    /**
     * @desc Ant Design 中按钮和输入框等基础控件的高度
     */
    controlHeight: token['segmented-size-medium'],
    /**
     * @desc 较高的组件高度
     */
    controlHeightLG: token['segmented-size-large'],
    /**
     * @desc 较小的组件高度
     */
    controlHeightSM: token['segmented-size-small'],
    /**
     * @desc 控制元素水平内间距。
     */
    controlPaddingHorizontal: token['segmented-padding-medium'],
    /**
     * @desc 控制元素中小尺寸水平内间距。
     */
    controlPaddingHorizontalSM: token['segmented-padding-small'],
    /**
     * @desc 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。
     */
    fontSize: token['segmented-font-size-medium'],
    /**
     * @desc 大号字体大小
     */
    fontSizeLG: token['segmented-font-size-large'],
    /**
     * @desc 线条高度
     */
    lineWidth: 0,
    /**
     * @desc 控制元素外边距，中小尺寸。
     * @descEN Background of Segmented container
     */
    marginSM: token['segmented-gap'] * 2,
    /**
     * @desc 控制元素的极小内间距。
     * @descEN Background of Segmented container
     */
    paddingXXS: token['segmented-gap']
  };
}