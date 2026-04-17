/**
 * @file neatToken2AntToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var token = theme.components.Tooltip;
  return {
    borderRadius: token['toolitp-border-radius']
  };
}