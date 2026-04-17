/**
 * @file useSize.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

var useSize = function useSize(size) {
  switch (size) {
    case 'small':
      return 'small';
    case 'large':
      return 'large';
    default:
      return 'middle';
  }
};
export default useSize;