/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var token = theme.components.Alert;
  return {
    defaultPadding: "".concat(token['alert-padding-v'], "px ").concat(token['alert-padding-h'], "px"),
    withDescriptionIconSize: token['alert-size-icon'],
    withDescriptionPadding: "".concat(token['alert-padding-v'], "px ").concat(token['alert-padding-h'], "px")
  };
}