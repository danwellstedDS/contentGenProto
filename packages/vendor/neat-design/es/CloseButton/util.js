/**
 * @file util.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export function parseSize(size) {
  if (typeof size === 'number') {
    return size;
  }
  switch (size) {
    case 'small':
      return 16;
    case 'medium':
      return 16;
    case 'large':
      return 18;
    default:
      return undefined;
  }
}