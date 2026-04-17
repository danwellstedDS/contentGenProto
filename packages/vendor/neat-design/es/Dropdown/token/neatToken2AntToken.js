/**
 * @file neatToken2AntToken.ts
 * @author Peter(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var token = theme.components.Dropdown;
  return {
    // useless~
    // paddingBlock: token['dropdown-padding'],
    paddingXXS: token['dropdown-padding']
  };
}