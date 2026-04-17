/**
 * @file neatToken2AntToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var token = theme.components.Radio;
  return {
    buttonBg: token['radio-color-bg-off'],
    wireframe: false,
    dotSize: 6,
    radioSize: token['radio-size-medium']
  };
}