/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var token = theme.components.Badge;
  return {
    dotSize: token['badge-size-dot'],
    indicatorHeight: token['badge-size-medium'],
    indicatorHeightSM: token['badge-size-small'],
    // indicatorZIndex: '',
    statusSize: token['badge-size-dot'],
    textFontSize: token['badge-font-size-medium'],
    textFontSizeSM: token['badge-font-size-small']
    // textFontWeight: ''
  };
}