/**
 * @file useGetWindowSize.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */

// Hooks
import { useEffect } from 'react';

// Types

var getWindowSize = function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    offsetWidth: window.innerWidth,
    offsetHeight: window.innerHeight
  };
};
var useGetWindowSize = function useGetWindowSize(_ref) {
  var onResize = _ref.onResize;
  useEffect(function () {
    onResize(getWindowSize());
    var handleResize = function handleResize() {
      onResize(getWindowSize());
    };

    // 监听
    window.addEventListener('resize', handleResize);
    // 销毁
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, [onResize]);
};
export default useGetWindowSize;