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
  var token = theme.token;
  return {
    /**
     * @desc 主体部分背景色
     * @descEN Background Color of body
     */
    bodyBg: token['color-bg'],
    /**
     * @desc 顶部背景色
     * @descEN Background Color of header
     */
    headerBg: token['color-bg'],
    /**
     * @desc 顶部高度
     * @descEN Height of header
     */
    headerHeight: 57,
    /**
     * @desc 顶部内边距
     * @descEN Padding of header
     */
    headerPadding: 0,
    /**
     * @desc 顶部文字颜色
     * @descEN Text color of header
     */
    headerColor: token['color-text-primary'],
    /**
     * @desc 页脚内边距
     * @descEN Padding of footer
     */
    footerPadding: 0,
    /**
     * @desc 页脚背景色
     * @descEN Background Color of footer
     */
    footerBg: token['color-bg'],
    /**
     * @desc 侧边栏背景色
     * @descEN Background Color of sider
     */
    siderBg: token[''],
    /**
     * @desc 侧边栏开关高度
     * @descEN Height of sider trigger
     */
    triggerHeight: token[''],
    /**
     * @desc 侧边栏开关背景色
     * @descEN Background Color of sider trigger
     */
    triggerBg: token[''],
    /**
     * @desc 侧边栏开关颜色
     * @descEN Color of sider trigger
     */
    triggerColor: token[''],
    /**
     * @desc collapse 为 0 时侧边栏开关宽度
     * @descEN Width of sider trigger when collapse is 0
     */
    zeroTriggerWidth: token[''],
    /**
     * @desc collapse 为 0 时侧边栏开关高度
     * @descEN Height of sider trigger when collapse is 0
     */
    zeroTriggerHeight: token[''],
    /**
     * @desc 亮色主题侧边栏背景色
     * @descEN Background Color of light theme sider
     */
    lightSiderBg: token[''],
    /**
     * @desc 亮色主题侧边栏开关背景色
     * @descEN Background Color of light theme sider trigger
     */
    lightTriggerBg: token[''],
    /**
     * @desc 亮色主题侧边栏开关颜色
     * @descEN Color of light theme sider trigger
     */
    lightTriggerColor: token['']
  };
}