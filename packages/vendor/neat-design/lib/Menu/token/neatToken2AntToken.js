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
  var token = theme.components.Menu;
  return {
    /**
     * Color
     */
    itemActiveBg: token['menu-color-bg-active'],
    itemBg: token['menu-color-bg'],
    itemColor: token['menu-color-text'],
    itemHoverBg: token['menu-color-bg-hover'],
    itemHoverColor: token['menu-color-text-hover'],
    itemSelectedBg: token['menu-color-bg-active'],
    itemSelectedColor: token['menu-color-text-active'],
    popupBg: token['menu-color-bg'],
    subMenuItemBg: token['menu-color-bg'],
    /**
     * Size
     */
    collapsedIconSize: token['menu-size-icon'],
    collapsedWidth: token['menu-size-h-fold'],
    dropdownWidth: token['menu-size-h-expand'],
    iconMarginInlineEnd: token['menu-gap-item'],
    iconSize: token['menu-size-icon'],
    itemHeight: token['menu-size-item'],
    itemMarginBlock: token['menu-gap'],
    itemMarginInline: token['menu-padding-h'],
    itemBorderRadius: token['menu-item-radius'],
    subMenuItemBorderRadius: token['menu-item-radius']
  };
}