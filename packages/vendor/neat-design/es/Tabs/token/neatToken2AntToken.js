/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var tabsToken = theme.components.Tabs;
  return {
    /**
     * @desc 卡片标签页背景色
     * @descEN Background color of card tab
     */
    cardBg: tabsToken['tabs-color-bg-item'],
    /**
     * @desc 卡片标签页高度
     * @descEN Height of card tab
     */
    cardHeight: tabsToken['tabs-size-medium'],
    /**
     * @desc 卡片标签页内间距
     * @descEN Padding of card tab
     */
    cardPadding: "0 ".concat(tabsToken['tabs-padding-medium'], "px"),
    /**
     * @desc 小号卡片标签页内间距
     * @descEN Padding of small card tab
     */
    cardPaddingSM: "0 ".concat(tabsToken['tabs-padding-small'], "px"),
    /**
     * @desc 大号卡片标签页内间距
     * @descEN Padding of large card tab
     */
    cardPaddingLG: "0 ".concat(tabsToken['tabs-padding-large'], "px"),
    /**
     * @desc 标签页标题文本大小
     * @descEN Font size of title
     */
    titleFontSize: tabsToken['tabs-font-size-medium'],
    /**
     * @desc 大号标签页标题文本大小
     * @descEN Font size of large title
     */
    titleFontSizeLG: tabsToken['tabs-font-size-large'],
    /**
     * @desc 小号标签页标题文本大小
     * @descEN Font size of small title
     */
    titleFontSizeSM: tabsToken['tabs-font-size-small'],
    /**
     * @desc 指示条颜色
     * @descEN Color of indicator
     */
    inkBarColor: tabsToken['tabs-color-border-active'],
    /**
     * @desc 横向标签页外间距
     * @descEN Horizontal margin of horizontal tab
     */
    horizontalMargin: '0',
    /**
     * @desc 横向标签页标签间距
     * @descEN Horizontal gutter of horizontal tab
     */
    horizontalItemGutter: tabsToken['tabs-gap-item'],
    /**
     * @desc 横向标签页标签外间距
     * @descEN Horizontal margin of horizontal tab item
     */
    horizontalItemMargin: '0',
    /**
     * @desc 横向标签页标签外间距（RTL）
     * @descEN Horizontal margin of horizontal tab item (RTL)
     */
    horizontalItemMarginRTL: '0',
    /**
     * @desc 横向标签页标签内间距
     * @descEN Horizontal padding of horizontal tab item
     */
    horizontalItemPadding: "0 ".concat(tabsToken['tabs-padding-medium'], "px"),
    /**
     * @desc 大号横向标签页标签内间距
     * @descEN Horizontal padding of large horizontal tab item
     */
    horizontalItemPaddingLG: "0 ".concat(tabsToken['tabs-padding-large'], "px"),
    /**
     * @desc 小号横向标签页标签内间距
     * @descEN Horizontal padding of small horizontal tab item
     */
    horizontalItemPaddingSM: "0 ".concat(tabsToken['tabs-padding-small'], "px"),
    // /**
    //  * @desc 纵向标签页标签内间距
    //  * @descEN Vertical padding of vertical tab item
    //  */
    // verticalItemPadding: string;
    //
    // /**
    //  * @desc 纵向标签页标签外间距
    //  * @descEN Vertical margin of vertical tab item
    //  */
    // verticalItemMargin: string;

    /**
     * @desc 标签文本颜色
     * @descEN Text color of tab
     */
    itemColor: tabsToken['tabs-color-text'],
    /**
     * @desc 标签激活态文本颜色
     * @descEN Text color of active tab
     */
    itemActiveColor: tabsToken['tabs-color-text-active'],
    /**
     * @desc 标签悬浮态文本颜色
     * @descEN Text color of hover tab
     */
    itemHoverColor: tabsToken['tabs-color-text-hover'],
    /**
     * @desc 标签选中态文本颜色
     * @descEN Text color of selected tab
     */
    itemSelectedColor: tabsToken['tabs-color-text-press'],
    /**
     * @desc 卡片标签间距
     * @descEN Gutter of card tab
     */
    cardGutter: tabsToken['tabs-gap']
  };
}