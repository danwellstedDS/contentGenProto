/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun
 */

// Types

export default function neatToken2AntToken(theme) {
  var token = theme.components.Toast;
  return {
    contentPadding: "".concat(token['toast-padding-v'], "px ").concat(token['toast-padding-h'], "px"),
    colorError: token['toast-color-icon-error'],
    colorInfo: token['toast-color-icon-info'],
    colorSuccess: token['toast-color-icon-success'],
    colorWarning: token['toast-color-icon-warning']
  };
}