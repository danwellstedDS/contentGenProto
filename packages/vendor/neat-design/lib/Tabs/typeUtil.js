"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTabBarExtraMap = void 0;
/**
 * @file typeUtil.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

/**
 * Check whether the props `tabBarExtraContent` is the type of `TabBarExtraMap`.
 * @param tabBarExtraContent
 */
var isTabBarExtraMap = exports.isTabBarExtraMap = function isTabBarExtraMap(tabBarExtraContent) {
  return !!(tabBarExtraContent && (tabBarExtraContent.left || tabBarExtraContent.right));
};