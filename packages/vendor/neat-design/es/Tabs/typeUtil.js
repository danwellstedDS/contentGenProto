/**
 * @file typeUtil.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

/**
 * Check whether the props `tabBarExtraContent` is the type of `TabBarExtraMap`.
 * @param tabBarExtraContent
 */
export var isTabBarExtraMap = function isTabBarExtraMap(tabBarExtraContent) {
  return !!(tabBarExtraContent && (tabBarExtraContent.left || tabBarExtraContent.right));
};