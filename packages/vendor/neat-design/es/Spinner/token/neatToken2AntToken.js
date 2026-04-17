/**
 * @file neatToken2AntToken.ts
 * @author rzh(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var token = theme.components.Spinner;
  return {
    dotSize: token['spinner-size-medium'],
    dotSizeLG: token['spinner-size-large'],
    dotSizeSM: token['spinner-size-small']
  };
}