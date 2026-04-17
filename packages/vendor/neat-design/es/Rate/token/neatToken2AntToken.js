/**
 * @file neatToken2AntToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var token = theme.components.Rate;
  return {
    starColor: token['rate-color-selected'],
    starBg: token['rate-color-default'],
    starHoverScale: 'scale(1.2)'
  };
}