/**
 * @file useForwardedRef.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useEffect, useRef } from 'react';

// Types

export default (function (ref) {
  var innerRef = useRef(null);
  useEffect(function () {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  });
  return innerRef;
});