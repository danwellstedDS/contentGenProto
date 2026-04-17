/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var collapseToken = theme.components.Collapse;
  return {
    headerPadding: "".concat(collapseToken['collapse-padding-header-v-medium'], "px ").concat(collapseToken['collapse-padding-header-h-medium'], "px"),
    headerBg: collapseToken['collapse-color-bg-header'],
    contentPadding: '16px 24px',
    contentBg: collapseToken['collapse-color-bg']
  };
}